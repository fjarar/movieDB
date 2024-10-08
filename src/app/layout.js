import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PeliculApp",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}          
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
