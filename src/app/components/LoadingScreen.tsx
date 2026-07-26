export default function LoadingScreen() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #F0F9FF 0%, #ffffff 55%)",
        zIndex: 9999,
      }}
    >
      {/* Logo mark */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 16,
            background: "linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(37,99,235,0.30)",
          }}
        >
          {/* Tooth SVG icon */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2C9 2 6 4 6 7c0 2 1 4 1 6s-1 4-1 6c0 1.5 1 2 2 2s2-1 3-3c.5-1 .5-1 1-1s.5 0 1 1c1 2 2 3 3 3s2-.5 2-2c0-2-1-4-1-6s1-4 1-6c0-3-3-5-6-5z" />
          </svg>
        </div>
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1E293B",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          DentalCare
          <span style={{ color: "#2563EB" }}>+</span>
        </span>
      </div>

      {/* Animated dots bar */}
      <div style={{ display: "flex", gap: 8 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#2563EB",
              animation: `dc-pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes dc-pulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40%            { transform: scale(1);   opacity: 1;   }
        }
      `}</style>
    </div>
  );
}
