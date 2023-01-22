import { css } from "@emotion/react"
import styled from "@emotion/styled";
import FadeIn from "../../components/animations/FadeIn";
import Scramble from "../../components/animations/Scramble";
import { HOME_PADDING_EXTRA } from "../../const/styles";

type BlockProps = {
  header: string,
  body: string
}

const Block: React.FC<BlockProps> = ({ header, body }) => {
  return (
    <div
      css={css`
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 520px;
      `}
    >
      <div
        className="display"
        css={css`
          font-weight: bold;
          font-size: 50px;
          margin-bottom: 20px;
          line-height: 0.9em;
        `}
      >
        <Scramble text={header} />
      </div>

      <div
        css={css`
          font-size: 18px;
        `}
      >
        <FadeIn>{body}</FadeIn>
      </div>
    </div>
  );
}

const Aligner = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
`

const Image = styled.div`
  flex-shrink: 0;
  width: 500px;
  height: 500px;
  background: grey;
`

const HowItWorks: React.FC = () => {
  return (
    <div
      id="how"
      css={css`
        width: 100%;
        padding: ${HOME_PADDING_EXTRA.BOTTOM} ${HOME_PADDING_EXTRA.LEFT};

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: ${HOME_PADDING_EXTRA.BOTTOM};
      `}
    >
      <Aligner>
        <Image />
        <Block
          header="Programming in your own words"
          body="Produce code using natural language. We use Codex, a model that was trained on millions of lines of public code on GitHub in order to make code generation. Learning how to program has never been easier without AI-driven development!"
        />
      </Aligner>

      <Aligner>
        <Block
          header="Ask what you’re really thinking"
          body="Speak your mind in your native language. We use a state-of-the-art language translation model to allow you to request and receive code in any language. Accessibility to information is no longer a concern with a tool that can gather and present code in a way that matches your preferences."
        />
        <Image />
      </Aligner>

    </div>
  )
}

export default HowItWorks
