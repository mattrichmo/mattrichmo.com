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
import Works from "@/components/CreativeAgency/Works";

import Footer1 from "@/components/Common/Footer1";

const pageContent = {
    metadata: {
      title: "Matt Richmond - Photographer",
      icons: {
        icon: "/assets/imgs/favicon.ico",
        shortcut: "/assets/imgs/favicon.ico",
        other: generateStylesheetObject([
          'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
          '/assets/fonts/mona-sans/style.css',
          '/assets/css/plugins.css',
          '/assets/css/style.css'
        ])
      }
    },
    header: {},
    about: {
        subTitle: "Who Am I?",
        description: "My name is Matt Richmond, a passionate nature photographer and skilled cinematographer based in Vancouver.",
        text:[ "With a keen eye for the sublime interplay of light and shadow, I specialize in capturing the essence of the natural world, aiming to bring the outdoors to life through my lenses. My approach combines technical precision with artistic flair, focusing on creating compelling visual narratives that highlight the beauty and complexity of nature. Whether I'm crafting bespoke brand imagery for eco-conscious companies, designing immersive digital experiences, or spearheading strategic visual campaigns, my work is driven by a commitment to excellence and a deep respect for the environment. This dedication ensures that every project not only meets but exceeds client expectations, fostering connections between brands and their audiences through the power of photography and film.",
        "I am always looking for new opportunities to collaborate with like-minded individuals and organizations, so please don't hesitate to reach out if you'd like to discuss a project or learn more about my work. I look forward to hearing from you!"
        ]
      },
    services: {},
    works: {},
    awards: {},
    testimonials: {},
    team: {},
    contact: {},
};
  
  

  export const metadata = pageContent.metadata;

  export default function CreativeAgency() {
    return (
      <body className="main-bg">
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
  
        <div id="smooth-wrapper">
          <Navbar />
          <Menu />
          <div id="smooth-content">
            <main className="main-bg">
              <div className="main-box main-bg ontop">
                <Works />
                {/* <Testimonials /> */}
              </div>
            </main>
            <Footer1 />
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
  