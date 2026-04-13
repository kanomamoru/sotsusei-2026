export default function ContentBlock({ title, children, num }) {
  return (
    <div style={{ marginTop: 48, marginBottom: 28 }}>
      <h3 style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 18, fontWeight: 700, margin: 0, marginBottom: 16, padding: 0, color: "#1a1a1a" }}>
        {num && <span style={{ width: 32, height: 32, borderRadius: "50%", background: "#D42027", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, flexShrink: 0 }}>{num}</span>}
        {title}
      </h3>
      <div style={{ fontSize: 14, lineHeight: 1.9, color: "#444" }}>{children}</div>
    </div>
  );
}
