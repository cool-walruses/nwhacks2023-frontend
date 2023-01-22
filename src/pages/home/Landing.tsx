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
      <video autoPlay muted loop css={css`
                width: 100%;
                height: 100vh;
      `
      }>
        <source src="../../../public/home.mp4" />
      </video>
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
