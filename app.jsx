// ── App shell ──────────────────────────────────────────────────
const { useRef, useState, useEffect, useCallback } = React;

const SPY_IDS = ['top', 'manual', 'export', 'copyright', 'submit', 'support'];

function App() {
  const [active, setActive] = useState('top');
  const contentRef = useRef(null);

  const go = useCallback((id) => {
    const root = contentRef.current;
    if (!root) return;
    const target = root.querySelector('#' + id);
    if (!target) return;
    root.scrollTo({ top: Math.max(0, target.offsetTop - 72), behavior: 'smooth' });
    if (id === 'contact') return;
    setActive(SPY_IDS.includes(id) ? id : active);
  }, [active]);

  // scroll spy
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const onScroll = () => {
      const y = root.scrollTop + 120;
      let cur = 'top';
      for (const id of SPY_IDS) {
        const el = root.querySelector('#' + id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    root.addEventListener('scroll', onScroll, { passive: true });
    return () => root.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div ref={contentRef} style={{ minHeight: '100vh', background: '#fff', overflow: 'auto' }}>
      <Header go={go} active={active} />
      <Hero go={go} />
      <QuickActions go={go} />
      <ManualSection />
      <ExportGuideSection />
      <CopyrightSection />
      <PhilosophySection />
      <SubmitSection />
      <SupportSection />
      <Footer go={go} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
