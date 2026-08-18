// ── Upper sections: Header / Hero / 必読 / QuickActions / Alert ──

const VENUE_NAME = 'THE GARDEN ORIENTAL OSAKA';

const NAV = [
  { id: 'top',     label: 'ホーム' },
  { id: 'manual',  label: 'マニュアル' },
  { id: 'export',  label: '書き出しガイド' },
  { id: 'copyright', label: 'BGM・著作権' },
  { id: 'submit',  label: 'データ提出' },
  { id: 'support', label: 'よくあるご質問' },
];

function Header({ go, active }) {
  return (
    <header className="sticky top-0 z-30 bg-ivory/92 backdrop-blur-md border-b border-line">
      <div className="h-[76px] px-8 lg:px-14 flex items-center justify-between gap-4">
        <button onClick={() => go('top')} className="flex items-center gap-4 active:opacity-70 transition-opacity shrink-0">
          <Logo h={34} />
          <span className="h-6 w-px bg-line hidden lg:block"></span>
          <span className="font-gothic text-ink/60 whitespace-nowrap hidden lg:block" style={{ fontSize: 10.5, letterSpacing: '.2em' }}>{VENUE_NAME}</span>
        </button>
        <nav className="flex items-center gap-4 lg:gap-6 flex-nowrap">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => go(n.id)}
              className={`relative font-gothic py-1 whitespace-nowrap transition-colors duration-300 ${active === n.id ? 'text-goldDeep' : 'text-ink/65 hover:text-ink'}`}
              style={{ fontSize: 12, letterSpacing: '.1em' }}>
              {n.label}
              {active === n.id && <span className="absolute left-0 right-0 -bottom-1 h-px bg-gold/70"></span>}
            </button>
          ))}
          <Btn variant="goldout" size="sm" onClick={() => go('contact')} className="whitespace-nowrap">お問い合わせ</Btn>
        </nav>
      </div>
    </header>
  );
}

function Hero({ go }) {
  return (
    <section id="top" className="relative">
      <img src="logo/hero-chapel.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '68% 50%' }} />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(100deg, rgba(251,249,245,.99) 0%, rgba(251,249,245,.97) 34%, rgba(251,249,245,.72) 56%, rgba(251,249,245,.12) 82%, rgba(251,249,245,0) 100%)',
      }}></div>

      <div className="relative px-14 pt-28 pb-32" style={{ minHeight: 560 }}>
        <div style={{ maxWidth: 660 }}>
          <Eyebrow en="Music &amp; Visual Guide">{VENUE_NAME}</Eyebrow>
          <h1 className="font-mincho text-ink mt-9" style={{ fontSize: 46, lineHeight: 1.5, letterSpacing: '.06em', fontWeight: 400 }}>
            お二人の結婚式を、<br />最高の<span className="text-goldDeep">音</span>と<span className="text-goldDeep">映像</span>で。
          </h1>
          <p className="font-gothic text-ink/65 mt-9 leading-[2.1]" style={{ fontSize: 13.5, maxWidth: 460 }}>
            打ち合わせの前に知っておきたい映像のつくり方やBGMのルールを、このページひとつで。
            ご提出も、ご質問も、ここで完結します。
          </p>
        </div>
      </div>
    </section>
  );
}

function QuickActions({ go }) {
  const icons = { video: IconFilm, bgm: IconMusic, submit: IconUpload };
  return (
    <section className="px-14 py-24">
      <SectionHead en="Quick Access" title="まずは、こちらから。"
        sub="知りたいこと・やりたいことから選んでください。" center />
      <div className="grid grid-cols-3 border-t border-l border-line">
        {QUICK_ACTIONS.map((a) => {
          const I = icons[a.id];
          return (
            <button key={a.id} onClick={() => go(a.scrollTo || a.tab)}
              className="group text-left bg-white border-r border-b border-line px-9 py-11 transition-colors duration-300 hover:bg-cream/50">
              <div className="text-goldDeep/70 transition-colors duration-300 group-hover:text-goldDeep">
                <I size={26} />
              </div>
              <div className="font-mincho text-ink mt-8" style={{ fontSize: 17, letterSpacing: '.04em' }}>{a.label}</div>
              <div className="font-gothic text-muted mt-2.5" style={{ fontSize: 12 }}>{a.sub}</div>
              <div className="flex items-center gap-2 mt-9 text-goldDeep font-gothic transition-transform duration-300 group-hover:translate-x-1.5"
                style={{ fontSize: 10.5, letterSpacing: '.18em' }}>
                VIEW <IconChevR size={13} />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function AlertBand() {
  return (
    <div className="flex items-center gap-12 px-12 py-11 mb-14" style={{ background: '#2C2823' }}>
      <div className="shrink-0 border border-gold/40 w-14 h-14 flex items-center justify-center text-gold"><IconClock size={24} /></div>
      <div className="flex-1">
        <div className="font-gothic text-goldSoft" style={{ fontSize: 11.5, letterSpacing: '.22em' }}>ご提出期限のお願い</div>
        <div className="font-mincho text-ivory leading-[1.55] mt-4" style={{ fontSize: 25, letterSpacing: '.04em', fontWeight: 400 }}>
          挙式の <span className="font-enserif text-gold" style={{ fontSize: 40 }}>2</span> 週間前までに、映像データをご提出ください。
        </div>
        <p className="font-gothic text-ivory/55 mt-4 leading-[1.9]" style={{ fontSize: 12.5, maxWidth: 660 }}>
          権利申請・音源準備・会場での再生確認のためのお時間です。お早めのご準備にご協力ください。
        </p>
      </div>
    </div>
  );
}

Object.assign(window, { NAV, VENUE_NAME, Header, Hero, QuickActions, AlertBand });
