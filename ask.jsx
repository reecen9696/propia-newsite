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
