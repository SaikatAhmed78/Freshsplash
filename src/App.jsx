import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import SplashNav from "./sections/SplashNav";


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <SplashNav/>
    </main>
  )
}

export default App