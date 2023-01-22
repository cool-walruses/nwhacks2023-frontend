import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react"

const useFadeIn = ({ from, to, trigger, viewport }: any) => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef<any>();

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      const ctx = gsap.context(() => {
          gsap.fromTo(element, {
            opacity: 0,
            ...from
          }, {
            opacity: 1,
            ...to,
            duration: 0.5,
            delay: 0.1,
            scrollTrigger: {
              trigger: trigger?.ref?.current ?? element,
              toggleActions: 'restart none none reverse',
              start: `${trigger?.start ?? "top"} ${viewport?.start ?? "bottom"}`,
              end: `${trigger?.end ?? "bottom"} ${viewport?.end ?? "top"}`
            },
          });
        }, element);


      return () => ctx.revert();
    }
  }, []);

  return ref;
}

export default useFadeIn;
