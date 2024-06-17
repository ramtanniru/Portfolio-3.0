import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/Header";
import { ToasterContext } from "./context/ToasterContext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {NextUIProvider} from "@nextui-org/react";
import { Bai_Jamjuree } from "next/font/google";

const font = Bai_Jamjuree({ weight:['200', '300', '400', '500', '600', '700'],subsets: ["latin"] });
export const metadata = {
  title: "Ram Tanniru",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-black ${font.className}`}>
        <NextUIProvider>
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="dark"
          >
            <Header/>
            <ToasterContext/>
            {children}
            <Footer/>
            <ScrollToTop/>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
