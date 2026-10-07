import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-kufi-arabic",
  display: "swap",
});

// Tajawal leaves USE_TYPO_METRICS unset, so Windows lays it out with its tall
// win metrics and drops the text ~0.18em below Figma/macOS. Pin the hhea
// metrics so every platform matches the design.
const tajawal = localFont({
  src: [
    { path: "./fonts/Tajawal-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Tajawal-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Tajawal-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-tajawal",
  display: "swap",
  declarations: [
    { prop: "ascent-override", value: "64.3%" },
    { prop: "descent-override", value: "35.7%" },
    { prop: "line-gap-override", value: "20%" },
  ],
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
            __html: `(function(){function c(s,w,b,k){var z=(w>=1024&&w<b)?w/b:1;s.setProperty('--page-zoom'+k,String(z));s.setProperty('--canvas-width'+k,z<1?b+'px':'100%');}function a(){var w=document.documentElement.clientWidth,s=document.documentElement.style;c(s,w,1454,'');c(s,w,1440,'-1440');}a();addEventListener('resize',a,{passive:true});})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
