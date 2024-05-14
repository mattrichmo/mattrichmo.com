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
    title: "Nature is Now - Matt Richmond",
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
  headerContent: {
    title: "Nature is Now",
    description: "Exploration of the idea that we are nature and not some separated entity that lives outside it. Nature is us.",
    details: [
      { label: "Category :", value: "Nature & Architecture" },
      { label: "Theme", value: "Envato" },
      { label: "Concept Dates", value: "Ongoing" },
      { label: "Photographer & Artist:", value: "Matt Richmond" }
    ],
    backgroundImage: "https://images.pexels.com/photos/17650031/pexels-photo-17650031/free-photo-of-light-landscape-nature-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  topContentContent: {
    title: "The Concept",
    subtitle: "Nature is Now",
    description: "This project delves into the intimate connection between humans and nature, challenging the conventional separation often portrayed in mainstream narratives. By emphasizing that we are an intrinsic part of the natural world, 'Nature is Now' invites viewers to reevaluate their relationship with the environment. The exhibition showcases a series of works that capture the symbiotic interactions between human-made structures and natural landscapes, illustrating the blend and balance where architecture meets nature. It is a visual journey that seeks to inspire and provoke thought about our role and impact on our surroundings."
  },
  worksData: [
    { id: 1, image: "https://images.pexels.com/photos/23990927/pexels-photo-23990927/free-photo-of-verdant-pine-needles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, image: "/assets/imgs/works/projects/0/3.jpg" },
    { id: 3, image: "/assets/imgs/works/projects/0/4.jpg" },
    { id: 4, image: "/assets/imgs/works/projects/0/5.jpg" },
    { id: 5, image: "/assets/imgs/works/projects/0/6.jpg" },
    { id: 6, image: "/assets/imgs/works/projects/0/7.jpg" }
  ],
  bottomContentContent: {
    title: "The Goal",
    subtitle: "Inspiration & Action",
    description: "The primary goal of 'Nature is Now' is to inspire a sense of responsibility and wonder about the natural world. Through artistic expression and architectural perspective, this project aims to highlight the urgent need for ecological consciousness and sustainable living. By presenting evocative and thought-provoking imagery, the exhibition hopes to catalyze a deeper appreciation for nature's beauty and its critical role in our survival. Ultimately, 'Nature is Now' seeks to motivate individuals and communities to take actionable steps towards preserving and enhancing the environment for future generations."
  },
  nextProjectContent: {
    href: "/project2",
    title: "Concept Audio",
    nextProjectEnable: false
  }
};




export const metadata = {
  title: pageContent.metadata.title,
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

}

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
