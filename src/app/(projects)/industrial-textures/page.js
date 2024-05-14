import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import ProgressScroll from "@/components/Common/ProgressScroll";
//= Page Components
import Navbar from "@/components/Common/Navbar";
import Menu from "@/components/Common/Menu";
import Header from "@/components/Project/One/Header";
import TopContent from "@/components/Project/One/TopContent";
import Works from "@/components/Project/One/Works";
import BottomContent from "@/components/Project/One/BottomContent";
import NextProject from "@/components/Project/One/NextProject";
import Footer1 from "@/components/Common/Footer1";


const pageContent = {
    metadata: {
      title: "Plant Textures - Matt Richmond",
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
    worksData: [
      { id: 1, image: "https://images.pexels.com/photos/23990909/pexels-photo-23990909/free-photo-of-peeling-white-paint.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/peeling-white-paint-23990909/" },
      { id: 2, image: "https://images.pexels.com/photos/23914333/pexels-photo-23914333/free-photo-of-symphony-of-bricks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/symphony-of-bricks-23914333/"},
      { id: 3, image: "https://images.pexels.com/photos/23914328/pexels-photo-23914328/free-photo-of-rustic-metal-textures.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/rustic-metal-textures-23914328/" },
      { id: 4, image: "https://images.pexels.com/photos/23914325/pexels-photo-23914325/free-photo-of-antique-wallscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/antique-wallscape-23914325/" },
      { id: 5, image: "https://images.pexels.com/photos/23891450/pexels-photo-23891450/free-photo-of-complex-machine-gears.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/complex-machine-gears-23891450/"},
      { id: 6, image: "https://images.pexels.com/photos/23891944/pexels-photo-23891944/free-photo-of-sapphire-depths-an-underwater-exploration.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/sapphire-depths-an-underwater-exploration-23891944/" }
    ],
    headerContent: {
      title: "Industrial Textures",
      description: "A visual narrative that captures the intriguing interplay between human engineering and the relentless passage of time, showcasing the textured beauty of industrial environments.",
      details: [
        { label: "Category :", value: "Industrial & Time" },
        { label: "Theme", value: "Time's Impact on Structures" },
        { label: "Concept Dates", value: "Ongoing" },
        { label: "Photographer & Artist:", value: "Matt Richmond" }
      ],
      backgroundImage: "https://images.pexels.com/photos/17650032/pexels-photo-17650032/free-photo-of-light-landscape-nature-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    topContentContent: {
      title: "The Concept",
      subtitle: "Decay and Durability",
      description: "Industrial Textures examines the fascinating contrast between the enduring strength of human-made structures and the inevitable wear imparted by time and elements. This project captures the aesthetic and symbolic dimensions of industrial decay and resilience through the lens of time-lapsed photography."
    },
    bottomContentContent: {
      title: "The Goal",
      subtitle: "Revealing Beauty in Decay",
      description: "The project aims to document and celebrate the often overlooked beauty found in the decay of industrial sites. Through these images, 'Industrial Textures' seeks to highlight the poetic interplay between creation and erosion, prompting reflections on the impermanence and transformation of our built environments."
    },
    nextProjectContent: {
      href: "/project2",
      title: "Concept Audio",
      nextProjectEnable: false
    }
};
  

export const metadata = pageContent.metadata;

export default function ProjectOnePage() {
  return (
    <body className="main-bg">
      <LoadingScreen />
      <ProgressScroll />

      <div id="smooth-wrapper">
        <Navbar />
        <Menu />
        <div>
          <main className="main-bg">
            <div className="main-box main-bg ontop">
            <Header content={pageContent.headerContent} />
            <TopContent content={pageContent.topContentContent} />
            <Works worksData={pageContent.worksData} />
            <BottomContent content={pageContent.bottomContentContent} />
            </div>
            <NextProject project={pageContent.nextProjectContent} /> 
          </main>
          <Footer1 />
        </div>
      </div>


      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}
