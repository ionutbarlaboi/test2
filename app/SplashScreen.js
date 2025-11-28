"use client";
import { useState, useEffect } from "react";

export default function SplashScreen({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500); // 1.5 secunde
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#003366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        <img
          src="/splash-512.png" // imaginea mare, 512 px
          alt="Matemat'IBa"
          style={{ width: "80%", maxWidth: 400 }}
        />
      </div>
    );
  }

  return <>{children}</>;
}
