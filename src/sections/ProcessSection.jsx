import ContentBlock from "../components/ContentBlock";

export default function ProcessSection({ onNavigate }) {
  return (
    <div>
      <img src="/sotsusei-2026/images/evaluate.jpg" style={{ width: "100%", borderRadius: 8, marginBottom: 8 }} />
      <ContentBlock num={"1"} title="評価対象">
        <div style={{ display: "grid", gap: 0 }}>
          {[
            { name: "プロセス", desc: "提出物や出席、進捗共有会への参加" },
            { name: "作品", desc: "進捗共有会、12月末に評価。年内に作品完成が目標" },
            { name: "プレゼン", desc: "最終発表、1月末に評価" },
            { name: "展示", desc: "最終発表、1月末に評価" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 12, padding: "10px 0", borderBottom: "1px solid #eee" }}>
              <span style={{ fontWeight: 700, fontSize: 14, minWidth: 80 }}>{item.name}</span>
              <span style={{ fontSize: 13, color: "#555" }}>{item.desc}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#555", marginTop: 16, lineHeight: 1.8 }}>上記の四つを総合的に評価し、最終評価となります。作品を作るだけでなく、毎週の提出、毎月の発表も評価に含まれます。また展示は全員が対象です。作品を作るだけでなく社会に向けて学びの成果をアピールしてください。</p>
      </ContentBlock>

      <ContentBlock num={"2"} title="出席カウント">
        <div style={{ display: "grid", gap: 0 }}>
          {[
            { label: "毎週", desc: "進捗レポートを提出" },
            { label: "毎月", desc: "進捗報告会で共有" },
            { label: "期末", desc: "全員で発表" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 12, padding: "10px 0", borderBottom: "1px solid #eee" }}>
              <span style={{ fontWeight: 700, fontSize: 14, minWidth: 50 }}>{item.label}</span>
              <span style={{ fontSize: 13, color: "#555" }}>{item.desc}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#555", marginTop: 16, lineHeight: 1.8 }}>上記三つの提出・参加を必須条件とします。特に毎週の提出は制作のリズムを作る上で重要ですので、習慣化してください。</p>
      </ContentBlock>

      <ContentBlock num={"3"} title="進捗レポート(毎週提出)">
        <p>毎週、授業の前に提出。教員は提出を見ながら相談を進めます。</p>
        <p style={{ marginTop: 8 }}>進捗レポートでは一週間で取り組んだことを具体的に書いてください。リサーチ記録や作業のスクリーンショットなど画像も添付すると、自身の作業の振り返りにもなります。</p>
        <p style={{ marginTop: 8 }}>提出方法は映像学科ポータルの「卒業制作」内に参加し、所属する研究室フォルダに提出します。</p>
        <p style={{ marginTop: 12 }}><a href="https://tuad-eizo-class.com/portal/project.php?id=56965&type=project" style={{ color: "#D42027", fontSize: 14 }}>卒業制作2026 ポータルへ →</a></p>
      </ContentBlock>
    </div>
  );
}
