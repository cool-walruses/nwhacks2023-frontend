import { css } from "@emotion/react"
import styled from "@emotion/styled";
import FadeIn from "../../components/animations/FadeIn";
import Scramble from "../../components/animations/Scramble";
import LinkButtonWithArrow from "../../components/LinkButtonWithArrow";
import { FONT_WEIGHT, HOME_PADDING_EXTRA } from "../../const/styles";
import { CHATBOT_URL } from "../../const/urls";
import useFadeIn from "../../hooks/useFadeIn";

const WhoCanUse: React.FC = () => {
  const textRef = useFadeIn({});
  const subRef = useFadeIn({ });

  return (
    <div
      id="who"
      css={css`
        width: 100%;
        height: 100vh;
        margin-top: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className="header"
        css={css`
          margin-bottom: 30px;
          font-size: 60px;
          font-weight: ${FONT_WEIGHT.BOLD};
          line-height: 0.9em;
          width: 800px;
          text-align: center;
        `}
        ref={textRef}
      >
        English speaker?<br />
        Fluent in French?<br />
        Beginner programmer?<br/>
        Seasoned professional?<br/>
      </div>

      <div
        css={css`
          margin-bottom: 60px;
          width: 500px;
          font-size: 18px;
          text-align: center;
        `}
        ref={subRef}
      >
        We make learning how to program inclusive by transforming your words into executable code regardless of your spoken language. No matter your skill level, we can handle a wide range of requests so that you can kickstart your next task.
      </div>
    </div>
  )
}

export default WhoCanUse
