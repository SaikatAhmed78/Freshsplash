import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { navLinks } from "../constants/index.js";


const SplashNav = () => {

  useGSAP(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'nav',
          start: 'bottom top'
        }
      })

       tl.fromTo(
         "nav",
         { backgraoundColor: "transparent" },
         {
           backgraoundColor: "#00000050",
           backgraoundFilter: "blur(10px)",
           duration: 1,
           ease: 'power1.inOut',
         }
       );
  });

 

  return (
    <nav>
      <div className="">

        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="" />
          <p>Freshsplash</p>
        </a>

        <ul>
         {navLinks.map((link) => (
          <li key={link?.id}>
            <a href={`#${link?.id}`}>
              {link?.title}
              </a>
          </li>
         ))}
        </ul>

      </div>
    </nav>
  );
}

export default SplashNav