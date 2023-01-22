import { css } from "@emotion/react"
import LinkButtonWithArrow from "../../components/LinkButtonWithArrow"
import { FONT_WEIGHT, HOME_PADDING } from "../../const/styles"
import { CHATBOT_URL } from "../../const/urls"

const Landing: React.FC = () => {
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
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100vh;
            overflow: hidden;
            position: relative;
            z-index: -1;
          `}
        >
          <video autoPlay muted loop
            css={css`
              height: 100%;
              width: 177.77777778vh; /* 100 * 16 / 9 */
              min-width: 100%;
              min-height: 56.25vw; /* 100 * 9 / 16 */
              position: absolute;
              left: 50%; /* % of surrounding element */
              top: 50%;
              transform: translate(-50%, -50%); /* % of current element */
              opacity: 0.3;
            `}
          >
            <source src="../../../public/home.mp4" />
          </video>
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
        >
          <div
            className="header"
            css={css`
              margin-bottom: 25px;
              font-size: 100px;
              font-weight: ${FONT_WEIGHT.BOLD};
            `}
          >
            Language to code, seamlessly.
          </div>

          <div
            css={css`
              margin-bottom: 75px;
              width: 500px;
              font-size: 18px;
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae velit varius, tincidunt turpis non, accumsan lacus.
          </div>

          <LinkButtonWithArrow href={CHATBOT_URL}>Try now</LinkButtonWithArrow>
        </div>
      </div>
    </div>
  )
}

export default Landing
