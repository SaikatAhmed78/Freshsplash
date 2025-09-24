import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import SplashNav from "./sections/SplashNav";
import Hero from "./sections/Hero";
import Cocktails from "./sections/Cocktails";
import About from "./sections/About";
import Art from "./sections/Art";
import Menu from "./sections/Menu";
import Contact from "./sections/Contact";


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <SplashNav/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  )
}

export default App