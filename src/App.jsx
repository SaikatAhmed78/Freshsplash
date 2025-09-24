import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      <h1 className="text-2xl text-center text-indigo-500 font-semibold underline">GSAP BASIC LANDING PROJECT</h1>
    </div>
  )
}

export default App