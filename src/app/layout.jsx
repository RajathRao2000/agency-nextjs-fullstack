import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/HomePage/Header/Header";
import Footer from "@/components/HomePage/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Creative Agency",
    template: "%s | Next.js 14",
  },
  description: "This is a website for creative agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Header />
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
