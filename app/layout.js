import { Inter } from "next/font/google";
import "./globals.css";
import GoogleTranslate from "./GoogleTranslate"; // componenta ta

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
        {/* Header cu Google Translate sus, centrat și mărit */}
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
              width: "60%",         // lățimea div-ului
              maxWidth: "500px",    // limită pe desktop
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              transform: "scale(1.2)",     // mărire cu 20%
              transformOrigin: "top center", // să rămână centrat
            }}
          >
            <GoogleTranslate />
          </div>
        </header>

        {/* Conținutul principal */}
        <main>{children}</main>
      </body>
    </html>
  );
}
