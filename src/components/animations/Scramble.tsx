import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useLayoutEffect, useRef } from "react"
import { COLORS } from "../../const/styles";

const symbols = [..."!@#$%&*qwerty/"];
const colors = [COLORS.LT_BLUE, COLORS.LT_PURPLE, COLORS.BLUE, COLORS.PURPLE];

type ScrambleProps = {
  text: string,
  dark?: boolean,
  extraDelay?: boolean
}

const Scramble: React.FC<ScrambleProps> = ({ text, dark, extraDelay }) => {
  gsap.registerPlugin(ScrollTrigger);

  const id = `scramble${Math.floor(Math.random() * 1000)}`;
  const ref = useRef<any>();

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      const chars = element.querySelectorAll(".char");

      const ctx = gsap.context(() => {
        chars.forEach((char: any, i: number) => {
          if (text[i] === " ") return;
          gsap.to(char, {
            duration: 0.05,
            color: colors[Math.floor(Math.random() * colors.length)],
            keyframes: {
              innerHTML: Array(2).fill(() => { return () => symbols[Math.floor(Math.random() * symbols.length)]})
            },
            opacity: 1,
            delay: extraDelay ? (i+1)*0.05 : (i+1)*0.03,
            onComplete: () => { gsap.set(char, { innerHTML: text[i], color: dark ? "#000000" : "#ffffff", delay: 0.05 }); },
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom center',
              toggleActions: 'play none none reset',
              onEnter: () => gsap.set(char, { innerHTML: " ", opacity: 0 }),
            },

          });
        }, element);
      });

      return () => ctx.revert();
    }
  }, []);

  return <span ref={ref} id={id}>{[...text].map((_, i) => <span className="char" key={i}> </span>)}</span>;
}

export default Scramble
