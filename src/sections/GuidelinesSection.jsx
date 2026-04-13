import { useState } from "react";
import Callout from "../components/Callout";
import SectionLead from "../components/SectionLead";

export default function GuidelinesSection() {
  const [openArea, setOpenArea] = useState(null);
  const toggle = (i) => setOpenArea(openArea === i ? null : i);

  const areas = [
    { name: "アニメーション・ストップモーション", color: "#D42027", rec: "推奨作品時間：2分 4分 6分", steps: [
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
    { name: "映画・PR・ドキュメンタリー", color: "#D42027", rec: "推奨作品時間：15分 30分 45分", steps: [
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
    { name: "インスタレーション・写真", color: "#D42027", rec: "推奨体験時間：3分 5分 10分", steps: [
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
            <div key={i} style={{ border: "1px solid #e5e5e5", borderRadius: 8, overflow: "hidden", borderLeft: "4px solid #ddd" }}>
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
                        display: "grid", gridTemplateColumns: "48px 1fr", gap: 0,
                        borderBottom: j < area.steps.length - 1 ? "1px solid #f0f0f0" : "none",
                      }}>
                        {/* Month circle */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 12, paddingBottom: 12 }}>
                          <div style={{
                            width: 36, height: 36, borderRadius: "50%",
                            background: s.major ? area.color : "#e8e8e8",
                            color: s.major ? "#fff" : "#555",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: 11, fontWeight: 700,
                          }}>{isNaN(s.m) ? s.m : s.m + "月"}</div>
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
