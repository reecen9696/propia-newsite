// ---------- Propia Primitives ----------
const { useState, useEffect, useRef, useMemo } = React;

const T = {
  bg: '#FAFAF9', surface: '#FFFFFF', line: '#E7E5E4', line2: '#D6D3D1',
  text: '#1C1917', sec: '#78716C', muted: '#A8A29E',
  indigo: '#625FFF', indigoD: '#4C3AED', indigo50: '#EEF2FF', indigo100: '#E0E7FF',
  orange: '#D97757', orange50: '#FFF7ED', orange200: '#FED7AA',
  green: '#22863A', greenD: '#15803D', greenBg: '#DCFCE7', greenL: '#86EFAC',
  blue: '#2563EB', blueL: '#60A5FA',
  red: '#D91A45', redBg: '#FEE2E2',
  stone100: '#F5F5F4', stone50: '#FAFAF9',
  fontSans: '"Geist", ui-sans-serif, system-ui, sans-serif',
  fontMono: '"Geist Mono", ui-monospace, monospace',
  fontCooper: '"cooperLtBT", Georgia, serif',
  fontData: '"Datatype", ui-monospace, monospace',
};

// ----- Button -----
const Button = ({ variant='primary', size='md', children, iconL, iconR, fullWidth, ...rest }) => {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const base = {
    display:'inline-flex', alignItems:'center', justifyContent:'center', gap:8,
    fontFamily: T.fontMono, fontWeight:600, textTransform:'uppercase', letterSpacing:'.02em',
    border:'1px solid transparent', cursor:'pointer', transition:'all 75ms ease-in',
    width: fullWidth ? '100%' : 'auto', whiteSpace:'nowrap',
    transform: pressed ? 'scale(.97)' : 'scale(1)',
  };
  const sizes = {
    sm: { fontSize:12, height:32, padding:'0 14px', borderRadius:8 },
    md: { fontSize:12, height:38, padding:'0 16px', borderRadius:10 },
    lg: { fontSize:13, height:44, padding:'0 22px', borderRadius:12 },
  };
  const variants = {
    primary: {
      background: hover ? T.indigoD : T.indigo, color:'#FAFAF9',
      border:`2px solid ${T.indigoD}`,
    },
    secondary: {
      background:'white', color: T.indigo,
      border:`1.5px solid ${T.indigo}`,
      ...(hover ? {background:T.indigo50} : {}),
    },
    ghost: {
      background: hover ? T.stone100 : 'transparent', color: T.text,
      border: `1px solid ${T.line}`,
    },
    icon: {
      background: hover ? T.stone100 : 'white',
      color: T.text, border:`1px solid ${T.line}`,
      width:38, padding:0, borderRadius:10,
    },
  };
  return (
    <button {...rest}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setPressed(false);}}
      onMouseDown={()=>setPressed(true)} onMouseUp={()=>setPressed(false)}
      style={{...base, ...sizes[size], ...variants[variant], ...(rest.style||{})}}>
      {iconL}{children}{iconR}
    </button>
  );
};

// Filter chip (rounded pill with icon + label)
const FilterChip = ({ icon, children, onRemove }) => (
  <span style={{
    display:'inline-flex', alignItems:'center', gap:8,
    padding:'7px 12px 7px 10px', borderRadius:999,
    background:'white', border:`1px solid ${T.line}`,
    fontFamily:T.fontSans, fontSize:13, color:T.text, fontWeight:500,
  }}>
    <span style={{color:T.sec, display:'flex'}}>{icon}</span>
    <span>{children}</span>
    {onRemove && (
      <button onClick={onRemove} aria-label="Remove" style={{
        background:'none', border:'none', padding:0, marginLeft:2, cursor:'pointer',
        color: T.muted, display:'flex',
      }}><X size={12}/></button>
    )}
  </span>
);

// Tabs
const Tabs = ({ tabs, value, onChange }) => (
  <div style={{
    display:'grid', gridTemplateColumns:`repeat(${tabs.length}, 1fr)`,
    background: T.stone100, border:`1px solid ${T.line}`,
    borderRadius: 14, padding: 4, gap: 4,
  }}>
    {tabs.map(t => {
      const active = t.id === value;
      return (
        <button key={t.id} onClick={()=>onChange(t.id)}
          style={{
            padding: '11px 16px', borderRadius: 10, border:'none', cursor:'pointer',
            background: active ? T.indigo : 'transparent',
            color: active ? 'white' : T.text,
            fontFamily: T.fontSans, fontSize: 14, fontWeight: active ? 600 : 500,
            transition:'all 150ms ease',
            boxShadow: active ? '0 1px 2px rgba(76,58,237,.3)' : 'none',
          }}>
          {t.label}
        </button>
      );
    })}
  </div>
);

// Info tooltip (i) chip
const InfoDot = ({ title }) => (
  <span title={title} style={{
    display:'inline-flex', alignItems:'center', justifyContent:'center',
    width:14, height:14, borderRadius:999, background: T.stone100,
    color: T.muted, cursor:'help', marginLeft:6,
  }}><Info size={10}/></span>
);

// Pill badge (used for types, "AI Analysis")
const Pill = ({ variant='default', icon, children }) => {
  const styles = {
    default: { background:'white', color: T.sec, border:`1px solid ${T.line}` },
    indigo:  { background: T.indigo50, color: T.indigoD, border:`1px solid ${T.indigo100}` },
    dark:    { background: T.text, color: 'white', border:'none' },
    trophy:  { background:'#FEF3C7', color:'#B45309', border:'1px solid #FDE68A' },
    green:   { background: T.greenBg, color: T.greenD, border:'1px solid #BBF7D0' },
    orange:  { background: T.orange50, color: T.orange, border:`1px solid ${T.orange200}` },
  };
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:6,
      padding:'4px 9px', borderRadius: 999,
      fontFamily: T.fontMono, fontSize:10, fontWeight:600,
      textTransform:'uppercase', letterSpacing:'.04em',
      ...styles[variant],
    }}>
      {icon && <span style={{display:'flex'}}>{icon}</span>}
      {children}
    </span>
  );
};

// Solid brand badges — green (yes) uses badge-green tokens, red (no) uses badge-red tokens.
// 2px darker border is the Propia signature.
const CheckBadge = () => (
  <span style={{
    display:'inline-flex', alignItems:'center', justifyContent:'center',
    width:34, height:34, borderRadius:999,
    background: '#ABE435', border: `2px solid #6FA417`,
  }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C1917" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4 4L19 7"/>
    </svg>
  </span>
);
const CrossBadge = () => (
  <span style={{
    display:'inline-flex', alignItems:'center', justifyContent:'center',
    width:34, height:34, borderRadius:999,
    background: '#F16E81', border: `2px solid #D91A45`,
  }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7l10 10M17 7L7 17"/>
    </svg>
  </span>
);

// Progress bar (green fill)
const ProgressBar = ({ value=0, max=100, color='#6FA417' }) => (
  <div style={{display:'flex', alignItems:'center', gap:10, width:'100%'}}>
    <div style={{
      flex:1, height:8, background:T.stone100, overflow:'hidden',
      border:`1px solid ${T.line}`,
    }}>
      <div style={{
        height:'100%', width:`${Math.min(100, (value/max)*100)}%`,
        background: color, transition:'width 400ms ease',
      }}/>
    </div>
    <span style={{
      fontFamily:T.fontData, fontSize:13, fontWeight:600, color:T.text,
      fontVariantNumeric:'tabular-nums', minWidth:38, textAlign:'right',
    }}>{value}%</span>
  </div>
);

// Donut chart (4 segments)
const Donut = ({ segments=[], centerLabel, centerSub, size=140 }) => {
  const stroke = 18;
  const radius = (size - stroke) / 2;
  const C = 2 * Math.PI * radius;
  const total = segments.reduce((a,b)=>a+b.value, 0);
  let offset = 0;
  return (
    <div style={{position:'relative', width:size, height:size}}>
      <svg width={size} height={size} style={{transform:'rotate(-90deg)'}}>
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={T.stone100} strokeWidth={stroke}/>
        {segments.map((s, i) => {
          const len = (s.value / total) * C;
          const gap = 2;
          const dash = `${Math.max(0, len - gap)} ${C - len + gap}`;
          const dashOffset = -offset;
          offset += len;
          return (
            <circle key={i} cx={size/2} cy={size/2} r={radius}
              fill="none" stroke={s.color} strokeWidth={stroke}
              strokeDasharray={dash} strokeDashoffset={dashOffset} strokeLinecap="butt"/>
          );
        })}
      </svg>
      <div style={{
        position:'absolute', inset:0, display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center', textAlign:'center',
      }}>
        <div style={{
          fontFamily:T.fontData, fontSize:24, fontWeight:700,
          color: T.green, lineHeight:1, fontVariantNumeric:'tabular-nums',
        }}>{centerLabel}</div>
        {centerSub && <div style={{
          fontFamily:T.fontSans, fontSize:11, color:T.sec, marginTop:2,
        }}>{centerSub}</div>}
      </div>
    </div>
  );
};

// Legend row for donut
const LegendRow = ({ color, label, value }) => (
  <div style={{display:'flex', alignItems:'center', gap:8, fontSize:12, color:T.text, lineHeight:1.8}}>
    <span style={{width:8, height:8, borderRadius:2, background:color, flexShrink:0}}/>
    <span style={{color: T.sec}}>{label}:</span>
    <span style={{fontWeight:600, fontFamily:T.fontData}}>{value}</span>
  </div>
);

// Placeholder image card
const PlaceholderImage = ({ aspect='4/3' }) => (
  <div style={{
    aspectRatio: aspect, width:'100%', borderRadius:10,
    background:`repeating-linear-gradient(135deg, #E7E5E4 0 1px, #EDEBEA 1px 14px)`,
    border:`1px solid ${T.line}`,
    display:'flex', alignItems:'center', justifyContent:'center',
    color: T.muted, position:'relative', overflow:'hidden',
  }}>
    <div style={{
      position:'absolute', inset:0,
      background:'linear-gradient(180deg, rgba(245,245,244,.4), rgba(231,229,228,.7))',
    }}/>
    <div style={{position:'relative', display:'flex', flexDirection:'column', alignItems:'center', gap:6}}>
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'center',
        width:44, height:44, borderRadius:10, background:'white',
        border:`1px solid ${T.line}`, color:T.muted,
      }}>
        <ImageIcon size={22}/>
      </div>
    </div>
  </div>
);

Object.assign(window, {
  T, Button, FilterChip, Tabs, InfoDot, Pill,
  CheckBadge, CrossBadge, ProgressBar, Donut, LegendRow, PlaceholderImage,
});
