import type { Metadata } from "next";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "sabi.tools - L'intelligence discrète, l'efficacité visible.",
  description:
    "La suite d'outils digitaux pour améliorer votre business intelligemment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <div className="flex h-screen bg-sabi-white text-sabi-black">
          <aside className="w-64 flex-shrink-0 bg-sabi-black p-6">
            <div className="text-sabi-white font-display text-2xl font-bold">
              sabi.tools
            </div>
            {/* Navigation items will go here */}
          </aside>
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}