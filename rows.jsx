// Metric rows — one component per row type

const ICONS = {
  MapPin, ImageIcon, DollarSign, Target, Sparkles, Layers, Home, Maximize,
  User, Shield, School, Car, Compass, Store, Zap, Landmark, Droplets,
  Flame, Navigation, Building,
};

// Row label column
const RowLabel = ({ icon, label, tip }) => {
  const Icon = ICONS[icon] || Info;
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:10, padding:'20px 24px',
      fontFamily:T.fontSans, fontSize:14, fontWeight:600, color:T.text,
    }}>
      <Icon size={16} style={{color: T.sec}}/>
      <span>{label}</span>
      <InfoDot title={tip || label}/>
    </div>
  );
};

// Generic row shell: 1 label column + N data columns
const Row = ({ children, style }) => (
  <div style={{
    display:'grid',
    gridTemplateColumns: `minmax(220px, 220px) 1fr`,
    borderTop: `1px solid ${T.line}`,
    ...style,
  }}>{children}</div>
);

const ValueCells = ({ count, children }) => (
  <div style={{
    display:'grid', gridTemplateColumns: `repeat(${count}, 1fr)`,
    alignItems:'center',
  }}>{children}</div>
);

const Cell = ({ children, style }) => (
  <div style={{
    padding:'20px 20px', textAlign:'center',
    display:'flex', alignItems:'center', justifyContent:'center',
    minHeight: 72, ...style,
  }}>{children}</div>
);

// ----- Row renderers -----

const DetailsRow = ({ props }) => (
  <Row>
    <RowLabel icon="MapPin" label="Property Details" tip="Address and property type"/>
    <ValueCells count={props.length}>
      {props.map(p => {
        const TypeIcon = ICONS[p.typeIcon] || Home;
        return (
          <Cell key={p.id} style={{flexDirection:'column', gap:8}}>
            {p.winner && (
              <Pill variant="trophy" icon={<Trophy size={10}/>}>Winner</Pill>
            )}
            <div style={{
              fontFamily:T.fontSans, fontWeight:600, fontSize:14, color:T.text,
              textAlign:'center',
            }}>{p.address}</div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:6,
              fontFamily:T.fontSans, fontSize:13, color:T.sec,
            }}>
              <TypeIcon size={14}/>
              <span>{p.type}</span>
            </div>
          </Cell>
        );
      })}
    </ValueCells>
  </Row>
);

const ImagesRow = ({ props }) => (
  <Row>
    <RowLabel icon="ImageIcon" label="Property Images" tip="Listing photos"/>
    <ValueCells count={props.length}>
      {props.map(p => (
        <Cell key={p.id} style={{padding:'16px 20px'}}>
          <div style={{width:'100%', maxWidth:240}}>
            <PlaceholderImage aspect="4/3"/>
          </div>
        </Cell>
      ))}
    </ValueCells>
  </Row>
);

const PriceRow = ({ props }) => (
  <Row>
    <RowLabel icon="DollarSign" label="Price" tip="Listing or last-sold price"/>
    <ValueCells count={props.length}>
      {props.map(p => (
        <Cell key={p.id}>
          <span style={{
            fontFamily:T.fontData, fontSize:18, fontWeight:700, color:T.text,
            fontVariantNumeric:'tabular-nums',
          }}>{p.priceLabel}</span>
        </Cell>
      ))}
    </ValueCells>
  </Row>
);

const ScoreRow = ({ props }) => (
  <Row>
    <RowLabel icon="Target" label="Overall Score" tip="Growth vs median prediction"/>
    <ValueCells count={props.length}>
      {props.map(p => (
        <Cell key={p.id}>
          <span style={{
            fontFamily:T.fontData, fontSize:18, fontWeight:700,
            color: p.growthSign === 'neg' ? T.red : T.green,
            fontVariantNumeric:'tabular-nums',
          }}>
            {p.growth > 0 ? '+' : ''}{p.growth.toFixed(2)}%
          </span>
        </Cell>
      ))}
    </ValueCells>
  </Row>
);

const SummaryRow = ({ props, expanded, onToggle }) => (
  <Row>
    <RowLabel icon="Sparkles" label="Property Summary" tip="AI-generated summary"/>
    <ValueCells count={props.length}>
      {props.map(p => {
        const isExpanded = expanded[p.id];
        const text = p.summary;
        const truncated = !isExpanded && text.length > 165;
        const display = truncated ? text.slice(0, 165) + '…' : text;
        return (
          <Cell key={p.id} style={{flexDirection:'column', alignItems:'flex-start', textAlign:'left', gap:4, padding:'20px 20px'}}>
            <p style={{
              fontFamily:T.fontSans, fontSize:12, lineHeight:1.55, color:T.sec, margin:0,
            }}>{display}</p>
            {text.length > 165 && (
              <button onClick={()=>onToggle(p.id)} style={{
                fontFamily:T.fontSans, fontSize:12, fontWeight:600, color: T.indigo,
                background:'none', border:'none', padding:0, cursor:'pointer',
              }}>{isExpanded ? 'Show less' : 'Show more'}</button>
            )}
          </Cell>
        );
      })}
    </ValueCells>
  </Row>
);

const TextRow = ({ props, metric }) => (
  <Row>
    <RowLabel icon={metric.icon} label={metric.label}/>
    <ValueCells count={props.length}>
      {props.map(p => {
        const v = p[metric.field];
        const empty = v == null || v === '—';
        return (
          <Cell key={p.id}>
            <span style={{
              fontFamily:T.fontSans, fontSize:14, color: empty ? T.muted : T.text,
              fontWeight: empty ? 400 : 500,
            }}>{empty ? '—' : v}</span>
          </Cell>
        );
      })}
    </ValueCells>
  </Row>
);

const EstValueRow = ({ props }) => (
  <Row>
    <RowLabel icon="DollarSign" label="Estimated Value" tip="PropTrack AVM estimate"/>
    <ValueCells count={props.length}>
      {props.map(p => (
        <Cell key={p.id}>
          <span style={{
            fontFamily:T.fontData, fontSize:18, fontWeight:700, color:T.text,
            fontVariantNumeric:'tabular-nums',
          }}>{p.estValueLabel}</span>
        </Cell>
      ))}
    </ValueCells>
  </Row>
);

const OwnerDonutRow = ({ props }) => (
  <Row>
    <RowLabel icon="User" label="Owner Occupier" tip="ABS census ownership breakdown"/>
    <ValueCells count={props.length}>
      {props.map(p => (
        <Cell key={p.id} style={{flexDirection:'column', gap:14, padding:'24px 20px'}}>
            <Donut
              size={132}
              segments={[
                { value: p.ownedOutright, color: '#6FA417' },
                { value: p.ownedMortgage, color: '#ABE435' },
                { value: p.rented,        color: '#4C3AED' },
                { value: p.other,         color: '#7E86FB' },
              ]}
              centerLabel={`${p.ownerOccupier}%`}
            />
            <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', gap:2}}>
              <LegendRow color="#6FA417" label="Owned Outright" value={`${p.ownedOutright}%`}/>
              <LegendRow color="#ABE435" label="Owned with Mortgage" value={`${p.ownedMortgage}%`}/>
              <LegendRow color="#4C3AED" label="Rented" value={`${p.rented}%`}/>
              <LegendRow color="#7E86FB" label="Other" value={`${p.other}%`}/>
            </div>
        </Cell>
      ))}
    </ValueCells>
  </Row>
);

const CrimeRow = ({ props }) => (
  <Row>
    <RowLabel icon="Shield" label="Crime Score" tip="Lower is better"/>
    <ValueCells count={props.length}>
      {props.map(p => (
        <Cell key={p.id} style={{flexDirection:'column', gap:10, padding:'20px'}}>
          <div style={{width:'100%'}}>
            <ProgressBar value={p.crimeScore}/>
          </div>
          <div style={{fontFamily:T.fontSans, fontSize:12, color:T.sec, textAlign:'center', lineHeight:1.6}}>
            <div>Violent Crimes per 1000ppl: <b style={{color:T.text, fontFamily:T.fontData}}>{p.violentCrimes}</b></div>
            <div>Property Crimes per 1000ppl: <b style={{color:T.text, fontFamily:T.fontData}}>{p.propertyCrimes}</b></div>
          </div>
        </Cell>
      ))}
    </ValueCells>
  </Row>
);

const ProgressRow = ({ props, metric }) => (
  <Row>
    <RowLabel icon={metric.icon} label={metric.label}/>
    <ValueCells count={props.length}>
      {props.map(p => {
        const v = p[metric.field];
        return (
          <Cell key={p.id} style={{padding:'20px'}}>
            {v == null
              ? <span style={{color:T.muted, fontSize:14}}>—</span>
              : <div style={{width:'100%'}}><ProgressBar value={v}/></div>}
          </Cell>
        );
      })}
    </ValueCells>
  </Row>
);

const BoolRow = ({ props, metric }) => (
  <Row>
    <RowLabel icon={metric.icon} label={metric.label}/>
    <ValueCells count={props.length}>
      {props.map(p => (
        <Cell key={p.id}>
          {p[metric.field] ? <CheckBadge/> : <CrossBadge/>}
        </Cell>
      ))}
    </ValueCells>
  </Row>
);

// Dispatch
const MetricRow = ({ metric, props, expanded, onToggleExpand }) => {
  switch (metric.type) {
    case 'details': return <DetailsRow props={props}/>;
    case 'images':  return <ImagesRow props={props}/>;
    case 'price':   return <PriceRow props={props}/>;
    case 'score':   return <ScoreRow props={props}/>;
    case 'summary': return <SummaryRow props={props} expanded={expanded} onToggle={onToggleExpand}/>;
    case 'estValue':return <EstValueRow props={props}/>;
    case 'text':    return <TextRow props={props} metric={metric}/>;
    case 'donut':   return <OwnerDonutRow props={props}/>;
    case 'crime':   return <CrimeRow props={props}/>;
    case 'progress':return <ProgressRow props={props} metric={metric}/>;
    case 'bool':    return <BoolRow props={props} metric={metric}/>;
    default: return null;
  }
};

Object.assign(window, { MetricRow });
