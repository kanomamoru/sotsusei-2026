import ContentBlock from "../components/ContentBlock";

export default function InterimSection() {
  return (
    <div>
      <div style={{ background: "#f0f0f0", borderRadius: 8, padding: "16px 20px", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 12, color: "#D42027", fontWeight: 600 }}>日程</div>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#D42027", marginTop: 2 }}>7/27(月)〜7/28(火)</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 12, color: "#888" }}>10:00〜18:00</div>
        </div>
      </div>
      <ContentBlock num={"1"} title="発表内容と注意事項">
        <p>中間発表は、これまでの進捗と今後の制作計画を総括して伝える場です。プレゼンをもとに、教員が研究の進行状況や方向性を評価・判断します。</p>
        <p style={{ marginTop: 8 }}>スライドやレジュメは、発表を初めて聞く人にも伝わるように、前期の制作プロセスを端的にまとめ、今後の完成までの計画が伝わる内容にしましょう。</p>
        <p style={{ marginTop: 8 }}>全員がスライドを用いた発表とします。発表時間が限られているため、長尺の映像を再生する場合はダイジェスト版を用意してください。</p>
        <p style={{ marginTop: 8, fontSize: 12, color: "#999" }}>※発表順は当日にお知らせする予定です。</p>
      </ContentBlock>
      <ContentBlock num={"2"} title="提出物">
        <div style={{ fontSize: 14 }}>
          <p><strong>1. レジュメ</strong></p>
          <p style={{ marginTop: 4, fontSize: 13, color: "#555" }}>全員提出。チーム制作の場合、共通の内容に加えて自分の目的や役割等も記入してください。教員に確認してもらってから提出してください。</p>
          <p style={{ marginTop: 8, fontSize: 13, color: "#555" }}>下記のPDFをダウンロードして、Adobe Acrobatで入力してください（ファイル名に注意）。</p>
          <p style={{ marginTop: 4 }}><a href="/sotsusei-2026/data/学籍番号_氏名_レジュメ.pdf" style={{ color: "#D42027", fontSize: 13 }}>学籍番号_氏名.pdf をダウンロード →</a></p>
          <div style={{ marginTop: 8, padding: "10px 12px", background: "#f8f8f8", borderRadius: 6, fontSize: 12, lineHeight: 1.8 }}>
            <p><strong>提出先</strong></p>
            <p style={{ color: "#555" }}>shareサーバー内「eizo2023」→「卒業制作」→「中間プレゼンテーション_レジュメ」フォルダ</p>
            <p style={{ color: "#555", marginTop: 4 }}>ファイル名：学籍番号_氏名（フルネーム）_レジュメ</p>
            <p style={{ color: "#999", marginTop: 2 }}>（例：202312345_山形太郎_レジュメ）</p>
          </div>
          <p style={{ marginTop: 4, fontSize: 12, color: "#D42027" }}>締切：7/24（金）12:00</p>

          <p style={{ marginTop: 20 }}><strong>2. 発表スライド</strong></p>
          <p style={{ marginTop: 4, fontSize: 13, color: "#555" }}>全員提出。チームの場合も個別に提出。最低限下記の情報を含んでください。文字だけでなくビジュアルや映像を積極的に用いてわかりやすくまとめてください。</p>
          <div style={{ display: "grid", gap: 0, marginTop: 8 }}>
            {["目的や仮説、コンセプト", "領域別ガイドラインを参考とした成果物", "今後の計画", "展示イメージ"].map((t, i) => (
              <div key={i} style={{ padding: "6px 0", borderBottom: "1px solid #eee", fontSize: 13, color: "#555" }}><span style={{ color: "#D42027", marginRight: 8 }}>✓</span>{t}</div>
            ))}
          </div>
          <div style={{ marginTop: 8, padding: "10px 12px", background: "#f8f8f8", borderRadius: 6, fontSize: 12, lineHeight: 1.8 }}>
            <p><strong>提出先</strong></p>
            <p style={{ color: "#555" }}>shareサーバー内「eizo2023」→「卒業制作」→「中間プレゼンテーション_発表スライド」</p>
            <p style={{ color: "#555", marginTop: 4 }}>ファイル形式：ノートPCで再生できるもの（ppt / pdf / Keynote / breakfastなど）</p>
            <p style={{ color: "#555", marginTop: 4 }}>ファイル名：学籍番号_氏名（フルネーム）_発表スライド</p>
            <p style={{ color: "#999", marginTop: 2 }}>（例：202312345_山形太郎_発表スライド）</p>
          </div>
          <p style={{ marginTop: 4, fontSize: 12, color: "#D42027" }}>締切：7/24（金）12:00</p>
        </div>
      </ContentBlock>
      <ContentBlock num={"3"} title="発表">
        <div style={{ display: "grid", gap: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <span style={{ fontWeight: 700, fontSize: 14, minWidth: 120 }}>個人制作</span>
            <span style={{ fontSize: 13, color: "#555" }}>発表 5分 ＋ 質疑応答 5分</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <span style={{ fontWeight: 700, fontSize: 14, minWidth: 120 }}>グループ制作</span>
            <span style={{ fontSize: 13, color: "#555" }}>発表 7分30秒 ＋ 質疑応答 6分30秒</span>
          </div>
        </div>
      </ContentBlock>
      <ContentBlock num={"4"} title="出席・連絡について">
        <p>中間発表は必須参加です。試験と同じ扱いとなりますので、両日とも遅刻しないよう早めに入室してください。</p>
        <p style={{ marginTop: 8 }}>やむを得ず当日一時退出などの事情がある場合は、必ず事前に映像準備室・副手までご連絡ください。</p>
      </ContentBlock>
    </div>
  );
}
