import ContentBlock from "../components/ContentBlock";
import SectionLead from "../components/SectionLead";

export default function OrganizationSection() {
  return (
    <div>
      <SectionLead text="卒展を支える運営体制。大学委員と学科委員の二層構造。" />
      <ContentBlock num={"1"} title="卒展 大学委員">
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
      <ContentBlock num={"2"} title="卒展 映像学科委員">
        <p>学科内で卒展を企画運営するメンバー。研究室代表係＋有志メンバー（グラフィック、リール、イベント企画、アルバム係など）で構成。</p>
      </ContentBlock>
      <ContentBlock num={"3"} title="展示期間中の学生の動き">
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
