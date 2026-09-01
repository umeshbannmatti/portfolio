import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"] });
const creteRound = Crete_Round({ variable: "--font-heading", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), title: "Umesh Bannimatti | Technical Lead", description: "Portfolio of Umesh Bannimatti — Technical Lead specializing in enterprise platforms, Sitecore, Microsoft technologies, automation, and AI.", alternates: { canonical: "/" }, robots: { index: true, follow: true },
  openGraph: { title: "Umesh Bannimatti | Technical Lead", description: "Technical Lead with 15+ years of enterprise platform experience.", type: "website", url: "/" },
  twitter: { card: "summary", title: "Umesh Bannimatti | Technical Lead", description: "Technical Lead with 15+ years of enterprise platform experience." },
};
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})()`;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning className={`${workSans.variable} ${creteRound.variable}`}><head><script dangerouslySetInnerHTML={{ __html: themeScript }}/></head><body>{children}</body></html>; }
