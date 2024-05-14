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
import Header from "@/components/Contact/Header";
import Info from "@/components/Contact/Info";
import Form from "@/components/Contact/Form";
import Footer1 from "@/components/Common/Footer1";


const pageContent = {
    header: {
        iconSrc: "/assets/imgs/svg-assets/hi.png",
        iconAlt: "Hi icon",
        subTitle: "Hello, Let's get in touch",
        title: "Get In Touch.",
        imageSrc: "https://images.pexels.com/photos/23990912/pexels-photo-23990912/free-photo-of-misty-forest-majesty.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        imageAlt: "Misty forest"
    },
    info: {
        title: 'Connect With Me',
        subTitle: 'Let&apos;s talk about your project and how we can create something great together',
        email: {
            label: 'Email',
            value: 'hello@mattrichmo.com'
        },
        phone: {
            label: 'Phone',
            value: '-'
        },
        location: {
            label: 'Location',
            value: 'Vancouver, BC, Canada'
        },
    },
};

const h1Fonts = [
    'https://fonts.googleapis.com/css2?family=Caprasimo&display=swap',
    '/assets/fonts/caprasimo/style.css'
  ];
  
  const regFonts = [
    'https://fonts.googleapis.com/css2?family=Caprasimo&display=swap',
    '/assets/fonts/caprasimo/style.css'
  ];
  
  export const metadata = {
    title: 'Matt Richmond | Contact',
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

export default function ContactPage() {
  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <div>
        <Navbar />
        <Menu />
        <div>
          <main className="main-bg">
            <Header headerContent={pageContent.header} />
            <Info infoContent={pageContent.info} />
            {/* <Form /> */}
          </main>
          <Footer1 subBg />
        </div>
      </div>

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}
