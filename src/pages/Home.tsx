// import About from "../components/About";
// import Footer from "../components/Footer";
// import GallerySlider from "../components/GallerySlider";
// import OurMenu from "../components/OurMenu";
// import SpecialMenu from "../components/SpecialMenu";

import About from "../components/About";
import Footer from "../components/Footer";
import GallerySlider from "../components/GallerySlider";
import { Main } from "../components/Main";
import Navbar from "../components/Navbar";
import OurMenu from "../components/OurMenu";
import SpecialMenu from "../components/SpecialMenu";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <SpecialMenu />
      <OurMenu />
      <About />
      <GallerySlider />
      <Footer />
    </>
  );
};

export default Home;
