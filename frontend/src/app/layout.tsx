import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Sidebar />
          <main>
            <div className="view">{children}</div>
            <Feed />
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
