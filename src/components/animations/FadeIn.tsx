import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { PropsWithChildren } from "react";
import { useLayoutEffect, useRef } from "react"

const FadeIn: React.FC<PropsWithChildren> = ({ children }) => {
  gsap.registerPlugin(ScrollTrigger);

  const id = `fadein${Math.floor(Math.random() * 1000)}`;
  const ref = useRef<any>();

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      const ctx = gsap.context(() => {
          gsap.fromTo(element, {
            opacity: 0,
            y: 30
          }, {
            duration: 0.5,
            opacity: 1,
            y: 0,
            delay: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top-=30px bottom',
              end: 'top center',
              toggleActions: 'restart none none reverse',
              onEnter: () => gsap.set(element, { opacity: 0 }),
            },

          });
        }, element);


      return () => ctx.revert();
    }
  }, []);

  return <div ref={ref} id={id}>{children}</div>;
}

export default FadeIn
