// Main App — Property Analysis Results
const TWEAKS_DEFAULTS = window.__TWEAKS__;

function useEditMode(defaults, onPersist) {
  const [values, setValues] = useState(defaults);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type: '__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const set = (key, val) => {
    setValues(v => ({...v, [key]: val}));
    window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[key]: val}}, '*');
  };
  return { values, set, open };
}

function App() {
  const { values: tweaks, set: setTweak, open: tweaksOpen } = useEditMode(TWEAKS_DEFAULTS);
  const [tab, setTab] = useState(tweaks.activeTab || 'comparison');
  const [propertyCount, setPropertyCount] = useState(Math.min(5, Math.max(2, tweaks.propertyCount || 2)));
  const [expanded, setExpanded] = useState({});

  useEffect(() => { setTab(tweaks.activeTab || 'comparison'); }, [tweaks.activeTab]);
  useEffect(() => { setPropertyCount(Math.min(5, Math.max(2, tweaks.propertyCount || 2))); }, [tweaks.propertyCount]);

  const visible = PROPERTIES.slice(0, propertyCount);

  const toggleExpand = (id) => setExpanded(e => ({...e, [id]: !e[id]}));

  const addProperty = () => {
    if (propertyCount < 5) {
      const n = propertyCount + 1;
      setPropertyCount(n);
      setTweak('propertyCount', n);
    }
  };
  const removeProperty = () => {
    if (propertyCount > 2) {
      const n = propertyCount - 1;
      setPropertyCount(n);
      setTweak('propertyCount', n);
    }
  };

  return (
    <div style={{minHeight:'100vh', background: T.bg, paddingBottom: 120}}>
      {/* Top bar */}
      <div style={{
        position:'sticky', top:0, zIndex:20,
        background:'rgba(250,250,249,.85)', backdropFilter:'blur(12px)',
        borderBottom:`1px solid ${T.line}`,
      }}>
        <div style={{
          maxWidth: 1280, margin:'0 auto', padding:'18px 32px',
          display:'flex', alignItems:'center', justifyContent:'space-between', gap:16,
        }}>
          <div style={{display:'flex', alignItems:'center', gap:16}}>
            <button aria-label="Back" style={{
              width:38, height:38, borderRadius:10, border:`1px solid ${T.line}`,
              background:'white', display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', color: T.text,
            }}><ArrowLeft size={18}/></button>
            <h1 style={{
              fontFamily: T.fontCooper, fontSize: 36, fontWeight:400,
              letterSpacing:'-.01em', color: T.text, margin:0, lineHeight:1.1,
            }}>Property Analysis Results</h1>
          </div>
          <Button variant="secondary" size="md" iconL={<FileText size={14}/>}>Export report</Button>
        </div>
      </div>

      <div style={{maxWidth: 1280, margin:'0 auto', padding:'28px 32px 0'}}>
        {/* Filter chips */}
        <div style={{display:'flex', gap:10, flexWrap:'wrap', marginBottom: 24}}>
          <FilterChip icon={<Target size={14}/>}>Principal Place of Residence (PPOR)</FilterChip>
          <FilterChip icon={<DollarSign size={14}/>}>$500K – $750K</FilterChip>
          <FilterChip icon={<ClipboardCheck size={14}/>}>No must-haves specified</FilterChip>
        </div>

        {/* Tabs */}
        <div style={{marginBottom: 28}}>
          <Tabs
            value={tab}
            onChange={(t)=>{setTab(t); setTweak('activeTab', t);}}
            tabs={[
              {id:'overview', label:'Overview'},
              {id:'comparison', label:'Comparison'},
              {id:'ask', label:'Ask AI'},
            ]}
          />
        </div>

        {tab === 'comparison' && (
          <>
            {/* Executive Summary */}
            {tweaks.showExecutiveSummary && (
              <div style={{
                background: T.indigo50, border:`1px solid ${T.indigo100}`,
                borderRadius: 0, padding:'24px 28px', marginBottom: 40,
              }}>
                <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:10}}>
                  <h2 style={{
                    fontFamily:T.fontCooper, fontSize:24, fontWeight:400,
                    color:T.text, margin:0, lineHeight:1.2,
                  }}>Executive Summary</h2>
                  <Pill variant="indigo" icon={<Sparkles size={10}/>}>AI Analysis</Pill>
                </div>
                <p style={{
                  fontFamily:T.fontSans, fontSize:14, lineHeight:1.65,
                  color:T.text, margin:0, maxWidth: 980,
                }}>
                  Of the {['one','two','three','four','five'][propertyCount-1]} properties evaluated for a Principal Place of Residence (PPOR) with a budget of $750,000, only <b>23 Loch Street</b> is financially viable. This property, a house in Campsie, is within the budget, offering a substantial land size, though it is situated in a suburb experiencing negative price growth and a significant population decline. In contrast, 35 Loch Street, a unit, significantly exceeds the allocated budget, rendering it unsuitable for this PPOR requirement, despite its suburb showing positive price growth. Both properties are located in a suburb with similar community, safety, and amenity characteristics, including a shared public school catchment.
                </p>
              </div>
            )}

            {/* Comparison table */}
            <div style={{
              background:'white', border:`1px solid ${T.line}`,
              borderRadius: 0, overflow:'visible',
            }}>
              {METRICS.map((m, idx) => {
                const isDetails = m.id === 'details';
                const row = (
                  <MetricRow
                    key={m.id}
                    metric={m}
                    props={visible}
                    expanded={expanded}
                    onToggleExpand={toggleExpand}
                  />
                );
                if (isDetails) {
                  return (
                    <div key={m.id} style={{
                      position:'sticky', top: 74, zIndex: 10,
                      background:'white',
                      boxShadow:'0 1px 0 0 ' + T.line + ', 0 6px 12px -8px rgba(0,0,0,.08)',
                    }}>
                      {row}
                    </div>
                  );
                }
                return row;
              })}
            </div>

            {/* Footer actions */}
            <div style={{display:'flex', justifyContent:'flex-end', gap:12, marginTop: 32}}>
              <Button variant="secondary" size="lg">Start new comparison</Button>
              <Button variant="primary" size="lg" iconL={<Download size={14}/>}>Export report</Button>
            </div>
          </>
        )}

        {tab === 'overview' && <OverviewTab properties={visible}/>}
        {tab === 'ask' && <AskTab properties={visible}/>}
      </div>

      {/* Tweaks panel */}
      {tweaksOpen && (
        <div style={{
          position:'fixed', bottom:24, right:24, zIndex:100, width: 300,
          background:'white', border:`1px solid ${T.line}`, borderRadius: 14,
          boxShadow:'0 25px 50px -12px rgba(0,0,0,.25)', overflow:'hidden',
        }}>
          <div style={{
            padding:'14px 18px', borderBottom:`1px solid ${T.line}`,
            fontFamily:T.fontMono, fontSize:12, fontWeight:600,
            textTransform:'uppercase', letterSpacing:'.04em', color: T.text,
          }}>Tweaks</div>
          <div style={{padding:18, display:'flex', flexDirection:'column', gap:16}}>
            <div>
              <div style={{
                fontFamily:T.fontMono, fontSize:10, fontWeight:600, color:T.sec,
                textTransform:'uppercase', letterSpacing:'.04em', marginBottom:8,
              }}>Properties shown</div>
              <div style={{display:'flex', gap:6}}>
                {[2,3,4,5].map(n => (
                  <button key={n} onClick={()=>{setPropertyCount(n); setTweak('propertyCount', n);}} style={{
                    flex:1, padding:'8px 0', borderRadius:8,
                    border:`1px solid ${propertyCount===n ? T.indigo : T.line}`,
                    background: propertyCount===n ? T.indigo : 'white',
                    color: propertyCount===n ? 'white' : T.text,
                    fontFamily:T.fontData, fontSize:13, fontWeight:600, cursor:'pointer',
                  }}>{n}</button>
                ))}
              </div>
            </div>
            <div>
              <div style={{
                fontFamily:T.fontMono, fontSize:10, fontWeight:600, color:T.sec,
                textTransform:'uppercase', letterSpacing:'.04em', marginBottom:8,
              }}>Active tab</div>
              <div style={{display:'flex', gap:6}}>
                {[{id:'overview',label:'Overview'},{id:'comparison',label:'Compare'},{id:'ask',label:'Ask AI'}].map(t => (
                  <button key={t.id} onClick={()=>{setTab(t.id); setTweak('activeTab', t.id);}} style={{
                    flex:1, padding:'8px 0', borderRadius:8,
                    border:`1px solid ${tab===t.id ? T.indigo : T.line}`,
                    background: tab===t.id ? T.indigo : 'white',
                    color: tab===t.id ? 'white' : T.text,
                    fontFamily:T.fontSans, fontSize:12, fontWeight:600, cursor:'pointer',
                  }}>{t.label}</button>
                ))}
              </div>
            </div>
            <label style={{
              display:'flex', alignItems:'center', justifyContent:'space-between',
              fontFamily:T.fontSans, fontSize:13, color:T.text, cursor:'pointer',
            }}>
              <span>Executive Summary</span>
              <input type="checkbox" checked={!!tweaks.showExecutiveSummary}
                onChange={e => setTweak('showExecutiveSummary', e.target.checked)}
                style={{width:18, height:18, accentColor: T.indigo}}/>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

const EmptyTab = ({ title, desc }) => (
  <div style={{
    border:`1px dashed ${T.line}`, borderRadius:14, padding:'64px 32px',
    textAlign:'center', background:'white',
  }}>
    <h3 style={{
      fontFamily:T.fontCooper, fontSize:28, fontWeight:400, color:T.text, margin:'0 0 8px',
    }}>{title}</h3>
    <p style={{
      fontFamily:T.fontSans, fontSize:14, color:T.sec, margin:0, maxWidth:440,
      marginLeft:'auto', marginRight:'auto', lineHeight:1.6,
    }}>{desc}</p>
    <div style={{marginTop:20}}>
      <Pill variant="default">Preview — switch to Comparison tab</Pill>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
