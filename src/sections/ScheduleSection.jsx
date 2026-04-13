import ContentBlock from "../components/ContentBlock";
import SectionLead from "../components/SectionLead";

export default function ScheduleSection({ onNavigate }) {
  const thS = { padding: "8px 6px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "#999", letterSpacing: 0.5, borderBottom: "2px solid #ddd", background: "#fafafa" };
  const tdS = { padding: "8px 6px", fontSize: 13, borderBottom: "1px solid #eee", verticalAlign: "top" };

  const timeline = [
    { key: "interim", label: "中間発表 7/27-7/28", d: "7/27(月)〜7/28(火) 10:00-18:00", major: true, link: "interim" },
    { key: "setup", label: "卒展設営期間 1/15-1/25 [仮]", d: "2027/1/15(金)〜1/25(月)　約11日間" },
    { key: "finalP", label: "最終発表 1/26-1/28 [仮]", d: "2027/1/26(火)〜1/28(木) 10:00-18:00", major: true, link: "final" },
    { key: "adjust", label: "卒展最終調整期間 1/29-2/2 [仮]", d: "2027/1/29(金)〜2/2(火)" },
    { key: "exh", label: "内覧日・卒展 2/5-2/11 [仮]", d: "2027/2/5(金)〜2/11(木)", major: true },
  ];


  return (
    <div>
      <SectionLead text="4月のガイダンスから2月の卒展まで、時系列順に全イベントを掲載。「案」は未確定、「仮」は昨年度準拠の日程です。" />

      <ContentBlock num={"1"} title="年間概要">
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead><tr>
              <th style={{ ...thS, width: 32 }}>月</th>
              <th style={thS}>イベント</th>
            </tr></thead>
            <tbody>
              {[
                { m: "4", ev: "ガイダンス／進捗報告会①", major: true },
                { m: "5", ev: "進捗報告会②" },
                { m: "6", ev: "進捗報告会③" },
                { m: "7", ev: "中間発表", major: true },
                { m: "10", ev: "進捗報告会④" },
                { m: "11", ev: "進捗報告会⑤" },
                { m: "12", ev: "進捗報告会⑥" },
                { m: "1", ev: "設営／最終発表", major: true },
                { m: "2", ev: "卒展／撤収", major: true },
              ].map((r, i) => (
                <tr key={i} style={{ background: r.major ? "#f0f0f0" : "transparent" }}>
                  <td style={{ ...tdS, fontWeight: 700, fontSize: 15 }}>{r.m}</td>
                  <td style={{ ...tdS, fontWeight: r.major ? 600 : 400 }}>{r.ev}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentBlock>

      <ContentBlock num={"2"} title="主要イベント">
        <div style={{ display: "grid", gap: 6 }}>
          {timeline.map((item) => (
            <div key={item.key} style={{
              padding: "12px 14px", borderRadius: 6, border: "1px solid #e5e5e5",
              background: item.major ? "#f0f0f0" : "#f8f8f8",
              borderLeft: "4px solid #ddd",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                {item.link ? (
                  <span onClick={() => onNavigate(item.link)} style={{ fontWeight: 700, fontSize: 14, color: "#D42027", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }}>{item.label} →</span>
                ) : (
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{item.label}</span>
                )}
              </div>
              <div style={{ fontSize: 13, color: "#555", marginTop: 4 }}>{item.d}</div>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock num={"3"} title="設営から撤収まで [仮]">
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
    </div>
  );
}
