import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Movie-Platform",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (<>
        <Header/>
        {children}
        <Footer/>
        </>
  );
}
