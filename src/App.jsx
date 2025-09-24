import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import SplashNav from "./sections/SplashNav";
import Hero from "./sections/Hero";


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <SplashNav/>
      <Hero/>
    </main>
  )
}

export default App