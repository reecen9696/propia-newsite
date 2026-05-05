
/* ===== icons.jsx ===== */
// Solid (filled) icon set — Phosphor "fill" / Heroicons "solid" style
// All icons render with fill="currentColor", no stroke.
const Ico = ({ d, size=16, style, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0, ...style}} {...rest}>
    {d}
  </svg>
);

// ── Navigation / chrome ──────────────────────────────────────────
const ArrowLeft = (p) => <Ico {...p} d={
  <path d="M11.7 4.3a1 1 0 0 1 0 1.4L7.4 10H20a1 1 0 1 1 0 2H7.4l4.3 4.3a1 1 0 1 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.4 0z"/>
}/>;
const Download = (p) => <Ico {...p} d={<React.Fragment>
  <path d="M12 3a1 1 0 0 1 1 1v9.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4L11 13.6V4a1 1 0 0 1 1-1z"/>
  <path d="M4 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1z"/>
</React.Fragment>}/>;
const Plus = (p) => <Ico {...p} d={
  <path d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"/>
}/>;
const X = (p) => <Ico {...p} d={
  <path d="M5.3 5.3a1 1 0 0 1 1.4 0L12 10.6l5.3-5.3a1 1 0 1 1 1.4 1.4L13.4 12l5.3 5.3a1 1 0 1 1-1.4 1.4L12 13.4l-5.3 5.3a1 1 0 1 1-1.4-1.4L10.6 12 5.3 6.7a1 1 0 0 1 0-1.4z"/>
}/>;

// ── Document / report ────────────────────────────────────────────
const FileText = (p) => <Ico {...p} d={
  <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V8h4.5L13 3.5zM8 13h8v1.5H8V13zm0 3.5h8V18H8v-1.5zm0-7h5V11H8V9.5z"/>
}/>;
const ClipboardCheck = (p) => <Ico {...p} d={
  <path d="M9 2h6a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a1 1 0 0 1 1-1zm1 2v2h4V4h-4zm5.7 7.3a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 1 1 1.4-1.4L11 14.6l3.3-3.3a1 1 0 0 1 1.4 0z"/>
}/>;

// ── Goals / data ─────────────────────────────────────────────────
const Target = (p) => <Ico {...p} d={
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
}/>;
const DollarSign = (p) => <Ico {...p} d={
  <path d="M12 2a1 1 0 0 1 1 1v1.1c2.3.4 4 2.1 4 4.4a1 1 0 1 1-2 0c0-1.4-1.3-2.5-3-2.5S9 7.1 9 8.5c0 1.1 1 2 3.5 2.5 3 .6 4.5 1.9 4.5 4.5 0 2.3-1.7 4-4 4.4V21a1 1 0 1 1-2 0v-1.1c-2.3-.4-4-2.1-4-4.4a1 1 0 1 1 2 0c0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5c0-1.1-1-2-3.5-2.5C8.5 12.9 7 11.6 7 9c0-2.3 1.7-4 4-4.4V3a1 1 0 0 1 1-1z"/>
}/>;
const Sparkles = (p) => <Ico {...p} d={<React.Fragment>
  <path d="M12 2.5a1 1 0 0 1 1 .8l1 4.6 4.6 1a1 1 0 0 1 0 2l-4.6 1-1 4.6a1 1 0 0 1-2 0l-1-4.6-4.6-1a1 1 0 0 1 0-2l4.6-1 1-4.6a1 1 0 0 1 1-.8z"/>
  <path d="M19 14a.7.7 0 0 1 .7.6l.5 2.2 2.2.5a.7.7 0 0 1 0 1.4l-2.2.5-.5 2.2a.7.7 0 0 1-1.4 0l-.5-2.2-2.2-.5a.7.7 0 0 1 0-1.4l2.2-.5.5-2.2A.7.7 0 0 1 19 14z"/>
</React.Fragment>}/>;
const Trophy = (p) => <Ico {...p} d={
  <path d="M7 3h10a1 1 0 0 1 1 1v1h2.5a1.5 1.5 0 0 1 1.5 1.5v2A4.5 4.5 0 0 1 17.5 13c-.5 2-2 3.5-4 4v2h2a1 1 0 1 1 0 2H8.5a1 1 0 1 1 0-2h2v-2c-2-.5-3.5-2-4-4A4.5 4.5 0 0 1 2 8.5v-2A1.5 1.5 0 0 1 3.5 5H6V4a1 1 0 0 1 1-1zM6 7H4v1.5A2.5 2.5 0 0 0 6.1 11c0-.5-.1-1-.1-1.5V7zm12 0v2.5c0 .5 0 1-.1 1.5A2.5 2.5 0 0 0 20 8.5V7h-2z"/>
}/>;

// ── Property / structure ─────────────────────────────────────────
const Home = (p) => <Ico {...p} d={
  <path d="M11.3 2.3a1 1 0 0 1 1.4 0l9 8a1 1 0 0 1 .3.7V20a2 2 0 0 1-2 2h-4v-7H8v7H4a2 2 0 0 1-2-2v-9a1 1 0 0 1 .3-.7l9-8z"/>
}/>;
const Building = (p) => <Ico {...p} d={
  <path d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-4v-5h-6v5H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm2 4v2h2V6H7zm4 0v2h2V6h-2zm4 0v2h2V6h-2zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 14v2h2v-2H7zm8 0v2h2v-2h-2z"/>
}/>;
const Layers = (p) => <Ico {...p} d={
  <path d="M11.6 2.1a1 1 0 0 1 .8 0l9 4a1 1 0 0 1 0 1.8l-9 4a1 1 0 0 1-.8 0l-9-4a1 1 0 0 1 0-1.8l9-4zM2.4 11.1a1 1 0 0 1 1.3-.5l8.3 3.7 8.3-3.7a1 1 0 0 1 .8 1.8l-8.7 3.9a1 1 0 0 1-.8 0l-8.7-3.9a1 1 0 0 1-.5-1.3zM2.4 16.1a1 1 0 0 1 1.3-.5l8.3 3.7 8.3-3.7a1 1 0 0 1 .8 1.8l-8.7 3.9a1 1 0 0 1-.8 0l-8.7-3.9a1 1 0 0 1-.5-1.3z"/>
}/>;
const Maximize = (p) => <Ico {...p} d={
  <path d="M3 3h6a1 1 0 1 1 0 2H5v4a1 1 0 1 1-2 0V3zm12 0h6v6a1 1 0 1 1-2 0V5h-4a1 1 0 1 1 0-2zM4 14a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2H3v-6a1 1 0 0 1 1-1zm16 0a1 1 0 0 1 1 1v6h-6a1 1 0 1 1 0-2h4v-4a1 1 0 0 1 1-1z"/>
}/>;
const ImageIcon = (p) => <Ico {...p} d={
  <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 19h14l-4.5-6-3 4-2-2.5L5 19z"/>
}/>;

// ── Map / location ───────────────────────────────────────────────
const MapIcon = (p) => <Ico {...p} d={
  <path d="M9 2L1 5v17l8-3 6 3 8-3V2l-8 3-6-3zm0 2.2v14.6l-6 2.2V6.4l6-2.2zm6 1l6-2.2v14.6l-6 2.2V5.2zm-6 0l4 1.4v13.2L9 18.4V5.2zm6 1.4v13.2l-4-1.4V5.2l4 1.4z"/>
}/>;
const MapPin = (p) => <Ico {...p} d={
  <path d="M12 2a8 8 0 0 0-8 8c0 5.5 7.2 12.6 7.5 12.9a.7.7 0 0 0 1 0C12.8 22.6 20 15.5 20 10a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
}/>;
const Compass = (p) => <Ico {...p} d={
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.5 5.7l-2.2 6.6a1 1 0 0 1-.6.6l-6.6 2.2a.5.5 0 0 1-.6-.6l2.2-6.6a1 1 0 0 1 .6-.6l6.6-2.2a.5.5 0 0 1 .6.6zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
}/>;
const Navigation = (p) => <Ico {...p} d={
  <path d="M3.4 10l16.8-7.9a1 1 0 0 1 1.3 1.3L13.6 20.2a1 1 0 0 1-1.9 0L9.7 14 3.4 11.9a1 1 0 0 1 0-1.9z"/>
}/>;

// ── Status / info ────────────────────────────────────────────────
const AlertCircle = (p) => <Ico {...p} d={
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm0 9.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
}/>;
const Info = (p) => <Ico {...p} d={
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM11 11h2v6.5h-2V11z"/>
}/>;

// ── Lifestyle / amenities ────────────────────────────────────────
const School = (p) => <Ico {...p} d={
  <path d="M12 2.2L1.5 7l3 1.4V13a1 1 0 0 0 .5.9C6.4 14.7 9 16 12 16s5.6-1.3 7-2.1a1 1 0 0 0 .5-.9V8.4l1.5-.7v6.3a1 1 0 1 0 2 0V7l-11-4.8zm0 3l7.5 3.4L12 12 4.5 8.6 12 5.2zM6.5 14.4V19a1 1 0 0 0 .5.9c1.4.7 3.4 1.6 5 1.6s3.6-.9 5-1.6a1 1 0 0 0 .5-.9v-4.6c-1.4.7-3.5 1.6-5.5 1.6s-4.1-.9-5.5-1.6z"/>
}/>;
const Car = (p) => <Ico {...p} d={
  <path d="M5 5h14a2 2 0 0 1 1.9 1.4L23 12.5V19a1 1 0 0 1-1 1h-1a2 2 0 0 1-2-2v-1H5v1a2 2 0 0 1-2 2H2a1 1 0 0 1-1-1v-6.5L3.1 6.4A2 2 0 0 1 5 5zm0 2L3.4 12h17.2L19 7H5zM5.5 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
}/>;
const Store = (p) => <Ico {...p} d={
  <path d="M3 4h18l1 5a3 3 0 0 1-2 2.8V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.2A3 3 0 0 1 2 9l1-5zm3 8a3 3 0 0 1-1-.2V19h4v-5h6v5h4v-7.2a3 3 0 0 1-4-.8 3 3 0 0 1-5 0 3 3 0 0 1-4 1z"/>
}/>;
const Zap = (p) => <Ico {...p} d={
  <path d="M13 1a1 1 0 0 1 1 1.2L12.7 9H19a1 1 0 0 1 .8 1.6l-9 12a1 1 0 0 1-1.8-.8L10.3 15H4a1 1 0 0 1-.8-1.6l9-12A1 1 0 0 1 13 1z"/>
}/>;
const Landmark = (p) => <Ico {...p} d={
  <path d="M12 2.2L2.5 7v2H21V7L12 2.2zM4 11v6H3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2h-1v-6h-2v6h-3v-6h-2v6h-2v-6H9v6H6v-6H4z"/>
}/>;
const Droplets = (p) => <Ico {...p} d={
  <path d="M12 2c-1 0-2 .5-2.5 1.4-2 3-5.5 8.7-5.5 12.1A8 8 0 0 0 12 23a8 8 0 0 0 8-7.5c0-3.4-3.5-9.1-5.5-12.1A3 3 0 0 0 12 2z"/>
}/>;
const Flame = (p) => <Ico {...p} d={
  <path d="M12.5 2c-.4 0-.7.2-.9.5-1.5 2-2.6 4-2.6 6 0 1.7-.6 2.6-1.7 4C5.5 14.5 4 16.4 4 19a8 8 0 0 0 16 0c0-3.5-2-6-4-8.4-1.5-1.8-2.5-3.5-2.5-6.6 0-.6-.4-1-1-1z"/>
}/>;
const User = (p) => <Ico {...p} d={
  <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 20a8 8 0 1 1 16 0 1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/>
}/>;
const Shield = (p) => <Ico {...p} d={
  <path d="M12 2L4 5v6c0 5 3.4 9.5 8 11 4.6-1.5 8-6 8-11V5l-8-3z"/>
}/>;

Object.assign(window, {
  Ico, ArrowLeft, Download, FileText, Target, DollarSign, ClipboardCheck,
  Home, Building, ImageIcon, AlertCircle, Info, Sparkles, Layers, MapIcon, Compass,
  School, Car, Store, Zap, Landmark, Droplets, Flame, Navigation, User, Shield,
  Maximize, MapPin, Plus, X, Trophy,
});


/* ===== primitives.jsx ===== */
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


/* ===== data.jsx ===== */
// Property data + metric definitions
const PROPERTIES = [
  {
    id: 'p1',
    address: '27 Nioka Street, Chadstone VIC',
    type: 'House',
    typeIcon: 'Home',
    winner: true,
    price: 1875000, priceLabel: '$1,875,000',
    overallScore: 90.11,
    landSize: '620 m²', propertySize: '203 m²',
    beds: 5, baths: 3, cars: 4,
    growth: 3.76, growthSign: 'pos',
    summary: 'After analyzing all properties against your Principal Place of Residence investment goal, this property emerged as the top recommendation. It offers the best combination of location quality, property features, and value alignment with your specific requirements.',
    summaryB: 'This property scored highest across key metrics including neighborhood safety, school quality, commute accessibility, and overall liveability factors that matter most for your investment strategy.',
    estValue: 1875000, estValueLabel: '$1.88M',
    unitSize: '—',
    ownedOutright: 24.1, ownedMortgage: 23.8, rented: 50.4, other: 1.6,
    ownerOccupier: 61.0,
    crimeScore: 12, violentCrimes: 8.2, propertyCrimes: 14.3,
    schoolScore: 88, commuteScore: 82, servicesScore: 82,
    orientation: 'NE',
    powerline: true, heritage: true, flood: true, bushfire: true, mainRoad: true,
    // Overview-card metrics
    gentrification: 45.2,
    infrastructure: 85,
    priceGrowth: 62.5, priceGrowthLabel: '62.5%', priceGrowthDir: 'pos',
    vacancyRate: 9.3,
    publicHousing: 2.7,
    populationGrowth: 20.28,
    risks: { flood: true, bushfire: true, mainRoad: false, powerline: true, heritage: true },
  },
  {
    id: 'p2',
    address: '50 Munro Avenue Ashburton, VIC 3147',
    type: 'House',
    typeIcon: 'Home',
    winner: false,
    price: 1200000, priceLabel: '$1,200,000',
    overallScore: 96.86,
    landSize: '620 m²', propertySize: '203 m²',
    beds: 5, baths: 3, cars: 2,
    growth: 1.88, growthSign: 'pos',
    summary: 'Strong-fundamentals property with excellent owner occupier ratio and steady growth.',
    estValue: 1200000, estValueLabel: '$1.2M',
    unitSize: '—',
    ownedOutright: 30, ownedMortgage: 35, rented: 33, other: 2,
    ownerOccupier: 73.7,
    crimeScore: 12, violentCrimes: 8.2, propertyCrimes: 14.3,
    schoolScore: 90, commuteScore: 75, servicesScore: 80,
    orientation: 'N',
    powerline: false, heritage: true, flood: false, bushfire: true, mainRoad: false,
    gentrification: 48.0,
    infrastructure: 92,
    priceGrowth: -4.4, priceGrowthLabel: '-4.4%', priceGrowthDir: 'neg',
    vacancyRate: 8.0,
    publicHousing: 3.4,
    populationGrowth: 12.81,
    risks: { flood: true, bushfire: true, mainRoad: false, powerline: true, heritage: true },
  },
  {
    id: 'p3',
    address: '48 Haig Street Burwood, VIC 3125',
    type: 'House',
    typeIcon: 'Home',
    winner: false,
    price: 2300000, priceLabel: '$2,300,000',
    overallScore: 96.71,
    landSize: '620 m²', propertySize: '203 m²',
    beds: 5, baths: 4, cars: 3,
    growth: 2.42, growthSign: 'pos',
    summary: 'Premium positioning in Burwood with above-average lot size and favourable infrastructure score.',
    estValue: 2300000, estValueLabel: '$2.3M',
    unitSize: '—',
    ownedOutright: 28, ownedMortgage: 27, rented: 43, other: 2,
    ownerOccupier: 55.7,
    crimeScore: 18, violentCrimes: 9.1, propertyCrimes: 16.8,
    schoolScore: 86, commuteScore: 72, servicesScore: 88,
    orientation: 'N',
    powerline: true, heritage: true, flood: true, bushfire: true, mainRoad: false,
    gentrification: 45.2,
    infrastructure: 89,
    priceGrowth: 14.8, priceGrowthLabel: '14.8%', priceGrowthDir: 'pos',
    vacancyRate: 15.3,
    publicHousing: 3.2,
    populationGrowth: 5.31,
    risks: { flood: true, bushfire: true, mainRoad: false, powerline: true, heritage: true },
  },
  {
    id: 'p4',
    address: '9 Ninth Avenue, Campsie 2194, NSW',
    type: 'House',
    typeIcon: 'Home',
    winner: false,
    price: 730000, priceLabel: '$730,000',
    overallScore: 78.42,
    landSize: '410 m²', propertySize: '118 m²',
    beds: 3, baths: 2, cars: 1,
    growth: -0.42, growthSign: 'neg',
    summary: 'A smaller house priced just under budget. Subdued growth and a smaller 410m² lot pull down its overall score despite sitting in a safer catchment area.',
    estValue: 730000, estValueLabel: '$730K',
    unitSize: '—',
    ownedOutright: 26.3, ownedMortgage: 31.2, rented: 41.1, other: 1.4,
    ownerOccupier: 57.5,
    crimeScore: 9, violentCrimes: 6.4, propertyCrimes: 11.2,
    schoolScore: 81, commuteScore: 62, servicesScore: 74,
    orientation: 'E',
    powerline: true, heritage: true, flood: true, bushfire: true, mainRoad: true,
    gentrification: 38.0,
    infrastructure: 74,
    priceGrowth: -0.4, priceGrowthLabel: '-0.4%', priceGrowthDir: 'neg',
    vacancyRate: 6.1,
    publicHousing: 2.0,
    populationGrowth: 3.12,
    risks: { flood: true, bushfire: true, mainRoad: true, powerline: true, heritage: true },
  },
  {
    id: 'p5',
    address: '48 Evaline Street, Campsie 2194, NSW',
    type: 'Unit',
    typeIcon: 'Building',
    winner: false,
    price: 620000, priceLabel: '$620,000',
    overallScore: 82.14,
    landSize: '—', propertySize: '—',
    beds: 2, baths: 1, cars: 1,
    growth: 2.95, growthSign: 'pos',
    summary: 'A well-priced 2BR unit comfortably within budget. Limited land component but excellent walkability scores and proximity to the train station.',
    estValue: 620000, estValueLabel: '$620K',
    unitSize: '68 m²',
    ownedOutright: 19.5, ownedMortgage: 20.2, rented: 58.4, other: 1.9,
    ownerOccupier: 39.7,
    crimeScore: 14, violentCrimes: 8.9, propertyCrimes: 15.1,
    schoolScore: 66, commuteScore: 92, servicesScore: 94,
    orientation: 'NW',
    powerline: false, heritage: true, flood: false, bushfire: false, mainRoad: false,
    gentrification: 52.0,
    infrastructure: 80,
    priceGrowth: 8.2, priceGrowthLabel: '8.2%', priceGrowthDir: 'pos',
    vacancyRate: 11.2,
    publicHousing: 2.4,
    populationGrowth: 9.05,
    risks: { flood: false, bushfire: false, mainRoad: false, powerline: false, heritage: true },
  },
];

const METRICS = [
  { id:'details', label:'Property Details', icon:'MapPin', type:'details' },
  { id:'images', label:'Property Images', icon:'ImageIcon', type:'images' },
  { id:'price', label:'Price', icon:'DollarSign', type:'price' },
  { id:'score', label:'Overall Score', icon:'Target', type:'score', tip:'Weighted score against your goal & preferences' },
  { id:'summary', label:'Property Summary', icon:'Sparkles', type:'summary' },
  { id:'estValue', label:'Estimated Value', icon:'DollarSign', type:'estValue' },
  { id:'landSize', label:'Land Size', icon:'Layers', type:'text', field:'landSize' },
  { id:'propertySize', label:'Property Size', icon:'Home', type:'text', field:'propertySize' },
  { id:'unitSize', label:'Unit Size', icon:'Maximize', type:'text', field:'unitSize' },
  { id:'owner', label:'Owner Occupier', icon:'User', type:'donut' },
  { id:'crime', label:'Crime Score', icon:'Shield', type:'crime' },
  { id:'school', label:'School Score', icon:'School', type:'progress', field:'schoolScore' },
  { id:'commute', label:'Commute Score', icon:'Car', type:'progress', field:'commuteScore' },
  { id:'orientation', label:'Orientation', icon:'Compass', type:'text', field:'orientation' },
  { id:'services', label:'Services Score', icon:'Store', type:'progress', field:'servicesScore' },
  { id:'powerline', label:'Powerline Proximity', icon:'Zap', type:'bool', field:'powerline' },
  { id:'heritage', label:'Heritage Overlay', icon:'Landmark', type:'bool', field:'heritage' },
  { id:'flood', label:'Flood Zone', icon:'Droplets', type:'bool', field:'flood' },
  { id:'bushfire', label:'Bushfire Zone', icon:'Flame', type:'bool', field:'bushfire' },
  { id:'mainRoad', label:'On Main road?', icon:'Navigation', type:'bool', field:'mainRoad' },
];

Object.assign(window, { PROPERTIES, METRICS });


/* ===== rows.jsx ===== */
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


/* ===== overview.jsx ===== */
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


/* ===== ask.jsx ===== */
// Ask AI tab — ChatGPT-style with persistent bottom composer

const ASK_SUGGESTIONS = [
  { icon: 'TrendUp', text: 'Which property has the best long-term growth potential?' },
  { icon: 'School',  text: 'Compare the school zones for these properties' },
  { icon: 'Shield',  text: 'What are the main risks I should consider?' },
  { icon: 'Dollar',  text: 'Break down the investment return for the top property' },
];

const SuggestionIcon = ({ name, size=18 }) => {
  if (name === 'School') return <School size={size}/>;
  if (name === 'Shield') return <Shield size={size}/>;
  if (name === 'Dollar') return <DollarSign size={size}/>;
  // TrendUp — small inline svg
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 17 9 11 13 15 21 7"/>
      <polyline points="14 7 21 7 21 14"/>
    </svg>
  );
};

// Chat message bubble
const ChatMsg = ({ role, children }) => {
  const isUser = role === 'user';
  return (
    <div style={{
      display:'flex', justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: 16,
    }}>
      <div style={{
        maxWidth: '78%',
        padding: isUser ? '12px 16px' : '14px 18px',
        background: isUser ? T.indigo : 'white',
        color: isUser ? 'white' : T.text,
        border: isUser ? `1px solid ${T.indigoD}` : `1px solid ${T.line}`,
        fontFamily: T.fontSans, fontSize: 14, lineHeight: 1.55,
        whiteSpace:'pre-wrap', wordWrap:'break-word',
      }}>
        {children}
      </div>
    </div>
  );
};

// Suggestion card (clickable prompt)
const SuggestionCard = ({ icon, text, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      onClick={onClick}
      style={{
        display:'flex', alignItems:'center', gap:12,
        padding:'14px 16px', textAlign:'left', cursor:'pointer',
        background: hover ? T.indigo50 : 'white',
        border:`1px solid ${hover ? T.indigo100 : T.line}`,
        fontFamily:T.fontSans, fontSize:13, color:T.text, lineHeight:1.4,
        transition:'all 120ms ease',
      }}>
      <span style={{
        display:'inline-flex', alignItems:'center', justifyContent:'center',
        width:36, height:36, background: T.stone100, color: T.indigo,
        flexShrink:0, border:`1px solid ${T.line}`,
      }}>
        <SuggestionIcon name={icon} size={16}/>
      </span>
      <span>{text}</span>
    </button>
  );
};

// Composer (bottom input pill)
const AskComposer = ({ value, setValue, onSend, disabled }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 200) + 'px';
  }, [value]);

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div style={{
      maxWidth: 820, margin:'0 auto', width:'100%',
      padding:'10px 14px',
      background:'white', border:`1.5px solid ${T.line}`,
      display:'flex', alignItems:'flex-end', gap:10,
      boxShadow:'0 6px 24px rgba(28,25,23,.06)',
    }}>
      <textarea
        ref={ref}
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        onKeyDown={handleKey}
        placeholder="Ask AI a question about these properties…"
        rows={1}
        style={{
          flex:1, resize:'none', border:'none', outline:'none',
          fontFamily:T.fontSans, fontSize:14, lineHeight:1.5, color:T.text,
          background:'transparent', padding:'8px 4px',
          maxHeight: 200, minHeight: 24,
        }}/>
      <button
        onClick={onSend}
        disabled={disabled || !value.trim()}
        aria-label="Send"
        style={{
          width:38, height:38, border:'none',
          background: (disabled || !value.trim()) ? T.stone100 : T.indigo,
          color: (disabled || !value.trim()) ? T.muted : 'white',
          cursor: (disabled || !value.trim()) ? 'not-allowed' : 'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          flexShrink:0, transition:'background 120ms ease',
        }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </div>
  );
};

// Empty hero (greeting + sparkle + suggestion cards)
const AskHero = ({ onPick }) => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
  return (
    <div style={{
      maxWidth: 820, margin:'0 auto', width:'100%',
      display:'flex', flexDirection:'column', alignItems:'center',
      padding:'40px 0',
    }}>
      {/* Sparkle medallion */}
      <div style={{
        width:72, height:72, borderRadius:999,
        background: T.indigo, color:'white',
        boxShadow:`0 0 0 8px ${T.indigo50}, 0 6px 18px rgba(98,95,255,.25)`,
        display:'flex', alignItems:'center', justifyContent:'center',
        marginBottom: 22,
      }}>
        <Sparkles size={30}/>
      </div>

      <h2 style={{
        fontFamily:T.fontCooper, fontSize:36, fontWeight:400,
        color:T.text, margin:0, lineHeight:1.1, textAlign:'center',
      }}>{greeting}</h2>
      <p style={{
        fontFamily:T.fontSans, fontSize:14, color:T.sec,
        margin:'8px 0 32px', textAlign:'center',
      }}>
        What's on <span style={{color:T.indigo, fontWeight:500}}>your mind?</span>
      </p>

      <div style={{
        fontFamily:T.fontMono, fontSize:11, color:T.sec, fontWeight:600,
        textTransform:'uppercase', letterSpacing:'.06em',
        alignSelf:'flex-start', marginBottom:10,
      }}>Get started with an example</div>
      <div style={{
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, width:'100%',
      }}>
        {ASK_SUGGESTIONS.map((s, i) => (
          <SuggestionCard key={i} icon={s.icon} text={s.text} onClick={()=>onPick(s.text)}/>
        ))}
      </div>
    </div>
  );
};

// Main Ask AI tab
const AskTab = ({ properties }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, busy]);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q) return;
    setMessages(m => [...m, { role:'user', text: q }]);
    setInput('');
    setBusy(true);
    try {
      const addrs = properties.map(p => p.address).join('; ');
      const reply = await window.claude.complete({
        messages: [
          { role: 'user', content:
`You are Propia, an Australian property analysis assistant. Answer concisely (2-4 short paragraphs) using a calm, expert tone. The user is comparing these properties: ${addrs}. Question: ${q}` },
        ],
      });
      setMessages(m => [...m, { role:'assistant', text: reply }]);
    } catch (e) {
      setMessages(m => [...m, { role:'assistant', text: "Sorry — I couldn't reach the model just now. Try again in a moment." }]);
    } finally {
      setBusy(false);
    }
  };

  const empty = messages.length === 0;

  return (
    <div style={{
      display:'flex', flexDirection:'column',
      minHeight: 'calc(100vh - 220px)',
      position:'relative',
      // bottom padding reserves space so messages don't hide under the fixed composer
      paddingBottom: 140,
    }}>
      {/* Conversation area (scrolls with the page) */}
      <div
        ref={scrollRef}
        style={{
          padding: empty ? '0' : '24px 0 16px',
        }}>
        {empty ? (
          <AskHero onPick={(t)=>send(t)}/>
        ) : (
          <div style={{maxWidth:820, margin:'0 auto', width:'100%'}}>
            {messages.map((m, i) => (
              <ChatMsg key={i} role={m.role}>{m.text}</ChatMsg>
            ))}
            {busy && (
              <ChatMsg role="assistant">
                <span style={{display:'inline-flex', gap:4, alignItems:'center'}}>
                  <span className="dot" style={{width:6, height:6, borderRadius:999, background:T.indigo, animation:'pulse 1.2s -.4s infinite ease-in-out'}}/>
                  <span className="dot" style={{width:6, height:6, borderRadius:999, background:T.indigo, animation:'pulse 1.2s -.2s infinite ease-in-out'}}/>
                  <span className="dot" style={{width:6, height:6, borderRadius:999, background:T.indigo, animation:'pulse 1.2s 0s infinite ease-in-out'}}/>
                </span>
              </ChatMsg>
            )}
          </div>
        )}
      </div>

      {/* Fixed-to-viewport bottom composer */}
      <div style={{
        position:'fixed', bottom:0, left:0, right:0,
        padding:'24px 32px 16px',
        background:'linear-gradient(to bottom, rgba(250,250,249,0) 0%, var(--bg-page,#FAFAF9) 35%, var(--bg-page,#FAFAF9) 100%)',
        zIndex: 50,
        pointerEvents:'none', // let gradient area pass through; inner gets pointer events
      }}>
        <div style={{pointerEvents:'auto', maxWidth: 820, margin:'0 auto'}}>
          <AskComposer value={input} setValue={setInput} onSend={()=>send()} disabled={busy}/>
          <div style={{
            textAlign:'center', marginTop:8,
            fontFamily:T.fontSans, fontSize:11, color:T.muted,
          }}>
            Propia AI can make mistakes. Verify key details before deciding.
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 80%, 100% { opacity: .25; transform: scale(.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

Object.assign(window, { AskTab });


/* ===== app.jsx ===== */
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

