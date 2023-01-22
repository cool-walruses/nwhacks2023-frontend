import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { PropsWithChildren } from "react";
import { useLayoutEffect, useRef } from "react"

const Scrub: React.FC<PropsWithChildren> = ({ children }) => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef<any>();

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      const ctx = gsap.context(() => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            delay: 0.03,
            scrollTrigger: {
              trigger: element,
              scrub: true,
              start: 'top bottom',
              end: 'top center'
            },

          });
        }, element);


      return () => ctx.revert();
    }
  }, []);

  return <div ref={ref}>{children}</div>;
}

export default Scrub
