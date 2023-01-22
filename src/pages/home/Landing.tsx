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
