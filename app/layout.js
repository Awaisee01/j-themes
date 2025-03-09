import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Provider"; // Import Providers
import Navbar from "@/app/components/Navbar";
import StickyNavbar from "@/app/components/StickyNavbar";
import Footer from "@/app/components/Footer";
import ClientLayout from "./ClientLayout"; // Import ClientLayout

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* Global Components */}
          <Navbar />
          <StickyNavbar />
          
          {/* Page Content */}
          <ClientLayout>
            <main>{children}</main>
          </ClientLayout>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}