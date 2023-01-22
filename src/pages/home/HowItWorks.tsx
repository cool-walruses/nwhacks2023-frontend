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
          body="Generate code in a programming language of your choice simply using natural language. We use Codex, a model that was trained on millions of lines of public code on GitHub in order to make automated code production possible. Learning how to program while suiting your specific needs has never been easier without AI-driven development."
        />
      </Aligner>

      <Aligner>
        <Block
          header="Ask what you’re really thinking"
          body="Prompt the model in the language that you are most comfortable with. We use a state-of-the-art language translation model to allow you to ask for and receive code in your native language without having to go through the trouble of learning another language to interpret code and search for solutions. Accessibility to information is no longer a concern with a tool that can gather and present code in a way that matches your preferences."
        />
        <div>
          <FadeIn>
            <div css={css`
              transform: scale(0.85);
            `}>
              <img src="terminal.png"/>
            </div>
            <div css={css`
              width: 400px;
              height: 100px;
              font-family: 'input mono';
              font-size: 30px;
              font-weight: bold;
              text-align: left;
              color: green;
              top: 17px;
            `}>
              <span style={
                {
                  color: "gray"
                }
              }># Un programme pour dire bonjour au monde</span>
              <br></br>
              <span><Scramble text={"print(\"Bonjour le monde!\")"}/></span>
            </div>
          </FadeIn>
        </div>
      </Aligner>

    </div>
  )
}

export default HowItWorks
