// ── Submit / Support / Footer ──────────────────────────────────

// ---- SUBMIT ---------------------------------------------------
function SubmitSection() {
  return (
    <section id="submit" className="px-14 py-24 bg-cream/50">
      <SectionHead en="Data Submission" title="データ提出窓口。"
      sub="下記の専用フォームから、映像データをご提出ください。THE GARDEN ORIENTAL OSAKA でご披露宴のお客様専用の窓口です。" center />

      <div className="max-w-4xl mx-auto bg-white border border-line">
        <div className="grid grid-cols-5">
          <img src="logo/venue-tgoo.png" alt={VENUE.name} className="block w-full h-full object-cover"
            style={{ minHeight: '260px', gridColumn: 'span 2' }} />
          <div className="col-span-3 px-11 py-12 flex flex-col">
            <span className="inline-flex items-center gap-2 font-gothic text-muted" style={{ fontSize: 11, letterSpacing: '.14em' }}>
              <IconPin size={13} className="text-goldDeep" />{VENUE.city}
            </span>
            <div className="font-enserif text-ink mt-4 leading-tight" style={{ fontSize: 27, letterSpacing: '.02em' }}>{VENUE.name}</div>
            <p className="font-gothic text-muted mt-5 leading-[1.95]" style={{ fontSize: 12.5 }}>
              下のボタンから専用フォームを開き、必要事項をご入力のうえ映像データをアップロードしてください。
            </p>
            <div className="mt-auto pt-9">
              <a href={VENUE.url} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-ink text-ivory border border-ink px-8 py-4 font-gothic transition-colors duration-300 hover:bg-transparent hover:text-ink"
                style={{ fontSize: 12.5, letterSpacing: '.12em' }}>
                提出フォームを開く <IconExternal size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* footnote: checklist + deadline */}
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 mt-8">
        <div className="col-span-2 bg-white border border-line px-9 py-8">
          <div className="font-mincho text-ink mb-6" style={{ fontSize: 15, letterSpacing: '.04em' }}>フォームを開く前に、ご確認ください</div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {['アスペクト比 16:9・解像度 1920×1080', '映像の前後に黒画面（5秒）を入れた', 'MP4（H.264）形式で書き出した', '文字が端で切れていないか確認した'].map((t) =>
            <div key={t} className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5 text-goldDeep"><IconCheck size={13} /></span>
                <span className="font-gothic text-ink/70" style={{ fontSize: 12, lineHeight: 1.7 }}>{t}</span>
              </div>
            )}
          </div>
        </div>
        <div className="px-8 py-8 flex flex-col justify-center" style={{ background: '#2C2823' }}>
          <div className="font-gothic text-goldSoft" style={{ fontSize: 10, letterSpacing: '.22em' }}>DEADLINE</div>
          <div className="font-mincho text-ivory mt-3 leading-snug" style={{ fontSize: 16, letterSpacing: '.04em' }}>ご披露宴<br />2週間前まで</div>
          <div className="font-gothic text-ivory/45 mt-3.5 leading-relaxed" style={{ fontSize: 11 }}>再生確認の為お早めにご提出ください。</div>
        </div>
      </div>

      <p className="text-center font-gothic text-muted mt-9" style={{ fontSize: 11 }}>
        フォームが開かない場合や、ご不明な点はお問い合わせください。
      </p>
    </section>);

}

// ---- SUPPORT (FAQ + venue spec + contact) --------------------
function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-line last:border-0">
      <button onClick={onToggle} className="w-full flex items-center gap-5 text-left py-6">
        <span className="font-enserif text-gold shrink-0" style={{ fontSize: 14 }}>Q</span>
        <span className="flex-1 font-mincho text-ink" style={{ fontSize: 15, letterSpacing: '.03em' }}>{item.q}</span>
        <span className={`shrink-0 text-goldDeep/70 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}><IconPlus size={18} /></span>
      </button>
      <div className="grid transition-all duration-300" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
        <div className="overflow-hidden">
          <p className="font-gothic text-ink/65 leading-[2.1] pb-7 pl-9 pr-8" style={{ fontSize: 12.5 }}>{item.a}</p>
        </div>
      </div>
    </div>);

}

function SupportSection() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="support" className="px-14 py-24">
      <SectionHead en="Help &amp; Support" title="お困りごとを、その場で解決。"
      sub="よくあるご質問をまとめました。解決しないときはお気軽にお問い合わせください。" center />
      <div className="grid grid-cols-3 gap-10">
        {/* FAQ */}
        <div className="col-span-2 bg-white border border-line px-10 py-4">
          {FAQS.map((item, i) =>
          <FaqItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          )}
        </div>

        {/* contact */}
        <div id="contact" className="col-span-1">
          <div className="px-8 py-9 text-center" style={{ background: '#F4EEE3' }}>
            <div className="font-mincho text-ink" style={{ fontSize: 15.5, letterSpacing: '.04em' }}>解決しないときは</div>
            <p className="font-gothic text-muted mt-3 leading-[1.9]" style={{ fontSize: 12 }}>下記の窓口までお気軽にお問い合わせください。</p>
            <div className="mt-6 font-mincho text-goldDeep" style={{ fontSize: 16, letterSpacing: '.02em' }}>osaka@fem-produce.co.jp</div>
            <div className="font-gothic text-muted mt-2.5" style={{ fontSize: 11 }}>営業時間 12:00–18:00 火曜日定休</div>
          </div>
        </div>
      </div>
    </section>);

}

function Footer({ go }) {
  return (
    <footer style={{ background: '#2C2823' }} className="px-14 pt-16 pb-11">
      <div className="flex items-start justify-between border-b border-white/10 pb-12">
        <div>
          <Logo light h={38} />
          <div className="font-gothic text-goldSoft mt-6" style={{ fontSize: 10, letterSpacing: '.22em' }}>{VENUE.name}</div>
          <p className="font-gothic text-ivory/45 mt-4 leading-[1.95] max-w-xs" style={{ fontSize: 11.5 }}>
            結婚式の音響・映像をトータルでサポート。お二人の一日を、最高の音と映像で。
          </p>
        </div>
        <nav className="flex flex-col gap-4 items-end">
          {NAV.map((n) =>
          <button key={n.id} onClick={() => go(n.id)} className="font-gothic text-ivory/60 hover:text-gold transition-colors duration-300" style={{ fontSize: 11.5, letterSpacing: '.1em' }}>{n.label}</button>
          )}
        </nav>
      </div>
      <div className="flex items-center justify-between pt-7">
        <span className="font-gothic text-ivory/35" style={{ fontSize: 10.5, letterSpacing: '.1em' }}>© 2026 Hmajor — Wedding Sound &amp; Visual</span>
        <span className="font-enserif text-gold/60" style={{ fontSize: 13, letterSpacing: '.06em' }}>Make your day sound beautiful.</span>
      </div>
    </footer>);

}

Object.assign(window, { SubmitSection, SupportSection, Footer, FaqItem });
