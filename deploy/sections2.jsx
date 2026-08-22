// ── Lower sections: Manual / Philosophy ─────────────────────────

// ---- MANUAL ---------------------------------------------------
function SpecRow({ icon, k, v, accent }) {
  return (
    <div className="flex items-center gap-4 py-3.5 border-b border-line last:border-0">
      <span className="text-goldDeep/70">{icon}</span>
      <span className="font-gothic text-muted w-20 shrink-0" style={{ fontSize: 11.5 }}>{k}</span>
      <span className={`font-mincho ${accent ? 'text-goldDeep' : 'text-ink'}`} style={{ fontSize: 14, letterSpacing: '.02em' }}>{v}</span>
    </div>);

}

// small heading for sub-rows
function SubHead({ children }) {
  return (
    <div className="flex flex-col items-center text-center mt-24 mb-10">
      <span className="h-px w-10 bg-ink/20"></span>
      <h3 className="font-mincho text-ink mt-6" style={{ fontSize: 22, letterSpacing: '.05em', fontWeight: 400 }}>{children}</h3>
    </div>);

}

function ManualSection() {
  return (
    <section id="manual" className="px-14 py-24 bg-cream/50">
      <SectionHead en="Manual" title="映像づくりの、基本ルール。"
      sub="ここを押さえれば、当日の再生トラブルはほぼ防げます。" center />

      <AlertBand />

      <div className="max-w-2xl mx-auto">
        {/* 映像 */}
        <div className="bg-white border border-line p-10">
          <div className="flex items-center gap-4 mb-7">
            <span className="text-goldDeep/70"><IconFilm size={22} /></span>
            <h3 className="font-mincho text-ink" style={{ fontSize: 19, letterSpacing: '.04em' }}>映像の作り方・ルール</h3>
          </div>
          <div className="mb-8">
            <SpecRow icon={<IconMonitor size={18} />} k="アスペクト比" v="16 : 9" accent />
            <SpecRow icon={<IconSparkle size={18} />} k="解像度" v="1920×1080（フルHD）まで対応可" accent />
            <SpecRow icon={<IconFilm size={18} />} k="データ形式" v="MP4（H.264）" />
            <SpecRow icon={<IconClock size={18} />} k="長さの目安" v="4〜6分 程度" />
          </div>
          {/* aspect do / don't */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="overflow-hidden ph-stripes" style={{ aspectRatio: '16/9' }}></div>
              <div className="flex items-center gap-2 mt-3 font-gothic text-goldDeep" style={{ fontSize: 12 }}>
                <IconCheck size={15} /> 16:9 でぴったり
              </div>
            </div>
            <div>
              <div className="overflow-hidden bg-ink flex items-center justify-center" style={{ aspectRatio: '16/9' }}>
                <div className="ph-stripes h-full" style={{ aspectRatio: '4/3' }}></div>
              </div>
              <div className="flex items-center gap-2 mt-3 font-gothic text-muted" style={{ fontSize: 12 }}>
                <IconClose size={15} /> 4:3 だと黒帯・見切れ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 上映トラブルを防ぐ 3つのポイント ── */}
      <SubHead>上映トラブルを防ぐ、3つのポイント</SubHead>
      <div className="grid grid-cols-3 border-t border-l border-line">
        {/* 1. 黒画面 */}
        <div className="bg-white border-r border-b border-line p-8 flex flex-col">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-enserif text-gold" style={{ fontSize: 22 }}>01</span>
            <h4 className="font-mincho text-ink" style={{ fontSize: 16, letterSpacing: '.03em' }}>映像の前後に黒画面を5秒</h4>
          </div>
          <div className="flex h-10 overflow-hidden border border-line mb-2">
            <div className="bg-ink flex items-center justify-center" style={{ width: '20%' }}>
              <span className="font-gothic text-white/70" style={{ fontSize: 9.5 }}>黒 5秒</span>
            </div>
            <div className="ph-stripes flex-1 flex items-center justify-center">
              <span className="font-mono px-2 py-0.5" style={{ fontSize: 9.5, color: '#9A8C6E', background: 'rgba(251,249,245,.8)' }}>本編</span>
            </div>
            <div className="bg-ink flex items-center justify-center" style={{ width: '20%' }}>
              <span className="font-gothic text-white/70" style={{ fontSize: 9.5 }}>黒 5秒</span>
            </div>
          </div>
          <p className="font-gothic text-ink/65 leading-[1.95] mt-4" style={{ fontSize: 12 }}>
            冒頭は黒画面から始めると、違和感なく上映をスタートできます。結びに黒画面がないと、再生機器の
            <span className="text-goldDeep">メニュー画面が映り込む</span>、または早めに停止して
            <span className="text-goldDeep">最後の映像・音声が切れてしまう</span>リスクがあります。
          </p>
        </div>

        {/* 2. 解像度 / 変換 */}
        <div className="bg-white border-r border-b border-line p-8 flex flex-col">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-enserif text-gold" style={{ fontSize: 22 }}>02</span>
            <h4 className="font-mincho text-ink" style={{ fontSize: 16, letterSpacing: '.03em' }}>解像度は 1920×1080</h4>
          </div>
          <div className="bg-ivory border border-line py-5 text-center">
            <div className="font-enserif text-goldDeep leading-none" style={{ fontSize: 30 }}>1920×1080</div>
            <div className="font-gothic text-muted mt-2.5" style={{ fontSize: 10, letterSpacing: '.22em' }}>フルHD ／ 16 : 9</div>
          </div>
          <div className="flex items-center gap-2 mt-4 font-gothic text-muted" style={{ fontSize: 11.5 }}>
            <IconClose size={15} className="text-ink/40" /> 4K 非対応
          </div>
          <p className="font-gothic text-ink/65 leading-[1.95] mt-2.5 flex-1" style={{ fontSize: 12 }}>
            これを超える設定は会場プロジェクターが対応しておりません。必ず 1920×1080（16:9）で書き出してください。
          </p>
          <div className="mt-4 flex items-center gap-2.5 border border-beige px-4 py-3">
            <span className="text-goldDeep"><IconDownload size={16} /></span>
            <span className="font-gothic text-goldDeep" style={{ fontSize: 11.5 }}>推奨変換ソフト：Clipchamp（無料）</span>
          </div>
        </div>

        {/* 3. 表示範囲 / セーフエリア */}
        <div className="bg-white border-r border-b border-line p-8 flex flex-col">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-enserif text-gold" style={{ fontSize: 22 }}>03</span>
            <h4 className="font-mincho text-ink" style={{ fontSize: 16, letterSpacing: '.03em' }}>文字は内側に余裕を</h4>
          </div>
          <div className="relative overflow-hidden bg-ink" style={{ aspectRatio: '16/9' }}>
            <div className="absolute border border-dashed border-gold/60 flex items-center justify-center" style={{ inset: '5%' }}>
              <span className="font-gothic text-gold/85 text-center leading-relaxed" style={{ fontSize: 10.5 }}>文字は<br />この内側に</span>
            </div>
          </div>
          <p className="font-gothic text-ink/65 leading-[1.95] mt-4" style={{ fontSize: 12 }}>
            PC画面の表示がそのままプロジェクターに投影されます。端ぎりぎりの文字は
            <span className="text-goldDeep">一部が途切れる</span>可能性があるため、表示領域より少し内側に配置してください。
          </p>
        </div>
      </div>
    </section>);

}

// ---- PHILOSOPHY (選曲はプロにおまかせ) ------------------------
function PhilosophySection() {
  return (
    <section id="philosophy" className="px-14 py-24">
      <div className="grid grid-cols-5" style={{ background: '#F4EEE3' }}>
        <img src="logo/meeting.jpg" alt="" className="col-span-2 block w-full h-full object-cover" style={{ minHeight: 420, objectPosition: '55% 50%' }} />
        <div className="col-span-3 px-14 py-16">
          <Eyebrow en="Our Philosophy">選曲について</Eyebrow>
          <h3 className="font-mincho text-ink leading-[1.5] mt-8" style={{ fontSize: 27, letterSpacing: '.05em', fontWeight: 400 }}>
            曲はシーンごとに<span className="text-goldDeep">”決め切らなくて”</span>大丈夫です。
          </h3>
          <p className="font-gothic text-ink/70 leading-[2.15] mt-8" style={{ fontSize: 13 }}>
            近ごろは念入りに調べてからお越しになる方が増え、その熱量や想いをとても嬉しく思っています。
            事前にお渡ししている「my Favorite songs」に、お好きなアーティストや思い出の映画、普段聴く音楽などを書いていただければ準備はバッチリです。
          </p>
          <p className="font-gothic text-ink/70 leading-[2.15] mt-5" style={{ fontSize: 13 }}>
            ただ、「どのシーンでどの曲を流すか」まで完璧に決める必要はありません。
          </p>
          <p className="font-gothic text-ink/70 leading-[2.15] mt-5" style={{ fontSize: 13 }}>
            シーンに本当に響く一曲は、おふたりがどんな披露宴にしたいか、ゲストへの想い・会場の広さ・進行のテンポまで見合わせて、
            はじめてかみ合うものだからです。
          </p>
          <p className="font-gothic text-ink/70 leading-[2.15] mt-5" style={{ fontSize: 13 }}>
            「このアーティストが好き」という種があれば十分。お打ち合わせでは、数多くの現場を重ねてきたミュージックプランナーが、
            おふたりの「こうしたい」をうかがいながら、一番美しく映える配置をご提案し、一緒にカタチにしていきます。
          </p>
          <p className="font-mincho text-goldDeep mt-10" style={{ fontSize: 17, letterSpacing: '.06em' }}>
            どうぞ、私たちの耳と提案を信じて、リラックスしてお越しください。
          </p>
        </div>
      </div>
    </section>);

}

Object.assign(window, { ManualSection, PhilosophySection, SpecRow, SubHead });
