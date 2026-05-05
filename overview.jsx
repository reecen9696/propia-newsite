// Overview tab — hero #1 pick + property cards

// Stat icons row (House • land • property • beds • baths • cars)
const StatBit = ({ icon, children }) => (
  <span style={{
    display:'inline-flex', alignItems:'center', gap:6,
    fontFamily:T.fontSans, fontSize:12, color:T.sec,
  }}>
    <span style={{display:'flex', color:T.muted}}>{icon}</span>
    <span>{children}</span>
  </span>
);

const PropertyStatRow = ({ p }) => (
  <div style={{
    display:'flex', flexWrap:'wrap', gap:'8px 16px', alignItems:'center',
    marginTop:6,
  }}>
    <StatBit icon={<Home size={13}/>}>{p.type}</StatBit>
    <StatBit icon={<Maximize size={13}/>}>{p.landSize}</StatBit>
    <StatBit icon={<Layers size={13}/>}>{p.propertySize}</StatBit>
    <StatBit icon={<Home size={13}/>}>{p.beds} bed</StatBit>
    <StatBit icon={<Home size={13}/>}>{p.baths} bath</StatBit>
    <StatBit icon={<Home size={13}/>}>{p.cars} car</StatBit>
  </div>
);

// ── Score helpers (brand green/red for sentiment) ──────────────────
// thresholds tuned to make "good vs bad" obvious
const sentimentColor = (key, v) => {
  switch (key) {
    case 'gentrification':   return v >= 45 ? T.green : T.red;          // higher is better
    case 'infrastructure':   return v >= 80 ? T.green : T.red;          // higher is better
    case 'priceGrowth':      return v >= 0 ? T.green : T.red;
    case 'ownerOccupier':    return v >= 60 ? T.green : T.red;          // higher is better
    case 'vacancyRate':      return v <= 10 ? T.green : T.red;          // lower is better
    case 'publicHousing':    return v <= 3 ? T.green : T.red;           // lower is better
    case 'populationGrowth': return v >= 5 ? T.green : T.red;
    default: return T.text;
  }
};

// Metric cell — label wraps, value coloured by sentiment
const MetricCell = ({ label, value, valueColor }) => (
  <div style={{
    display:'flex', flexDirection:'column', gap:4, padding:'10px 12px',
    background: T.stone50, border:`1px solid ${T.line}`,
    minWidth: 0,
  }}>
    <div style={{
      fontFamily:T.fontSans, fontSize:11, color:T.sec, fontWeight:500,
      lineHeight: 1.2, minHeight: 26,
      display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical',
      overflow:'hidden',
    }}>
      {label}
    </div>
    <div style={{
      fontFamily:T.fontData, fontSize:14, fontWeight:700,
      color: valueColor || T.text, fontVariantNumeric:'tabular-nums',
      whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
    }}>
      {value}
    </div>
  </div>
);

// Risk pill — uses brand green/red badge tokens
const RiskPill = ({ icon, ok }) => (
  <span style={{
    display:'inline-flex', alignItems:'center', justifyContent:'center',
    width:28, height:28,
    background: ok ? '#ABE435' : '#F16E81',
    border: `2px solid ${ok ? '#6FA417' : T.red}`,
    color: ok ? T.text : '#FFFFFF',
  }}>
    {icon}
  </span>
);

const RiskRow = ({ risks }) => (
  <div style={{display:'flex', gap:6, alignItems:'center'}}>
    <RiskPill ok={!risks.flood} icon={<Droplets size={13}/>}/>
    <RiskPill ok={!risks.bushfire} icon={<Flame size={13}/>}/>
    <RiskPill ok={!risks.heritage} icon={<Landmark size={13}/>}/>
    <RiskPill ok={!risks.mainRoad} icon={<Navigation size={13}/>}/>
    <RiskPill ok={!risks.powerline} icon={<Zap size={13}/>}/>
  </div>
);

// Decorative property image placeholder (warm hatch)
const HouseImg = ({ height = '100%' }) => (
  <div style={{
    position:'relative', width:'100%', height,
    background:`repeating-linear-gradient(135deg, #E7E5E4 0 1px, #EDEBEA 1px 14px)`,
    border:`1px solid ${T.line}`,
    display:'flex', alignItems:'center', justifyContent:'center',
    color:T.muted, overflow:'hidden',
  }}>
    <ImageIcon size={32}/>
  </div>
);

// Score chip — dark indigo block (consistent with brand)
const ScoreChip = ({ value, size='md' }) => {
  const big = size === 'lg';
  return (
    <div style={{
      background: T.indigo, color:'white',
      border:`1px solid ${T.indigoD}`,
      padding: big ? '12px 18px' : '8px 14px',
      textAlign:'center', minWidth: big ? 128 : 100,
      display:'inline-flex', flexDirection:'column', alignItems:'center', gap:2,
    }}>
      <div style={{
        fontFamily:T.fontMono, fontSize: big ? 10 : 9, fontWeight:600,
        textTransform:'uppercase', letterSpacing:'.06em',
        color:'rgba(255,255,255,.85)',
      }}>Overall Score</div>
      <div style={{
        fontFamily:T.fontData, fontSize: big ? 36 : 26, fontWeight:700,
        color:'white', lineHeight:1, fontVariantNumeric:'tabular-nums',
      }}>{value.toFixed(2)}</div>
    </div>
  );
};

// #1 Pick badge — brand indigo, not yellow
const PickBadge = ({ size='sm', label='#1 Pick' }) => {
  const big = size === 'lg';
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap: big ? 8 : 6,
      background: T.indigo, border:`2px solid ${T.indigoD}`,
      padding: big ? '6px 12px' : '4px 9px',
      fontFamily:T.fontMono, fontSize: big ? 11 : 10, fontWeight:700,
      textTransform:'uppercase', letterSpacing:'.06em', color:'white',
    }}>
      <Trophy size={big ? 14 : 11}/>
      <span>{label}</span>
    </span>
  );
};

// Hero (#1 Pick) card
const HeroPickCard = ({ p }) => (
  <div style={{
    background: T.indigo50, border:`1px solid ${T.indigo100}`,
    padding: 24, marginBottom: 24,
    display:'grid', gridTemplateColumns: '1fr 380px', gap: 28, alignItems:'stretch',
  }}>
    <div style={{display:'flex', flexDirection:'column'}}>
      <h2 style={{
        fontFamily:T.fontCooper, fontSize:28, fontWeight:400,
        color:T.text, margin:0, lineHeight:1.15,
      }}>{p.address}</h2>
      <PropertyStatRow p={p}/>

      <p style={{
        fontFamily:T.fontSans, fontSize:13, lineHeight:1.65,
        color:T.text, margin:'14px 0 8px',
      }}>{p.summary}</p>
      <p style={{
        fontFamily:T.fontSans, fontSize:13, lineHeight:1.65,
        color:T.text, margin:'0 0 18px',
      }}>{p.summaryB}</p>

      <div style={{display:'flex', alignItems:'center', gap:14, marginTop:'auto'}}>
        <Button variant="primary" size="md" iconL={<Sparkles size={14}/>}>
          Ask AI for More Details
        </Button>
      </div>
    </div>

    {/* Image with price chip */}
    <div style={{position:'relative', minHeight: 320}}>
      <HouseImg/>
      <div style={{
        position:'absolute', top:14, right:14,
        background:'white', border:`1px solid ${T.line}`,
        padding:'8px 14px',
        fontFamily:T.fontData, fontSize:15, fontWeight:700, color:T.text,
      }}>{p.priceLabel}</div>
    </div>
  </div>
);

// Property summary card (overview list row) — bigger image, no Map/Sort/Filter
const OverviewPropCard = ({ p }) => (
  <div style={{
    background:'white', border:`1px solid ${T.line}`,
    padding: 16, marginBottom: 14,
    display:'grid', gridTemplateColumns: '260px 1fr', gap: 20, alignItems:'stretch',
  }}>
    {/* Larger image with price + dot indicator */}
    <div style={{position:'relative', minHeight: 200}}>
      <HouseImg/>
      <div style={{
        position:'absolute', top:10, left:10,
        background:'white', border:`1px solid ${T.line}`,
        padding:'5px 11px',
        fontFamily:T.fontData, fontSize:13, fontWeight:700, color:T.text,
      }}>{p.priceLabel}</div>
      <div style={{
        position:'absolute', bottom:10, left:'50%', transform:'translateX(-50%)',
        display:'flex', gap:5,
      }}>
        <span style={{width:6, height:6, borderRadius:999, background:T.indigo}}/>
        <span style={{width:6, height:6, borderRadius:999, background:'rgba(255,255,255,.9)', border:`1px solid ${T.line}`}}/>
        <span style={{width:6, height:6, borderRadius:999, background:'rgba(255,255,255,.9)', border:`1px solid ${T.line}`}}/>
      </div>
    </div>

    {/* Content */}
    <div style={{display:'flex', flexDirection:'column', minWidth:0}}>
      {/* Top row: address + winner + score */}
      <div style={{
        display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:16,
      }}>
        <div style={{flex:1, minWidth:0}}>
          <div style={{display:'flex', alignItems:'center', gap:10, flexWrap:'wrap', marginBottom:2}}>
            <h3 style={{
              fontFamily:T.fontSans, fontSize:18, fontWeight:700,
              color:T.text, margin:0,
            }}>{p.address}</h3>
          </div>
          <PropertyStatRow p={p}/>
        </div>
        <ScoreChip value={p.overallScore}/>
      </div>

      {/* Metric grid: 7 cells */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(7, minmax(0, 1fr))',
        gap:6, marginTop:14,
      }}>
        <MetricCell label="Gentrification"
          value={`${p.gentrification.toFixed(1)}%`}
          valueColor={sentimentColor('gentrification', p.gentrification)}/>
        <MetricCell label="Infrastructure"
          value={`${p.infrastructure}/100`}
          valueColor={sentimentColor('infrastructure', p.infrastructure)}/>
        <MetricCell label="Price Growth"
          value={p.priceGrowthLabel}
          valueColor={sentimentColor('priceGrowth', p.priceGrowth)}/>
        <MetricCell label="Owner Occupier"
          value={`${p.ownerOccupier.toFixed(0)}%`}
          valueColor={sentimentColor('ownerOccupier', p.ownerOccupier)}/>
        <MetricCell label="Vacancy Rate"
          value={`${p.vacancyRate.toFixed(1)}%`}
          valueColor={sentimentColor('vacancyRate', p.vacancyRate)}/>
        <MetricCell label="Public Housing"
          value={`${p.publicHousing.toFixed(1)}%`}
          valueColor={sentimentColor('publicHousing', p.publicHousing)}/>
        <MetricCell label="Population Growth"
          value={`${p.populationGrowth >= 0 ? '+' : ''}${p.populationGrowth.toFixed(2)}%`}
          valueColor={sentimentColor('populationGrowth', p.populationGrowth)}/>
      </div>

      {/* Risk Factors band */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        gap:12, padding:'10px 12px', marginTop:6,
        background: T.stone50, border:`1px solid ${T.line}`,
      }}>
        <div style={{
          fontFamily:T.fontSans, fontSize:11, color:T.sec, fontWeight:600,
          textTransform:'uppercase', letterSpacing:'.04em',
        }}>Risk Factors</div>
        <RiskRow risks={p.risks}/>
      </div>
    </div>
  </div>
);

// Main Overview tab
const OverviewTab = ({ properties }) => {
  const winner = properties.find(p => p.winner) || properties[0];

  return (
    <div>
      <HeroPickCard p={winner}/>

      {/* Section header */}
      <div style={{
        display:'flex', alignItems:'baseline', justifyContent:'space-between',
        marginBottom: 12,
      }}>
        <h3 style={{
          fontFamily:T.fontSans, fontSize:16, fontWeight:600,
          color:T.text, margin:0,
        }}>All properties</h3>
        <span style={{
          fontFamily:T.fontMono, fontSize:11, color:T.sec,
          textTransform:'uppercase', letterSpacing:'.04em',
        }}>{properties.length} compared</span>
      </div>

      <div>
        {properties.map(p => <OverviewPropCard key={p.id} p={p}/>)}
      </div>

    </div>
  );
};

Object.assign(window, { OverviewTab });
