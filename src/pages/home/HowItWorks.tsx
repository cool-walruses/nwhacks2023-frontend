import { css } from "@emotion/react"
import styled from "@emotion/styled";
import FadeIn from "../../components/animations/FadeIn";
import Scramble from "../../components/animations/Scramble";
import { HOME_PADDING_EXTRA } from "../../const/styles";
import useFadeIn from "../../hooks/useFadeIn";

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
  border-radius: 250px;
`

const HowItWorks: React.FC = () => {
  const obj = { from: { y: 25 }, to: { y: -25, delay: 0.25, duration: 1 } };

  const ref1 = useFadeIn(obj);
  const ref2 = useFadeIn(obj);

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
        <Image ref={ref1} />
        <Block
          header="Programming in your own words"
          body="Produce code using natural language. We use Codex, a model that was trained on millions of lines of public code on GitHub in order to make code generation possible. Learning how to program has never been easier without AI-driven development!"
        />
      </Aligner>

      <Aligner>
        <Block
          header="Ask what you’re really thinking"
          body="Speak your mind in your native language. We use a state-of-the-art language translation model to allow you to request and receive code in any language. Accessibility to information is no longer a concern with a tool that can gather and present code in a way that matches your preferences."
        />
        <div
          ref={ref2}
          css={css`
            flex-shrink: 0;
            width: 500px;
            height: 500px;
            padding-top: 50px;
          `}
        >
          <img src="terminal.png" css={css`max-width: 100%; position: absolute; z-index: 10;`} />
            <div css={css`
              width: 400px;
              height: 100px;
              font-family: 'input mono', monospace;
              font-size: 30px;
              font-weight: bold;
              text-align: left;
              color: green;
              top: 17px;
              line-height: 1.6;
              position: absolute;
              top: 170px;
              left: 55px;
              z-index: 999;
            `}>
              <span css={css`font-weight: normal; color: grey; font-style: italic;`
              }># Un programme pour dire bonjour au monde</span>
              <br></br>
              <span css={css`color:black;`}><Scramble text={"print(\"Bonjour le monde!\")"} dark extraDelay /></span>
            </div>
          </div>
      </Aligner>

    </div>
  )
}

export default HowItWorks
