import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react"

const useFade = ({ from, to, trigger, viewport }: any) => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef<any>();

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      const ctx = gsap.context(() => {
          gsap.fromTo(element, {
            opacity: 1,
            ...from
          }, {
            opacity: 0,
            ...to,
            duration: 0.25,
            scrollTrigger: {
              trigger: trigger.ref.current ?? element,
              toggleActions: "none play reverse none",
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

export default useFade;
