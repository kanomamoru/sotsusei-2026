import { useState } from "react";
import ContentBlock from "../components/ContentBlock";

export default function ProgressReportSection() {
  const [openItems, setOpenItems] = useState({});
  const toggle = (key) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));

  const VenueTable = ({ venues }) => (
    <div style={{ display: "grid", gap: 8, marginTop: 10 }}>
      {venues.map((v, i) => (
        <div key={i} style={{ padding: "8px 12px", background: "#f8f8f8", borderRadius: 6, fontSize: 13, lineHeight: 1.7 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
            <span style={{ fontWeight: 700, minWidth: 40 }}>会場{v.v}</span>
            <span style={{ color: "#555" }}>{v.dt}</span>
          </div>
          <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{v.rm}　{v.fc}</div>
        </div>
      ))}
    </div>
  );

  const reports = [
    { key: "pr1", label: "進捗報告会① 4/21-4/23", venues: [
      { v: "1", dt: "4/21(火) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "4/21(火) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "4/23(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "4/23(木) 14:00-16:50", rm: "O室", fc: "稲葉・天山" },
    ]},
    { key: "pr2", label: "進捗報告会② 5/26-5/28", venues: [
      { v: "1", dt: "5/26(火) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "5/26(火) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "5/28(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "5/28(木) 14:00-16:50", rm: "O室", fc: "稲葉・天山" },
    ]},
    { key: "pr3", label: "進捗報告会③ 6/23-6/25", venues: [
      { v: "1", dt: "6/23(火) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "6/23(火) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "6/25(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "6/25(木) 14:00-16:50", rm: "O室", fc: "稲葉・天山" },
    ]},
    { key: "pr4", label: "進捗報告会④ 10/28-10/29", venues: [
      { v: "1", dt: "10/29(木) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "10/28(水) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "10/29(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "10/29(木) 10:20-13:10", rm: "O室", fc: "稲葉・天山" },
    ]},
    { key: "pr5", label: "進捗報告会⑤ 11/25-11/26", venues: [
      { v: "1", dt: "11/26(木) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "11/25(水) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "11/26(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "11/26(木) 10:20-13:10", rm: "O室", fc: "稲葉・天山" },
    ]},
    { key: "pr6", label: "進捗報告会⑥ 12/16-12/17", venues: [
      { v: "1", dt: "12/17(木) 10:20-13:10", rm: "CGルーム", fc: "鹿野・工藤・谷口" },
      { v: "2", dt: "12/16(水) 14:00-16:50", rm: "未定", fc: "屋代・大島" },
      { v: "3", dt: "12/17(木) 10:20-13:10", rm: "K室", fc: "早川・金林" },
      { v: "4", dt: "12/17(木) 10:20-13:10", rm: "O室", fc: "稲葉・天山" },
    ]},
  ];

  return (
    <div>
      <ContentBlock num={"1"} title="進捗報告会とは">
        <p>毎月、複数の研究室で集まり、1ヶ月の進捗を報告します。各領域のガイドラインに沿って評価します。やむを得ない理由で進捗報告会を欠席する場合は事前にプレゼンビデオを提出となります。</p>
        <div style={{ marginTop: 12, padding: "10px 14px", background: "#f0f0f0", borderRadius: 6, fontSize: 13 }}>
          進捗報告会は毎月必ず参加。評価対象となります。
        </div>
      </ContentBlock>

      <ContentBlock num={"2"} title="発表のルール">
        <div style={{ display: "grid", gap: 0 }}>
          {[
            "進捗内容を整理したスライドを使用して発表",
            "発表4分＋質疑4分（変更の可能性あり）",
            "スライドは進捗報告会の開始前にポータルにアップする",
            "どのルームで発表するかは指導教員の指示・相談の上確定",
            "全ての進捗報告会に参加することが単位取得条件",
          ].map((t, i) => (
            <div key={i} style={{ padding: "6px 0", borderBottom: "1px solid #eee", fontSize: 13, color: "#555" }}><span style={{ color: "#D42027", marginRight: 8 }}>✓</span>{t}</div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock num={"3"} title="欠席する場合">
        <p>インターンシップや体調不良など、やむを得ぬ理由で、どの会場にも参加が難しい場合は以下の手順で対応してください。</p>
        <div style={{ display: "grid", gap: 0, marginTop: 8 }}>
          {[
            "事前に指導教員に連絡・相談し了承を得る",
            "プレゼン動画（4分）を作成、Youtubeにアップする",
            "進捗報告会の前日に、YoutubeのURLを準備室に送る",
            "進捗報告会当日に、会場で再生",
          ].map((t, i) => (
            <div key={i} style={{ padding: "6px 0", borderBottom: "1px solid #eee", fontSize: 13, color: "#555" }}>{(i + 1)}. {t}</div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock num={"4"} title="進捗報告会の日程">
        <div style={{ display: "grid", gap: 6 }}>
          {reports.map((r) => {
            const isOpen = openItems[r.key];
            return (
              <div key={r.key} style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
                <button onClick={() => toggle(r.key)} style={{
                  width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "11px 14px", background: isOpen ? "#f9f9f9" : "#fff",
                  border: "none", cursor: "pointer", textAlign: "left",
                }}>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{r.label}</span>
                  <span style={{ fontSize: 11, color: "#aaa", transition: "0.2s", display: "inline-block", transform: isOpen ? "rotate(180deg)" : "none" }}>▼</span>
                </button>
                {isOpen && <div style={{ padding: "0 14px 14px" }}><VenueTable venues={r.venues} /></div>}
              </div>
            );
          })}
        </div>
      </ContentBlock>
    </div>
  );
}
