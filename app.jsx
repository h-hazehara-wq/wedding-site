// ── App shell ──────────────────────────────────────────────────
const { useState, useRef, useEffect, useCallback } = React;

const FRAME_W = 1280;
const FRAME_H = 812;
const SPY_IDS = ['top', 'manual', 'export', 'copyright', 'submit', 'support'];

function App() {
  const [active, setActive] = useState('top');
  const [scale, setScale] = useState(1);
  const contentRef = useRef(null);

  // fit-to-viewport scaling (letterbox)
  useEffect(() => {
    const fit = () => {
      const s = Math.min(1, (window.innerWidth - 32) / FRAME_W, (window.innerHeight - 32) / FRAME_H);
      setScale(s);
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  const go = useCallback((id) => {
    const root = contentRef.current;
    if (!root) return;
    const target = root.querySelector('#' + id);
    if (!target) return;
    root.scrollTo({ top: Math.max(0, target.offsetTop - 72), behavior: 'smooth' });
    if (id === 'contact') return;
    setActive(SPY_IDS.includes(id) ? id : active);
  }, [active]);

  // scroll spy — listen on the frame's own scroll container
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
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
        <div style={{ position: 'relative' }}>
          <ChromeWindow width={FRAME_W} height={FRAME_H} url="hmajor.example / guide" tabs={[{ title: 'Hmajor｜お客様案内ページ' }]} contentRef={contentRef}>
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
          </ChromeWindow>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
