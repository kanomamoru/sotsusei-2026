import { useState, useEffect, useRef } from "react";

const SECTIONS = [
  { id: "goals", num: "01", title: "教育目標・心構え", status: "draft" },
  { id: "process", num: "02", title: "進め方・評価", status: "draft" },
  { id: "guidelines", num: "03", title: "領域別ガイドライン", status: "draft" },
  { id: "schedule", num: "04", title: "年間スケジュール", status: "draft" },
  { id: "interim", num: "05", title: "中間発表", status: "draft" },
  { id: "final", num: "06", title: "最終発表", status: "draft" },
  { id: "organization", num: "07", title: "卒展の運営体制", status: "draft" },
  { id: "exhibition", num: "08", title: "設営〜展示〜撤収", status: "draft" },
];

/* ── Section Content Components ── */

function GoalsSection() {
  return (
    <div>
      <SectionLead text="映像学科の教育目標と、卒業制作に臨む姿勢について。" />

      <ContentBlock title="好奇心を追求し共有する演習">
        <p>あなた自身が課題を設定し、教員と共に研究・制作します。</p>
      </ContentBlock>
      <ContentBlock title="卒業に値するか判定する演習">
        <p>大学や学科の定めた教育目標を習得したかを評価します。</p>
      </ContentBlock>

      <ContentBlock title="映像学科の教育目標">
        <ul style={{ listStyle: "none", padding: 0 }}>
          {["社会の魅力と課題に取り組む", "表現の多様性と技術進化に挑戦", "本質を追求し、想いを形に"].map((t, i) => (
            <li key={i} style={{ padding: "8px 0", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#D42027", fontWeight: 700 }}>●</span> {t}
            </li>
          ))}
        </ul>
      </ContentBlock>

      <ContentBlock title="卒業制作は好奇心の結晶！">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "12px 0" }}>
          <div style={{ background: "#FDE8E8", borderRadius: 8, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#D42027", lineHeight: 1.6 }}>見出したことを<br/>作品として社会<br/>に共有する。</div>
            <div style={{ fontSize: 12, color: "#888", marginTop: 8 }}>一般大学では学会で論文発表。芸工大では卒展で作品発表。</div>
          </div>
          <div style={{ background: "#FDE8E8", borderRadius: 8, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#D42027", lineHeight: 1.6 }}>だれかの創造を<br/>生み出すきっか<br/>けを作る。</div>
            <div style={{ fontSize: 12, color: "#888", marginTop: 8 }}>創造や知識のリレーに参加する感覚を大事にする。</div>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock title="映像＋α">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "12px 0" }}>
          <div style={{ background: "#f5f5f5", borderRadius: 8, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.6 }}>映像を作る事自体を目的にしない。</div>
          </div>
          <div style={{ background: "#f5f5f5", borderRadius: 8, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.6 }}>映像で何を実現するのか？を目的にする。</div>
          </div>
        </div>
      </ContentBlock>

      <Callout type="emphasis">
        思い切り一年間没頭しよう。教育目標とのすり合わせや、社会との関連は、教員と相談して作りながら設定していく。
      </Callout>

      <Callout type="warning">
        <strong>他者と共有できる目標があることが学びとなる。</strong><br/>好きなことを好きなように作る自己完結作品は非推奨。大学全体で非推奨です。自己満足型で閉ざされ、趣味の延長で価値基準が自分自身のみになるのは避けよう。こうしたプロセスはネガティブな思考のループに入りがちで危険です。自己満足型作品は「自主制作」としてライフワークで取り組むのがおすすめ。
      </Callout>
    </div>
  );
}

function ProcessSection() {
  return (
    <div>
      <SectionLead text="教員との関わり方、進捗の共有方法、そして評価の仕組みについて。" />

      {/* Rhythm */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
        {[
          { label: "毎週", desc: "進捗レポートを提出" },
          { label: "毎月", desc: "進捗報告会で共有" },
          { label: "期末", desc: "全員で発表" },
        ].map((item, i) => (
          <div key={i} style={{ background: "#FDE8E8", borderRadius: 8, padding: "14px 12px", textAlign: "center" }}>
            <div style={{ fontWeight: 900, fontSize: 18, color: "#D42027" }}>{item.label}</div>
            <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>{item.desc}</div>
          </div>
        ))}
      </div>

      <Callout type="info">
        作品だけではなく、プロセス全体も評価対象になります。やむを得ない理由で進捗報告会を欠席する場合は事前にプレゼンビデオを提出となります。中間・最終発表は参加必須です。
      </Callout>

      <ContentBlock title="教員はナビゲーター">
        <p>卒業制作の作品は、研究室や指導教員、学科名とともに公開されます。学生個人のプロジェクトであることを前提として、学科や研究室の成果でもあるのです。</p>
      </ContentBlock>
      <ContentBlock title="常に相談しながらすすめよう">
        <p>孤独に作るのではなく、仲間や教員に相談しながら進めてください。人の意見を取り入れると自分の作品ではなくなることはありません。皆で高め合うことが重要です。</p>
      </ContentBlock>
      <ContentBlock title="進捗レポート＋就活状況">
        <p>映像学科ポータルの「卒業制作2025」に、毎週ゼミ前日中に提出してください。出席のカウントとなります。</p>
        <p style={{ marginTop: 8, color: "#777", fontSize: 14 }}>ゼミでの指導内容は各ゼミごとに異なります。指導教員の指示に従ってください。</p>
      </ContentBlock>

      {/* Evaluation */}
      <ContentBlock title="評価対象">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, margin: "12px 0" }}>
          {[
            { name: "プロセス", desc: "提出物や出席\n進捗共有会への参加", timing: "", filled: false },
            { name: "作品", desc: "進捗共有会\n12月末に評価", timing: "年内に作品完成", filled: true },
            { name: "プレゼン", desc: "最終発表\n1月末に評価", timing: "", filled: false },
            { name: "展示", desc: "最終発表\n1月末に評価", timing: "", filled: false },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                width: 72, height: 72, borderRadius: "50%", margin: "0 auto",
                border: "3px solid #D42027",
                background: item.filled ? "#FDE8E8" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontWeight: 900, fontSize: 14, color: "#D42027" }}>{item.name}</span>
              </div>
              <div style={{ fontSize: 11, color: "#666", marginTop: 8, whiteSpace: "pre-line", lineHeight: 1.5 }}>{item.desc}</div>
              {item.timing && <div style={{ fontSize: 12, fontWeight: 700, color: "#D42027", marginTop: 6 }}>{item.timing}</div>}
              {i < 3 && <span style={{ position: "relative", display: "none" }}>+</span>}
            </div>
          ))}
        </div>
        <Callout type="emphasis">
          作品は年内（12月末）に完成させることが目標です。1月以降はプレゼンと展示の準備に集中しましょう。
        </Callout>
      </ContentBlock>
    </div>
  );
}

function GuidelinesSection() {
  const [openArea, setOpenArea] = useState(null);
  const toggle = (i) => setOpenArea(openArea === i ? null : i);

  const areas = [
    { name: "アニメーション・ストップモーション", color: "#E91E63", rec: "推奨作品時間：2分 4分 6分", steps: [
      { m: "4", ev: "進捗報告会1", phase: "", task: "リサーチと仮企画" },
      { m: "5", ev: "進捗報告会2", phase: "企画書", task: "テーマ、コンセプト\nキャラクターデザイン、絵コンテラフ" },
      { m: "6", ev: "進捗報告会3", phase: "", task: "絵コンテ完成\nイメージボード完成" },
      { m: "7", ev: "中間発表", phase: "描き：Vコンテ＋動画30%完了\n立体：造形、美術30%完了", task: "", major: true },
      { m: "夏", ev: "夏休み", phase: "描き：作画・美術を進める\n立体：造形美術完了", task: "" },
      { m: "10", ev: "進捗報告会4", phase: "描き：作画・背景美術完了\n立体：撮影70%完了", task: "" },
      { m: "11", ev: "進捗報告会5", phase: "描き：彩色・編集・コンポジット完了\n立体：撮影・編集完了", task: "" },
      { m: "12", ev: "進捗報告会6", phase: "", task: "ポスプロ\n仕上げ、音響、音楽、完了" },
      { m: "1", ev: "最終発表", phase: "", task: "展示物を揃える／仮展示\n卒業判定", major: true },
      { m: "2", ev: "卒業制作展", phase: "", task: "全ての作業完了\n最終評価", major: true },
    ]},
    { name: "ゲーム・メディアアート・CG", color: "#D42027", rec: "推奨体験時間：5分 10分 20分", steps: [
      { m: "4", ev: "進捗報告会1", phase: "", task: "リサーチと仮企画" },
      { m: "5", ev: "進捗報告会2", phase: "コンセプト確定", task: "使用する技術の選定\n表現する意義を言語化" },
      { m: "6", ev: "進捗報告会3", phase: "技術確立", task: "体験テストを検証\n表現に必要な技術調査まとめ" },
      { m: "7", ev: "中間発表", phase: "試作", task: "アルゴリズムの実現\n操作・センシング実現\n仮ビジュアルで体験", major: true },
      { m: "夏", ev: "夏休み", phase: "アセット制作進行", task: "モデリング・アニメーション\nプログラミングを進める" },
      { m: "10", ev: "進捗報告会4", phase: "アセット制作完了", task: "レベル制作完了\nルール実装開始" },
      { m: "11", ev: "進捗報告会5", phase: "ルール実装完了", task: "全て本番アセット使用\n体験会での検証" },
      { m: "12", ev: "進捗報告会6", phase: "完成と展示準備", task: "タイトルやUIなど実装\n体験版として遊べる\n自動的な運用可能にする" },
      { m: "1", ev: "最終発表", phase: "", task: "展示物を揃える／仮展示\n卒業判定", major: true },
      { m: "2", ev: "卒業制作展", phase: "", task: "全ての作業完了\n最終評価", major: true },
    ]},
    { name: "映画・PR・ドキュメンタリー", color: "#FF9800", rec: "推奨作品時間：15分 30分 45分", steps: [
      { m: "4", ev: "進捗報告会1", phase: "", task: "リサーチと仮企画" },
      { m: "5", ev: "進捗報告会2", phase: "プリプロ1", task: "シナリオ初稿\nキャスト準備\n各部署の役割分担" },
      { m: "6", ev: "進捗報告会3", phase: "プリプロ2", task: "シナリオ準備稿\n仮スケジュール・仮香盤表\n機材準備及び確認" },
      { m: "7", ev: "中間発表", phase: "プリプロ3", task: "シナリオ決定稿・総合スケジュール香盤表・絵コンテ・キャスト決定", major: true },
      { m: "夏", ev: "夏休み", phase: "撮影", task: "クランクイン\n各自、撮影を進行する" },
      { m: "10", ev: "進捗報告会4", phase: "撮影完了", task: "動画素材の確認\n再撮影及び追加撮影の有無確認\n機材返却・オールラッシュ準備" },
      { m: "11", ev: "進捗報告会5", phase: "ポスプロ・編集", task: "オールラッシュ試写・仮編集\n本編集・エンドロール作業\nピクチャーロック" },
      { m: "12", ev: "進捗報告会6", phase: "ポスプロ・仕上げ", task: "グレーディング作業\n整音、音響効果、音楽\nシネマでの総合チェック" },
      { m: "1", ev: "最終発表", phase: "", task: "展示物を揃える／仮展示\n卒業判定", major: true },
      { m: "2", ev: "卒業制作展", phase: "", task: "全ての作業完了\n最終評価", major: true },
    ]},
    { name: "インスタレーション・写真", color: "#607D8B", rec: "推奨体験時間：3分 5分 10分", steps: [
      { m: "4", ev: "進捗報告会1", phase: "", task: "リサーチと仮企画" },
      { m: "5", ev: "進捗報告会2", phase: "コンセプト確定", task: "研究目的を明確にする\n先行事例・表現\n技術リサーチ・研究計画" },
      { m: "6", ev: "進捗報告会3", phase: "アイデア具現化", task: "世界観構築（表現手法）\n体験のデザイン（技術検討）" },
      { m: "7", ev: "中間発表", phase: "試作1", task: "展示と体験シミュレーション\nCG・スケッチ・仮ビジュアル\nスケジュール調整", major: true },
      { m: "夏", ev: "夏休み", phase: "制作", task: "CG/写真/実写/プログラム等\n展示備品の制作準備" },
      { m: "10", ev: "進捗報告会4", phase: "試作2", task: "ビジュアル世界観完成\n体験フロー完成" },
      { m: "11", ev: "進捗報告会5", phase: "展示テスト", task: "モックアップの制作テスト\n実寸での体験テスト" },
      { m: "12", ev: "進捗報告会6", phase: "完成と展示準備", task: "最終展示シミュレーション\n設置・運営\n展示プロモーション作成" },
      { m: "1", ev: "最終発表", phase: "", task: "展示物を揃える／仮展示\n卒業判定", major: true },
      { m: "2", ev: "卒業制作展", phase: "", task: "全ての作業完了\n最終評価", major: true },
    ]},
  ];

  return (
    <div>
      <SectionLead text="領域ごとの制作ガイドライン。毎月クリアすることを目標とし、進捗が評価に影響します。" />
      <Callout type="emphasis">
        自分の領域のガイドラインを確認し、各進捗報告会までに該当する成果物を準備してください。
      </Callout>
      <div style={{ display: "grid", gap: 10, marginTop: 8 }}>
        {areas.map((area, i) => {
          const isOpen = openArea === i;
          return (
            <div key={i} style={{ border: "1px solid #e5e5e5", borderRadius: 8, overflow: "hidden", borderLeft: `4px solid ${area.color}` }}>
              <button onClick={() => toggle(i)} style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 16px", background: isOpen ? "#f9f9f9" : "#fff",
                border: "none", cursor: "pointer", textAlign: "left",
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a1a" }}>{area.name}</div>
                  <div style={{ fontSize: 12, color: area.color, marginTop: 2 }}>{area.rec}</div>
                </div>
                <span style={{ fontSize: 11, color: "#aaa", transition: "0.2s", display: "inline-block", transform: isOpen ? "rotate(180deg)" : "none" }}>▼</span>
              </button>
              {isOpen && (
                <div style={{ padding: "0 16px 16px" }}>
                  <div style={{ display: "grid", gap: 0 }}>
                    {area.steps.map((s, j) => (
                      <div key={j} style={{
                        display: "grid", gridTemplateColumns: "44px 1fr", gap: 0,
                        borderBottom: j < area.steps.length - 1 ? "1px solid #f0f0f0" : "none",
                      }}>
                        {/* Month circle */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 12, paddingBottom: 12 }}>
                          <div style={{
                            width: 32, height: 32, borderRadius: "50%",
                            background: s.major ? area.color : "#e8e8e8",
                            color: s.major ? "#fff" : "#555",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 12, fontWeight: 700,
                          }}>{s.m}</div>
                        </div>
                        {/* Content */}
                        <div style={{ padding: "10px 0 10px 10px" }}>
                          <div style={{ fontSize: 12, fontWeight: 600, color: s.major ? area.color : "#888" }}>{s.ev}</div>
                          {s.phase && <div style={{ fontSize: 13, fontWeight: 600, color: "#333", marginTop: 3, whiteSpace: "pre-line" }}>{s.phase}</div>}
                          {s.task && <div style={{ fontSize: 13, color: "#555", marginTop: 2, whiteSpace: "pre-line", lineHeight: 1.7 }}>{s.task}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ScheduleSection({ onNavigate }) {
  const [openItems, setOpenItems] = useState({});
  const toggle = (key) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));

  const thS = { padding: "8px 10px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "#999", letterSpacing: 0.5, borderBottom: "2px solid #ddd", background: "#fafafa" };
  const tdS = { padding: "8px 10px", fontSize: 13, borderBottom: "1px solid #eee", verticalAlign: "top" };

  const VenueTable = ({ venues }) => (
    <div style={{ overflowX: "auto", marginTop: 10 }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr>
          <th style={{ ...thS, width: 56 }}>会場</th>
          <th style={{ ...thS, width: 150 }}>日時</th>
          <th style={thS}>場所</th>
          <th style={thS}>教員</th>
        </tr></thead>
        <tbody>{venues.map((v, i) => (
          <tr key={i}>
            <td style={{ ...tdS, fontWeight: 600 }}>{v.v}</td>
            <td style={{ ...tdS, fontSize: 12, whiteSpace: "nowrap" }}>{v.dt}</td>
            <td style={tdS}>{v.rm}</td>
            <td style={{ ...tdS, fontSize: 12 }}>{v.fc}</td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  );

  const timeline = [
    { type: "report", key: "pr1", label: "進捗報告会①", timing: "前期授業2週目・4月", st: "", venues: [
      { v: "1", dt: "4/21(火) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "4/21(火) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "4/23(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "4/23(木) 14:00-16:50", rm: "O室", fc: "稲葉・天山" },
    ]},
    { type: "report", key: "pr2", label: "進捗報告会②", timing: "前期授業6週目・5月", st: "案", venues: [
      { v: "1", dt: "5/26(火) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "5/26(火) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "5/28(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "5/28(木) 14:00-16:50", rm: "O室", fc: "稲葉・天山" },
    ]},
    { type: "report", key: "pr3", label: "進捗報告会③", timing: "前期授業10週目・6月", st: "案", venues: [
      { v: "1", dt: "6/23(火) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "6/23(火) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "6/25(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "6/25(木) 14:00-16:50", rm: "O室", fc: "稲葉・天山" },
    ]},
    { type: "event", key: "interim", label: "中間発表", timing: "前期補講期間・7月", st: "確定", d: "7/27(月)〜7/28(火) 10:00-18:00", major: true, link: "interim" },
    { type: "report", key: "pr4", label: "進捗報告会④", timing: "後期授業5週目・10月", st: "案", venues: [
      { v: "1", dt: "10/29(木) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "10/28(水) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "10/29(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "10/29(木) 10:20-13:10", rm: "O室", fc: "稲葉・天山" },
    ]},
    { type: "report", key: "pr5", label: "進捗報告会⑤", timing: "後期授業9週目・11月", st: "案", venues: [
      { v: "1", dt: "11/26(木) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "11/25(水) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "11/26(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "11/26(木) 10:20-13:10", rm: "O室", fc: "稲葉・天山" },
    ]},
    { type: "report", key: "pr6", label: "進捗報告会⑥", timing: "後期授業12週目・12月", st: "案", venues: [
      { v: "1", dt: "12/17(木) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "12/16(水) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "12/17(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "12/17(木) 10:20-13:10", rm: "O室", fc: "稲葉・天山" },
    ]},
    { type: "event", key: "setup", label: "卒展設営期間 [仮]", timing: "1月", st: "仮", d: "2027/1/15(金)〜1/25(月)　約11日間" },
    { type: "event", key: "finalP", label: "最終発表 [仮]", timing: "1月", st: "仮", d: "2027/1/26(火)〜1/28(木) 10:00-18:00", major: true, link: "final" },
    { type: "event", key: "adjust", label: "卒展最終調整期間 [仮]", timing: "1〜2月", st: "仮", d: "2027/1/29(金)〜2/2(火)" },
    { type: "event", key: "exh", label: "内覧日・卒展 [仮]", timing: "2月", st: "仮", d: "2027/2/5(金)〜2/11(木)", major: true },
  ];

  const StatusBadge = ({ s }) => {
    if (!s) return null;
    const c = s === "確定" ? { bg: "#E8F5E9", fg: "#2E7D32" } : s.includes("案") ? { bg: "#FFF3E0", fg: "#E65100" } : s === "仮" ? { bg: "#EDE7F6", fg: "#5E35B1" } : { bg: "#F3E5F5", fg: "#7B1FA2" };
    return <span style={{ padding: "2px 8px", borderRadius: 3, fontSize: 11, fontWeight: 600, background: c.bg, color: c.fg }}>{s}</span>;
  };

  return (
    <div>
      <SectionLead text="4月のガイダンスから2月の卒展まで、時系列順に全イベントを掲載。「案」は未確定、「仮」は昨年度準拠の日程です。" />

      <ContentBlock title="年間概要">
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr>
              <th style={{ ...thS, width: 50 }}>月</th>
              <th style={{ ...thS, width: 70 }}>期</th>
              <th style={thS}>イベント</th>
              <th style={{ ...thS, width: 80 }}>状態</th>
            </tr></thead>
            <tbody>
              {[
                { m: "4", p: "前期", ev: "ガイダンス／進捗報告会①", s: "確定", major: true },
                { m: "5", p: "", ev: "進捗報告会②", s: "案" },
                { m: "6", p: "", ev: "進捗報告会③", s: "案" },
                { m: "7", p: "", ev: "中間発表", s: "確定", major: true },
                { m: "10", p: "後期", ev: "進捗報告会④", s: "案" },
                { m: "11", p: "", ev: "進捗報告会⑤", s: "案" },
                { m: "12", p: "", ev: "進捗報告会⑥", s: "案" },
                { m: "1", p: "卒展準備", ev: "設営／最終発表", s: "仮", major: true },
                { m: "2", p: "", ev: "卒展／撤収", s: "仮", major: true },
              ].map((r, i) => (
                <tr key={i} style={{ background: r.major ? "#FDE8E8" : "transparent" }}>
                  <td style={{ ...tdS, fontWeight: 700, fontSize: 15 }}>{r.m}</td>
                  <td style={{ ...tdS, fontSize: 11, fontWeight: 600, color: r.p ? "#D42027" : "transparent" }}>{r.p || "—"}</td>
                  <td style={{ ...tdS, fontWeight: r.major ? 600 : 400 }}>{r.ev}</td>
                  <td style={tdS}><StatusBadge s={r.s} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentBlock>

      <ContentBlock title="詳細スケジュール">
        <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>進捗報告会：発表4分＋質疑4分（変更の可能性あり）。全回参加が単位取得条件です。</p>
        <div style={{ display: "grid", gap: 6 }}>
          {timeline.map((item) => {
            if (item.type === "report") {
              const isOpen = openItems[item.key];
              return (
                <div key={item.key} style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
                  <button onClick={() => toggle(item.key)} style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "11px 14px", background: isOpen ? "#f9f9f9" : "#fff",
                    border: "none", cursor: "pointer", textAlign: "left",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                      <span style={{ fontWeight: 700, fontSize: 14 }}>{item.label}</span>
                      <StatusBadge s={item.st} />
                      <span style={{ fontSize: 12, color: "#888" }}>{item.timing}</span>
                    </div>
                    <span style={{ fontSize: 11, color: "#aaa", transition: "0.2s", display: "inline-block", transform: isOpen ? "rotate(180deg)" : "none" }}>▼</span>
                  </button>
                  {isOpen && <div style={{ padding: "0 14px 14px" }}><VenueTable venues={item.venues} /></div>}
                </div>
              );
            } else {
              return (
                <div key={item.key} style={{
                  padding: "12px 14px", borderRadius: 6, border: "1px solid #e5e5e5",
                  background: item.major ? "#FDE8E8" : "#f8f8f8",
                  borderLeft: item.major ? "4px solid #D42027" : "4px solid #ddd",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    {item.link ? (
                      <span onClick={() => onNavigate(item.link)} style={{ fontWeight: 700, fontSize: 14, color: "#D42027", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }}>{item.label} →</span>
                    ) : (
                      <span style={{ fontWeight: 700, fontSize: 14 }}>{item.label}</span>
                    )}
                    <StatusBadge s={item.st} />
                    <span style={{ fontSize: 12, color: "#888" }}>{item.timing}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "#555", marginTop: 4 }}>{item.d}</div>
                </div>
              );
            }
          })}
        </div>
      </ContentBlock>
    </div>
  );
}

function InterimSection() {
  return (
    <div>
      <SectionLead text="前期の総括。プレゼンを元に研究の進捗を評価・判断する場。" />

      <div style={{ background: "#FDE8E8", borderRadius: 8, padding: "16px 20px", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 12, color: "#D42027", fontWeight: 600 }}>日程</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#D42027", marginTop: 2 }}>7/27(月)〜7/28(火)</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 12, color: "#888" }}>10:00〜18:00</div>
          <div style={{ fontSize: 12, color: "#888" }}>前期補講期間</div>
        </div>
      </div>
      <ContentBlock title="概要">
        <p>これまでの卒制の進捗と今後を総括し、まとめて発表する場です。スライドやレジュメは、発表を初めて聞く人にも伝わるように、前期の制作プロセスを端的にまとめ、今後の完成までの計画が伝わる内容にしましょう。</p>
      </ContentBlock>
      <ContentBlock title="提出物">
        <div style={{ fontSize: 14 }}>
          <p><strong>1. レジュメ</strong>（全員提出。学科指定のフォーマット。教員に印刷して配布されます）</p>
          <p><strong>2. 発表スライド</strong>（全員提出。チームの場合も個別に提出）</p>
          <p style={{ marginTop: 8, color: "#999" }}>フォーマット・締切は確定次第掲載</p>
        </div>
      </ContentBlock>
    </div>
  );
}

function FinalSection() {
  return (
    <div>
      <SectionLead text="4年間の集大成。3日間にわたる展示評価とプレゼン評価、および複数の提出物があります。" />

      <div style={{ background: "#FDE8E8", borderRadius: 8, padding: "16px 20px", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 12, color: "#D42027", fontWeight: 600 }}>日程 [仮]</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#D42027", marginTop: 2 }}>2027/1/26(火)〜1/28(木)</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 12, color: "#888" }}>10:00〜18:00 × 3日間</div>
          <div style={{ fontSize: 12, color: "#888" }}>後期集中講義期間</div>
        </div>
      </div>

      <Callout type="emphasis">
        4年生全員が3日間すべてに参加必須です。9:50までにシネマに集合、10:00より出席確認。
      </Callout>

      {/* 3-day schedule */}
      <ContentBlock title="最終発表 1日の流れ [仮]">
        <p style={{ fontSize: 13, color: "#888", marginBottom: 16 }}>3日間とも同じ構成で実施。全日程に参加必須です。</p>
        <div style={{ border: "1px solid #e5e5e5", borderRadius: 8, overflow: "hidden" }}>
          {/* AM */}
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #e5e5e5" }}>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>10:00〜12:00</div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>展示評価</div>
            <div style={{ fontSize: 13, color: "#555", marginTop: 6, lineHeight: 1.7 }}>
              展示の前で来場者に説明。教員は当日発表の学生作品の展示評価を行う。
            </div>
          </div>
          {/* PM */}
          <div style={{ padding: "14px 16px" }}>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>13:00〜18:00</div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>プレゼン評価</div>
            <div style={{ fontSize: 13, color: "#555", marginTop: 6, lineHeight: 1.7 }}>
              サクラダシネマ室にて。教員は展示をふまえて発表を聞き質疑・評価。学生同士でポータル等に感想を投稿。
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
              <div style={{ flex: 1, fontSize: 12, padding: "8px 10px", background: "#f8f8f8", borderRadius: 6 }}>
                <span style={{ fontWeight: 600 }}>個人：</span>発表7分＋質疑7分＋入替1分
              </div>
              <div style={{ flex: 1, fontSize: 12, padding: "8px 10px", background: "#f8f8f8", borderRadius: 6 }}>
                <span style={{ fontWeight: 600 }}>グループ：</span>発表10分＋質疑7分＋入替3分
              </div>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Submissions */}
      <ContentBlock title="提出物一覧（予定）">
        <div style={{ display: "grid", gap: 12 }}>
          {[
            { label: "最終プレゼンスライド", desc: "PowerPointまたはPDF形式" },
            { label: "プレゼン動画", desc: "任意。ダイジェスト版など" },
            { label: "卒制最終データ", desc: "完パケ映像、アプリなど" },
            { label: "WEB図録情報", desc: "同意書＋作品情報" },
            { label: "レジュメ", desc: "所定フォーマットにて" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 12, padding: "10px 0", borderBottom: "1px solid #eee" }}>
              <span style={{
                fontSize: 11, fontWeight: 600, color: "#D42027",
                minWidth: 20, textAlign: "right",
              }}>{i + 1}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>
    </div>
  );
}

function OrganizationSection() {
  return (
    <div>
      <SectionLead text="卒展を支える運営体制。大学委員と学科委員の二層構造。" />
      <ContentBlock title="卒展 大学委員">
        <p style={{ marginBottom: 12 }}>大学の事務局との連携をするためのメンバー</p>
        <div style={{ display: "grid", gap: 8 }}>
          {[
            { role: "連絡代表者", desc: "各種連絡の窓口。NETBUS・メール等" },
            { role: "アテンド係", desc: "会期中の駐車場係等確保、本部対応" },
            { role: "機器備品係", desc: "展示用備品集約、教学への申請窓口" },
            { role: "広報係", desc: "事務局広報課と連携し情報発信" },
            { role: "写真係", desc: "会期中の作品写真撮り・誘導対応" },
          ].map((r, i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "8px 12px", background: "#f8f8f8", borderRadius: 6 }}>
              <span style={{ fontWeight: 700, fontSize: 13, minWidth: 100, color: "#D42027" }}>{r.role}</span>
              <span style={{ fontSize: 13, color: "#555" }}>{r.desc}</span>
            </div>
          ))}
        </div>
      </ContentBlock>
      <ContentBlock title="卒展 映像学科委員">
        <p>学科内で卒展を企画運営するメンバー。研究室代表係＋有志メンバー（グラフィック、リール、イベント企画、アルバム係など）で構成。</p>
      </ContentBlock>
    </div>
  );
}

function ExhibitionSection() {
  return (
    <div>
      <SectionLead text="設営から卒展会期、撤収までの実務とスケジュール。" />
      <Callout type="info">
        卒展カレンダーの詳細は確定次第更新します。
      </Callout>
      <ContentBlock title="主要日程 [仮]">
        <p style={{ fontSize: 12, color: "#999", marginBottom: 12 }}>昨年度準拠の日程です。確定次第更新します。</p>
        <div style={{ fontSize: 14 }}>
          {[
            { date: "1/6(火)", event: "WEB図録同意書＆情報提出" },
            { date: "1/15(金)〜1/25(月)", event: "設営期間（約11日間）" },
            { date: "1/20(火)", event: "作品提出締切" },
            { date: "1/23(金)", event: "WEB完成締切" },
            { date: "1/26(火)〜1/28(木)", event: "最終発表" },
            { date: "1/29(金)〜2/2(火)", event: "展示調整期間" },
            { date: "2/4(水)", event: "学科長チェック" },
            { date: "2/5(木)", event: "学部長チェック" },
            { date: "2/6(金)", event: "卒展内覧日" },
            { date: "2/6(金)〜2/12(木)", event: "卒展期間" },
            { date: "2/13(金)〜", event: "撤収" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 16, padding: "8px 0", borderBottom: "1px solid #f0f0f0" }}>
              <span style={{ fontWeight: 600, minWidth: 120, color: "#333", fontSize: 13 }}>{item.date}</span>
              <span style={{ color: "#555" }}>{item.event}</span>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock title="展示期間中の学生の動き">
        <div style={{ display: "grid", gap: 10 }}>
          {[
            { icon: "📋", text: "立ち上げ方法のマニュアルを作成し、部屋内で共有する" },
            { icon: "🗣", text: "積極的に作品の解説をする（同室の他者の作品も解説できるようにしておく）" },
            { icon: "👔", text: "ドレスコード：黒い服＋赤のキーポイント" },
            { icon: "🔢", text: "受付で来場者の人数をカウントする。担当が終わったらTeamsのチャットで人数や気になった事などを次の担当者に共有する" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 12px", background: "#f8f8f8", borderRadius: 6 }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
              <span style={{ fontSize: 14, color: "#333", lineHeight: 1.7 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </ContentBlock>
    </div>
  );
}

/* ── Shared Components ── */

function SectionLead({ text }) {
  return <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, marginBottom: 20, borderLeft: "3px solid #ddd", paddingLeft: 14 }}>{text}</p>;
}

function ContentBlock({ title, children }) {
  return (
    <div style={{ marginTop: 36, marginBottom: 28 }}>
      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: "#1a1a1a" }}>{title}</h3>
      <div style={{ fontSize: 14, lineHeight: 1.9, color: "#444" }}>{children}</div>
    </div>
  );
}

function Callout({ type, children }) {
  const styles = {
    info: { bg: "#EBF5FB", border: "#2196F3", icon: "ℹ️" },
    warning: { bg: "#FFF8E1", border: "#FF9800", icon: "⚠️" },
    emphasis: { bg: "#FDE8E8", border: "#D42027", icon: "🔥" },
  };
  const s = styles[type] || styles.info;
  return (
    <div style={{
      background: s.bg, borderLeft: `4px solid ${s.border}`,
      padding: "14px 18px", borderRadius: "0 6px 6px 0",
      marginBottom: 24, fontSize: 14, lineHeight: 1.8, color: "#333",
    }}>
      <span style={{ marginRight: 8 }}>{s.icon}</span>{children}
    </div>
  );
}

/* ── Main App ── */

const SECTION_COMPONENTS = {
  goals: GoalsSection,
  process: ProcessSection,
  guidelines: GuidelinesSection,
  schedule: ScheduleSection,
  interim: InterimSection,
  final: FinalSection,
  organization: OrganizationSection,
  exhibition: ExhibitionSection,
};

function MenuItems({ activeSection, onNav }) {
  return (
    <>
      <div style={{ padding: "0 16px 12px", fontSize: 10, fontWeight: 700, color: "#bbb", letterSpacing: 2, textTransform: "uppercase" }}>
        Sections
      </div>
      {SECTIONS.map((s) => {
        const isActive = s.id === activeSection;
        return (
          <button
            key={s.id}
            onClick={() => onNav(s.id)}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              width: "100%", padding: "10px 16px",
              background: isActive ? "#FDE8E8" : "transparent",
              border: "none", cursor: "pointer", textAlign: "left",
              borderRight: isActive ? "3px solid #D42027" : "3px solid transparent",
              transition: "all 0.15s ease",
            }}
          >
            <span style={{
              fontSize: 11, fontWeight: 600,
              color: isActive ? "#D42027" : "#ccc",
              minWidth: 22,
            }}>{s.num}</span>
            <span style={{
              fontSize: 13, fontWeight: isActive ? 600 : 400,
              color: isActive ? "#D42027" : "#555",
            }}>{s.title}</span>
          </button>
        );
      })}
      <div style={{ padding: "24px 16px 8px", fontSize: 11, color: "#ccc" }}>
        ※ 内容は随時更新されます
      </div>
    </>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("goals");
  const [menuOpen, setMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    check();
    if (window.innerWidth < 768) setMenuOpen(false);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleNav = (id) => {
    setActiveSection(id);
    if (isMobile) setMenuOpen(false);
    if (contentRef.current) contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ActiveComponent = SECTION_COMPONENTS[activeSection];
  const activeData = SECTIONS.find(s => s.id === activeSection);

  return (
    <div style={{
      fontFamily: "'Noto Sans JP', sans-serif",
      height: "100vh", display: "flex", flexDirection: "column",
      background: "#fafafa", color: "#1a1a1a",
    }}>
      {/* Header */}
      <header style={{
        background: "#fff", borderBottom: "1px solid #e5e5e5",
        padding: "0 24px", height: 56, display: "flex", alignItems: "center",
        justifyContent: "space-between", flexShrink: 0,
      }}>
        <div onClick={() => setMenuOpen(!menuOpen)} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
          <div style={{
            width: 32, height: 32, background: "#D42027", borderRadius: 4,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 900, fontSize: 14,
          }}>卒</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: 0.5 }}>卒業制作のまとめ</div>
            <div style={{ fontSize: 10, color: "#999", letterSpacing: 2, marginTop: -1 }}>映像学科 2025</div>
          </div>
        </div>
        {/* Menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none", border: "1px solid #e0e0e0",
            borderRadius: 6, fontSize: 13, cursor: "pointer",
            padding: "5px 12px", display: "flex", alignItems: "center", gap: 6,
            color: "#555", transition: "all 0.15s",
          }}
        >
          <span style={{ fontSize: 16, lineHeight: 1 }}>{menuOpen && !isMobile ? "✕" : "☰"}</span>
          <span>{menuOpen && !isMobile ? "メニューを閉じる" : "メニュー"}</span>
        </button>
      </header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden", position: "relative" }}>
        {/* Desktop Sidebar */}
        {!isMobile && (
          <nav style={{
            width: menuOpen ? 260 : 0, minWidth: menuOpen ? 260 : 0,
            background: "#fff",
            borderRight: menuOpen ? "1px solid #e5e5e5" : "none",
            overflowY: "auto", overflowX: "hidden",
            padding: "16px 0",
            flexShrink: 0, transition: "width 0.2s ease, min-width 0.2s ease",
          }}>
            <div style={{ width: 260, opacity: menuOpen ? 1 : 0, transition: "opacity 0.15s ease" }}>
              <MenuItems activeSection={activeSection} onNav={handleNav} />
            </div>
          </nav>
        )}

        {/* Mobile Left Drawer */}
        {isMobile && (
          <>
            {/* Backdrop */}
            <div onClick={() => setMenuOpen(false)} style={{
              position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 199, background: "rgba(0,0,0,0.4)",
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? "auto" : "none",
              transition: "opacity 0.25s ease",
            }} />
            {/* Drawer */}
            <nav style={{
              position: "fixed", top: 0, left: 0, bottom: 0,
              zIndex: 200, width: 280, background: "#fff",
              transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.25s ease",
              boxShadow: menuOpen ? "4px 0 24px rgba(0,0,0,0.12)" : "none",
              overflowY: "auto",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "16px 16px 12px", borderBottom: "1px solid #eee", flexShrink: 0,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 28, height: 28, background: "#D42027", borderRadius: 4,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 900, fontSize: 12,
                  }}>卒</div>
                  <span style={{ fontWeight: 700, fontSize: 13 }}>メニュー</span>
                </div>
                <button onClick={() => setMenuOpen(false)} style={{
                  background: "#f5f5f5", border: "none", borderRadius: 6,
                  width: 32, height: 32, fontSize: 16, cursor: "pointer", color: "#666",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>✕</button>
              </div>
              <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
                <MenuItems activeSection={activeSection} onNav={handleNav} />
              </div>
            </nav>
          </>
        )}

        {/* Main Content */}
        <main ref={contentRef} style={{
          flex: 1, overflowY: "auto", padding: "32px 40px 80px",
        }}>
          <div style={{ maxWidth: 720 }}>
            {/* Prev / Next nav */}
            {(() => {
              const idx = SECTIONS.findIndex(s => s.id === activeSection);
              const prev = idx > 0 ? SECTIONS[idx - 1] : null;
              const next = idx < SECTIONS.length - 1 ? SECTIONS[idx + 1] : null;
              return (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, fontSize: 12 }}>
                  {prev ? (
                    <button onClick={() => handleNav(prev.id)} style={{
                      background: "none", border: "none", cursor: "pointer",
                      color: "#888", display: "flex", alignItems: "center", gap: 4, padding: 0,
                    }}>
                      <span>←</span>
                      <span>{prev.num} {prev.title}</span>
                    </button>
                  ) : <span />}
                  {next ? (
                    <button onClick={() => handleNav(next.id)} style={{
                      background: "none", border: "none", cursor: "pointer",
                      color: "#888", display: "flex", alignItems: "center", gap: 4, padding: 0,
                    }}>
                      <span>{next.num} {next.title}</span>
                      <span>→</span>
                    </button>
                  ) : <span />}
                </div>
              );
            })()}

            {/* Section header */}
            <div style={{ marginBottom: 32 }}>
              <div style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: 12, fontWeight: 600, color: "#D42027",
                letterSpacing: 2, marginBottom: 6,
              }}>
                SECTION {activeData.num}
              </div>
              <h2 style={{
                fontSize: 26, fontWeight: 900, letterSpacing: 1,
                lineHeight: 1.4,
              }}>
                {activeData.title}
              </h2>
              <div style={{
                width: 40, height: 3, background: "#D42027",
                borderRadius: 2, marginTop: 12,
              }} />
            </div>

            {/* Section content */}
            <ActiveComponent onNavigate={handleNav} />

            {/* Bottom prev/next */}
            {(() => {
              const idx = SECTIONS.findIndex(s => s.id === activeSection);
              const prev = idx > 0 ? SECTIONS[idx - 1] : null;
              const next = idx < SECTIONS.length - 1 ? SECTIONS[idx + 1] : null;
              const btnStyle = {
                flex: 1, padding: "14px 16px", background: "#fff",
                border: "1px solid #e5e5e5", borderRadius: 8, cursor: "pointer",
                transition: "background 0.15s",
              };
              return (
                <div style={{ display: "flex", gap: 12, marginTop: 48, paddingTop: 24, borderTop: "1px solid #eee" }}>
                  {prev ? (
                    <button onClick={() => handleNav(prev.id)} style={{ ...btnStyle, textAlign: "left" }}>
                      <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>← 前のセクション</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{prev.num} {prev.title}</div>
                    </button>
                  ) : <div style={{ flex: 1 }} />}
                  {next ? (
                    <button onClick={() => handleNav(next.id)} style={{ ...btnStyle, textAlign: "right" }}>
                      <div style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>次のセクション →</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#333" }}>{next.num} {next.title}</div>
                    </button>
                  ) : <div style={{ flex: 1 }} />}
                </div>
              );
            })()}
          </div>
        </main>
      </div>
    </div>
  );
}