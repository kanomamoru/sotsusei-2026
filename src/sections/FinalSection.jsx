import ContentBlock from "../components/ContentBlock";
import Callout from "../components/Callout";

export default function FinalSection() {
  return (
    <div>
      <div style={{ background: "#f0f0f0", borderRadius: 8, padding: "16px 20px", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
      <ContentBlock num={"1"} title="最終発表 1日の流れ [仮]">
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
            <div style={{ display: "grid", gap: 6, marginTop: 10 }}>
              <div style={{ fontSize: 12, padding: "8px 10px", background: "#f8f8f8", borderRadius: 6 }}>
                <span style={{ fontWeight: 600 }}>個人：</span>発表7分＋質疑7分＋入替1分
              </div>
              <div style={{ fontSize: 12, padding: "8px 10px", background: "#f8f8f8", borderRadius: 6 }}>
                <span style={{ fontWeight: 600 }}>グループ：</span>発表10分＋質疑7分＋入替3分
              </div>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Submissions */}
      <ContentBlock num={"2"} title="提出物">
        <div style={{ fontSize: 14 }}>
          <p><strong>1. 最終プレゼンスライド</strong></p>
          <p style={{ marginTop: 4, fontSize: 13, color: "#555" }}>PowerPointまたはPDF形式のみ。</p>
          <p style={{ marginTop: 12 }}><strong>2. プレゼン動画</strong></p>
          <p style={{ marginTop: 4, fontSize: 13, color: "#555" }}>任意。ダイジェスト版などがあれば提出。</p>
          <p style={{ marginTop: 12 }}><strong>3. 卒制最終データ</strong></p>
          <p style={{ marginTop: 4, fontSize: 13, color: "#555" }}>完パケ映像、アプリなど、最終完成形が提出できる作品の場合。</p>
        </div>

        <div style={{ marginTop: 24 }}>
          <p><strong>提出方法</strong></p>
          <p style={{ marginTop: 4, fontSize: 13, color: "#555" }}>編集室のiMacを使用して以下のフォルダに保存してください。</p>
          <p style={{ marginTop: 4, fontSize: 12, color: "#999" }}>※基本的に1/20締切後はデータの差し替えなどの変更ができませんが、データの欠損などやむを得ない理由の場合は、指導教員と相談し許可が出た場合に、差し替えを許可します。</p>
          <div style={{ marginTop: 12, padding: "10px 12px", background: "#f8f8f8", borderRadius: 6, fontSize: 12, lineHeight: 1.8 }}>
            <p><strong>最終プレゼン資料</strong></p>
            <p style={{ color: "#555", wordBreak: "break-all" }}>\\192.168.150.170\share\eizo2022\●卒制最終データ_プレゼン資料提出(1月20日〆)\最終プレゼン資料\202252000_氏名フルネーム</p>
          </div>
          <div style={{ marginTop: 8, padding: "10px 12px", background: "#f8f8f8", borderRadius: 6, fontSize: 12, lineHeight: 1.8 }}>
            <p><strong>完成作品データ</strong></p>
            <p style={{ color: "#555", wordBreak: "break-all" }}>\\192.168.150.170\share\eizo2022\●卒制最終データ_プレゼン資料提出(1月20日〆)\作品データ\202252000_氏名フルネーム</p>
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <p><strong>音声チェック</strong></p>
          <p style={{ marginTop: 4, fontSize: 13, color: "#555" }}>プレゼン中に動画を使用する場合、必ずサクラダシネマでの音声チェックを行ってください。</p>
          <p style={{ marginTop: 4, fontSize: 13, color: "#555" }}>音声チェックは準備室対応時間（10:00〜18:00）に行えます。</p>
          <p style={{ marginTop: 4, fontSize: 12, color: "#999" }}>※プレゼン中、シネマの音声機器設定は変更できません。</p>
        </div>
      </ContentBlock>
      <ContentBlock num={"3"} title="発表時間">
        <div style={{ display: "grid", gap: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <span style={{ fontWeight: 700, fontSize: 14, minWidth: 120 }}>個人制作</span>
            <span style={{ fontSize: 13, color: "#555" }}>発表 7分 ＋ 質疑 7分 ＋ 入れ替え 1分</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, padding: "10px 0", borderBottom: "1px solid #eee" }}>
            <span style={{ fontWeight: 700, fontSize: 14, minWidth: 120 }}>グループ制作</span>
            <span style={{ fontSize: 13, color: "#555" }}>発表 10分 ＋ 質疑 7分 ＋ 入れ替え 3分</span>
          </div>
        </div>
      </ContentBlock>
      <ContentBlock num={"4"} title="出席・連絡について">
        <p>最終発表は必須参加です。三日間出席をとりますので、遅刻・欠席のないようご注意ください（試験と同様の扱いとなります）。</p>
        <p style={{ marginTop: 8 }}>やむを得ず当日一時退出などの事情がある場合は、必ず事前に映像準備室・副手までご連絡ください。</p>
      </ContentBlock>
    </div>
  );
}
