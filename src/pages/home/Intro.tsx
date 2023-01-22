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
      `}
    >
      <div
        className="display header"
        css={css`
          font-weight: bold;
          font-size: 50px;
          margin-bottom: 20px;
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
`

const Image = styled.div`
  flex-shrink: 0;
  width: 500px;
  height: 500px;
  background: grey;
`

const Intro: React.FC = () => {
  return (
    <div
      id="intro"
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
        <FadeIn>
          <video autoPlay muted
            css={css`
              left: 50%;
              top: 50%;
              padding-right: 30px;
              flex-shrink: 0;
              width: 550px;
              height: 550px;
              background: grey;
              border-radius: 20px;
              box-shadow: inset 0px 0px 0px 100px rgba(0,0,0,0.9);
            `}
          >
          <source src="/lightbulb.mp4"/>
          </video>
        </FadeIn>
        <Block
          header="Codify your ideas."
          body="Bring your idea to life using your native language. Simply enter a prompt and Encode will translate it into code."
        />
      </Aligner>

      <Aligner>
        <Block
          header="Learn to code."
          body="Encode's fast and user-friendly UI makes it easy to use for beginners and professionals alike.
          Experience language barrier-free learning with Encode's native language comments for easier code comprehension."
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

export default Intro
