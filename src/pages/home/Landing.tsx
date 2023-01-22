import { css } from "@emotion/react"
import { useRef } from "react"
import LinkButtonWithArrow from "../../components/LinkButtonWithArrow"
import { COLORS, FONT_WEIGHT, HOME_PADDING } from "../../const/styles"
import { CHATBOT_URL } from "../.././const/urls"
import useFade from "../../hooks/useFade"
import useScrub from "../../hooks/useScrub"

const Landing: React.FC = () => {
  const ref = useRef<any>();

  const trigger = { ref: ref, start: "bottom" };
  const viewport = { end: "top+=250px" }

  const fadeRef = useFade({ to: { y: -15 }, trigger, viewport });

  const titleRef = useScrub({ to: { y: 180 }, trigger, viewport });
  const subRef = useScrub({ to: { y: 160 }, trigger, viewport });
  const buttonRef = useScrub({ to: { y: 120 }, trigger, viewport });


  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
      `}
    >
      <div
        css={css`
          position: absolute;
          height: 100vh;
          width: 100%;
          z-index: -1;
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100vh;
            overflow: hidden;
            position: relative;
            background: linear-gradient(-45deg, ${COLORS.BLUE}, ${COLORS.PURPLE});
            background-size: 200% 200%;
	          animation: gradient 10s infinite;
            opacity: 0.5;

            @keyframes gradient {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}
        >
          <video autoPlay muted loop
            css={css`
              mix-blend-mode: multiply;
              height: 100%;
              width: 177.77777778vh;
              min-width: 100%;
              min-height: 56.25vw;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            `}
          >
            <source src="/home.mp4" />
          </video>
          <div
            css={css`
              width: 100%;
              height: 50px;
              background: linear-gradient(transparent, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), #000000);
              position: absolute;
              bottom: 0;
            `}
          />
        </div>
      </div>

      <div
        css={css`
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: ${HOME_PADDING.BOTTOM};
        `}
      >
        <div
          css={css`
            padding-left: ${HOME_PADDING.LEFT};
            padding-right: ${HOME_PADDING.RIGHT};
          `}
          ref={fadeRef}
        >
          <div
            className="header"
            css={css`
              margin-bottom: 30px;
              font-size: 100px;
              font-weight: ${FONT_WEIGHT.BOLD};
              line-height: 0.8em;
              width: 800px;
            `}
            ref={titleRef}
          >
            Language to code, seamlessly.
          </div>

          <div
            css={css`
              margin-bottom: 60px;
              width: 500px;
              font-size: 18px;
            `}
            ref={subRef}
          >
            Trying to find the solution to that coding problem, but you can’t find anything? Struggling to find learning resources on programming in your native language?
          </div>

          <div ref={buttonRef}><LinkButtonWithArrow href={CHATBOT_URL}>Try our code generator</LinkButtonWithArrow></div>
        </div>
      </div>
      <div ref={ref} />
    </div>
  )
}

export default Landing
