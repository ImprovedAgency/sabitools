import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

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
  description: "La suite d'outils digitaux pour améliorer votre business intelligemment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${montserrat.variable} bg-sabi-white text-sabi-black font-sans antialiased`}>
        <div className="flex h-screen">
          {/* Barre Latérale */}
          <aside className="w-64 flex-shrink-0 bg-sabi-black p-6">
            <div className="text-sabi-white font-display text-2xl font-bold">
              sabi.tools
            </div>
            <nav className="mt-8">
              {/* Les liens de navigation viendront ici */}
            </nav>
          </aside>

          {/* Contenu Principal */}
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}