import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const cinematicVideoRef = useRef();

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const titleSplitter = new SplitText(".title", {
      type: "chars, words",
    });

    const subtitleSplitter = new SplitText(".subtitle", {
      type: "lines",
    });

    titleSplitter.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(titleSplitter.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(subtitleSplitter.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 100 }, 0);

    const scrollStart = isSmallScreen ? "top 50%" : "center 60%";
    const scrollEnd = isSmallScreen ? "120% top" : "bottom top";

    let videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: scrollStart,
        end: scrollEnd,
        scrub: true,
        pin: true,
      },
    });

    cinematicVideoRef.current.onloadedmetadata = () => {
      videoTimeline.to(cinematicVideoRef.current, {
        currentTime: cinematicVideoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">FRESIA</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Fresh. Light. Vibrant.</p>
              <p className="subtitle">
                Taste The Joy <br /> Of Nature
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Each drink is crafted with care, combining bold flavors and
                unique textures — a feast for the senses.
              </p>
              <a href="#cocktails">Explore Menu</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={cinematicVideoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>
    </>
  );
};

export default Hero;
