import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useLayoutEffect, useRef } from "react"

const symbols = [..."!@#$%&*qwerty/"];

type ScrambleProps = {
  text: string,
}

const Scramble: React.FC<ScrambleProps> = ({ text }) => {
  gsap.registerPlugin(ScrollTrigger);

  const id = `scramble${Math.floor(Math.random() * 1000)}`;
  const ref = useRef<any>();

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      const chars = element.querySelectorAll(".char");

      const ctx = gsap.context(() => {
        chars.forEach((char: any, i: number) => {
          gsap.to(char, {
            duration: 0.05,
            keyframes: {
              innerHTML: Array(2).fill(() => { return () => symbols[Math.floor(Math.random() * symbols.length)] })
            },
            opacity: 1,
            delay: (i+1)*0.05,
            onComplete: () => { gsap.set(char, { innerHTML: text[i], delay: 0.05 }); },
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom center',
              toggleActions: 'play none none reset',
              onEnter: () => gsap.set(char, { opacity: 0 }),
            },

          });
        }, element);
      });

      return () => ctx.revert();
    }
  }, []);

  return <span ref={ref} id={id}>{[...text].map((_, i) => <span className="char" key={i}></span>)}</span>;
}

export default Scramble
