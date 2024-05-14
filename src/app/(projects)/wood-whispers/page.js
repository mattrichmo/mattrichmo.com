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
        { id: 1, image: "https://images.pexels.com/photos/13678092/pexels-photo-13678092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/coast-tree-bark-arbutus-13678092/" },
        { id: 2, image: "https://images.pexels.com/photos/17650028/pexels-photo-17650028/free-photo-of-light-landscape-nature-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/light-landscape-nature-art-17650028/"},
        { id: 3, image: "https://images.pexels.com/photos/23990917/pexels-photo-23990917/free-photo-of-rugged-wood-textures.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/rugged-wood-textures-23990917/" },
        { id: 4, image: "https://images.pexels.com/photos/23914309/pexels-photo-23914309/free-photo-of-weathered-wood-textures.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/weathered-wood-textures-23914309/" },
        { id: 5, image: "https://images.pexels.com/photos/23914316/pexels-photo-23914316/free-photo-of-ancient-wood-grains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", url: "https://www.pexels.com/photo/ancient-wood-grains-23914316/"},
      ],
    headerContent: {
        title: "Wood Whispers",
        description: "An artistic exploration into the silent, yet expressive world of woodgrain, capturing the unique stories told by the natural patterns and textures of wood.",
        details: [
          { label: "Category :", value: "Nature & Textures" },
          { label: "Theme", value: "Patterns of Nature" },
          { label: "Concept Dates", value: "Ongoing" },
          { label: "Photographer & Artist:", value: "Matt Richmond" }
        ],
        backgroundImage: "https://images.pexels.com/photos/23990918/pexels-photo-23990918/free-photo-of-bamboo-stalk-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      topContentContent: {
        title: "The Concept",
        subtitle: "Intricate Impressions",
        description: "Wood Whispers delves into the mesmerizing intricacies of woodgrain, each line and swirl a testament to the passage of time and the silent growth of the forest. This project aims to reveal the subtle beauty and complex patterns etched into the grains of wood, showcasing them as natural artworks sculpted by elements and time."
      },
      bottomContentContent: {
        title: "The Goal",
        subtitle: "Elevating Natural Art",
        description: "By focusing on the minute and often overlooked details of wood textures, Wood Whispers seeks to elevate the perception of ordinary wood surfaces to that of extraordinary art. The goal is to foster a deeper appreciation for nature's artistry and inspire a connection to the natural world through the simple, yet profound language of woodgrain."
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
