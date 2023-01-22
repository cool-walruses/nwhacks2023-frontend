import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react"

const useScrub = ({ from, to, trigger, viewport }: any) => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef<any>();

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      const ctx = gsap.context(() => {
          gsap.fromTo(element, {
            ...from
          }, {
            ...to,
            scrollTrigger: {
              trigger: trigger.ref.current ?? element,
              scrub: true,
              start: `${trigger.start ?? "top"} ${viewport.start ?? "bottom"}`,
              end: `${trigger.end ?? "bottom"} ${viewport.end ?? "top"}`
            },
          });
        }, element);


      return () => ctx.revert();
    }
  }, []);

  return ref;
}

export default useScrub;
