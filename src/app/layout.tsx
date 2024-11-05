import type { Metadata } from "next";
import { Inter, Shrikhand } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meetly",
  description: "A meeting Scheduling platform",
};

const inter = Inter({ subsets: ["latin"] });

export const shrikhand = Shrikhand({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* header */}
          <Header />

          {/* main area */}
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>

          {/* footer */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
