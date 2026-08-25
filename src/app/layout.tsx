import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic, Tajawal, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-kufi-arabic",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transformix — نطوّر مواقع تخدم أعمالك بوضوح وكفاءة",
  description:
    "نجمع بين بناء العلامة، تصميم المواقع، تجربة المستخدم وصناعة المحتوى لنصنع حضورًا متكاملًا يعبر عنك ويقربك من جمهورك.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1c4499",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${notoKufiArabic.variable} ${tajawal.variable} ${plusJakarta.variable}`}
    >
      <body className="bg-bg-main text-text-primary font-kufi antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function a(){var w=document.documentElement.clientWidth,z=(w>=1024&&w<1454)?w/1454:1,s=document.documentElement.style;s.setProperty('--page-zoom',String(z));s.setProperty('--canvas-width',z<1?'1454px':'100%');}a();addEventListener('resize',a,{passive:true});})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
