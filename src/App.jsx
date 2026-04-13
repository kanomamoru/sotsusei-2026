import { useState, useEffect, useRef } from "react";
import GoalsSection from "./sections/GoalsSection";
import ProcessSection from "./sections/ProcessSection";
import GuidelinesSection from "./sections/GuidelinesSection";
import ScheduleSection from "./sections/ScheduleSection";
import ProgressReportSection from "./sections/ProgressReportSection";
import InterimSection from "./sections/InterimSection";
import ExhibitionDesignSection from "./sections/ExhibitionDesignSection";
import FinalSection from "./sections/FinalSection";
import OrganizationSection from "./sections/OrganizationSection";

const SECTIONS = [
  { id: "goals", num: "01", title: "卒業制作とは", status: "draft" },
  { id: "process", num: "02", title: "評価・出席カウント", status: "draft" },
  { id: "guidelines", num: "03", title: "領域別ガイドライン", status: "draft" },
  { id: "schedule", num: "04", title: "年間スケジュール", status: "draft" },
  { id: "progressReport", num: "05", title: "進捗報告会", status: "draft" },
  { id: "interim", num: "06", title: "中間発表", status: "draft" },
  { id: "exhibitionDesign", num: "07", title: "展示のデザイン", status: "draft" },
  { id: "final", num: "08", title: "最終発表", status: "draft" },
  { id: "organization", num: "09", title: "卒展の運営体制", status: "draft" },
];

const SECTION_COMPONENTS = {
  goals: GoalsSection,
  process: ProcessSection,
  guidelines: GuidelinesSection,
  schedule: ScheduleSection,
  progressReport: ProgressReportSection,
  interim: InterimSection,
  exhibitionDesign: ExhibitionDesignSection,
  final: FinalSection,
  organization: OrganizationSection,
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
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return SECTIONS.find(s => s.id === hash) ? hash : "goals";
  });
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

    const onHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (SECTIONS.find(s => s.id === hash)) setActiveSection(hash);
    };
    window.addEventListener("hashchange", onHash);

    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  const handleNav = (id) => {
    setActiveSection(id);
    window.location.hash = id;
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
            <div style={{ fontSize: 10, color: "#1a1a1a", letterSpacing: 2, marginTop: -1 }}>映像学科 2026 ／ 更新 2026.4.12</div>
          </div>
        </div>
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
            <div onClick={() => setMenuOpen(false)} style={{
              position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 199, background: "rgba(0,0,0,0.4)",
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? "auto" : "none",
              transition: "opacity 0.25s ease",
            }} />
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
            </div>

            <ActiveComponent onNavigate={handleNav} />

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
