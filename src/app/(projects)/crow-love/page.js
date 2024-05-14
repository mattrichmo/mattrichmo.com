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
      { id: 1, image: "https://images.pexels.com/photos/23990927/pexels-photo-23990927/free-photo-of-verdant-pine-needles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", url: "https://www.pexels.com/photo/macro-plant-23192794/" },
      { id: 2, image: "https://images.pexels.com/photos/23192794/pexels-photo-23192794/free-photo-of-macro-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/macro-plant-23192794/"},
      { id: 3, image: "https://images.pexels.com/photos/23192796/pexels-photo-23192796/free-photo-of-nature-forest-plants-wet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/nature-forest-plants-wet-23192796/" },
      { id: 4, image: "https://images.pexels.com/photos/23990903/pexels-photo-23990903/free-photo-of-verdant-leaf-patterns.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/verdant-leaf-patterns-23990903/" },
      { id: 5, image: "https://images.pexels.com/photos/23914319/pexels-photo-23914319/free-photo-of-tropical-leaf-symphony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/tropical-leaf-symphony-23914319/"},
      { id: 6, image: "https://images.pexels.com/photos/23914316/pexels-photo-23914316/free-photo-of-ancient-wood-grains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/ancient-wood-grains-23914316/" }
    ],
    headerContent: {
      title: "Crow Love",
      description: "An evocative exploration of the intricate and poignant relationships that develop between humans and crows, highlighting the profound possibilities of interspecies communication and friendship.",
      details: [
        { label: "Category :", value: "Crows & Ravens" },
        { label: "Theme", value: "Interspecies Communication" },
        { label: "Concept Dates", value: "Ongoing" },
        { label: "Photographer & Artist:", value: "Matt Richmond" }
      ],
      backgroundImage: "https://images.pexels.com/photos/17650031/pexels-photo-17650031/free-photo-of-light-landscape-nature-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    topContentContent: {
      title: "The Concept",
      subtitle: "Unveiling Connections",
      description: "This project delves into the subtle yet complex modes of communication between crows and humans. Through a series of powerful images, 'Crow Love' unveils the surprising depth of understanding and mutual respect that can exist across species barriers, often expressed through gestures, shared spaces, and vocalizations."
    },
    bottomContentContent: {
      title: "The Goal",
      subtitle: "Expanding Perceptions",
      description: "The primary aim of 'Crow Love' is to challenge and expand our perceptions of animal intelligence and emotional capacities. By documenting these shared moments of connection, the project seeks to inspire a greater appreciation for the emotional and cognitive complexities of crows, encouraging conservation and respectful coexistence."
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
