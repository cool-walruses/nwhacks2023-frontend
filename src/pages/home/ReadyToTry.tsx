import { css } from "@emotion/react"
import styled from "@emotion/styled";
import FadeIn from "../../components/animations/FadeIn";
import Scramble from "../../components/animations/Scramble";
import LinkButtonWithArrow from "../../components/LinkButtonWithArrow";
import { FONT_WEIGHT, HOME_PADDING_EXTRA } from "../../const/styles";
import { CHATBOT_URL } from "../../const/urls";
import useFadeIn from "../../hooks/useFadeIn";

const ReadyToTry: React.FC = () => {
  const textRef = useFadeIn({});
  const buttonRef = useFadeIn({ });

  return (
    <div
      id="ready"
      css={css`
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
      `}
    >
      <div
        className="header"
        css={css`
          margin-bottom: 30px;
          font-size: 100px;
          font-weight: ${FONT_WEIGHT.BOLD};
          line-height: 0.8em;
          width: 800px;
          text-align: center;
        `}
        ref={textRef}
      >
        Ready to give it a shot?
      </div>

      <div ref={buttonRef}>
        <LinkButtonWithArrow href={CHATBOT_URL}>Get started</LinkButtonWithArrow>
      </div>
    </div>
  )
}

export default ReadyToTry
