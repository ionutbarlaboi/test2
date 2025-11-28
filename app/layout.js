import { Inter } from "next/font/google";
import "./globals.css";
import GoogleTranslate from "./GoogleTranslate";
import SplashScreen from "./SplashScreen"; // Client Component

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aplicație Matematică",
  description: "Teste grilă pentru gimnaziu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={inter.variable}>
      <body>
        <header
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "15px 0",
          }}
        >
          <div
            style={{
              width: "60%",
              maxWidth: "500px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              transform: "scale(1.2)",
              transformOrigin: "top center",
            }}
          >
            <GoogleTranslate />
          </div>
        </header>

        {/* Aplica SplashScreen peste tot */}
        <SplashScreen>{children}</SplashScreen>
      </body>
    </html>
  );
}
