import { css } from "@emotion/react"
import { FONT_WEIGHT } from "../../const/styles"
import Scramble from "../../components/animations/Scramble"
import FadeIn from "../../components/animations/FadeIn"
import LinkButtonWithArrow from "../../components/LinkButtonWithArrow"
import { CHATBOT_URL } from "../../const/urls"
import useScrub from "../../hooks/useScrub"
import { useRef } from "react"

const TryNow: React.FC = () => {
  const ref = useRef<any>();
  const trigger = { ref: ref, start: "bottom" };
  const viewport = { end: "top+=300px" }
  const buttonRef = useScrub({ to: { y: 100 }, trigger, viewport });

  return (
    <div>
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
        `}
      >
        <video autoPlay muted loop
          css={css`
            height: 100%;
            width: 177.77777778vh;
            min-width: 100%;
            min-height: 56.25vw;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.3;
          `}
        >
          <source src="/blue.mp4" />
        </video>
        <div
          css={css`
            width: 100%;
            height: 50px;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), #000000);
            position: absolute;
            top: 0;
          `}
        />
      </div>

          <div
            css={css`
              font-size: 100px;
              font-weight: ${FONT_WEIGHT.BOLD};
              text-align: center;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            `}
          >
            <FadeIn>
              Try Encode now.
              <div css={css`
                padding-top: 100px;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);
              `}>
                <div ref={buttonRef}><LinkButtonWithArrow href={CHATBOT_URL}>Try our code generator</LinkButtonWithArrow></div>
              </div>
            </FadeIn>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TryNow
