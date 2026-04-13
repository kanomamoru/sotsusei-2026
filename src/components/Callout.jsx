export default function Callout({ type, children }) {
  const styles = {
    info: { bg: "#f0f0f0", border: "#999", icon: "ℹ️" },
    warning: { bg: "#FFF8E1", border: "#FF9800", icon: "⚠️" },
    emphasis: { bg: "#f5f5f5", border: "#999", icon: "📌" },
  };
  const s = styles[type] || styles.info;
  return (
    <div style={{
      background: s.bg,
      padding: "14px 18px", borderRadius: 6,
      marginBottom: 24, fontSize: 14, lineHeight: 1.8, color: "#333",
    }}>
      <span style={{ marginRight: 8 }}>{s.icon}</span>{children}
    </div>
  );
}
