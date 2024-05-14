//page.js



import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";
//= Page Components
import Navbar from "@/components/Common/Navbar";
import Menu from "@/components/Common/Menu";
import Fullscreen from "@/components/Portfolio/Fullscreen";

const h1Fonts = [
  'https://fonts.googleapis.com/css2?family=Caprasimo&display=swap',
  '/assets/fonts/caprasimo/style.css'
];

const regFonts = [
  'https://fonts.googleapis.com/css2?family=Caprasimo&display=swap',
  '/assets/fonts/caprasimo/style.css'
];

export const metadata = {
  title: 'Matt Richmond | Photographer',
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    fonts: {
      h1: h1Fonts,
      reg: regFonts
    },
    other: generateStylesheetObject([
      ...h1Fonts,
      ...regFonts,
      '/assets/css/plugins.css',
      '/assets/css/style.css'
    ])
  }
}

export default function PortfolioFullscreenPage() {
  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <Navbar />
      <Menu />
      <Fullscreen />

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}