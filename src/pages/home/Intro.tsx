import { css } from "@emotion/react"
import styled from "@emotion/styled";
import FadeIn from "../../components/animations/FadeIn";
import Scramble from "../../components/animations/Scramble";
import { FONT_WEIGHT, HOME_PADDING, HOME_PADDING_EXTRA } from "../../const/styles";

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
      css={css`
        width: 100%;
        padding: ${HOME_PADDING_EXTRA.BOTTOM} ${HOME_PADDING_EXTRA.LEFT};

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: ${HOME_PADDING_EXTRA.LEFT};
      `}
    >
      <Aligner>
        <Image />
        <Block
          header="Section One"
          body="Body text for section one. Body text for section one. Body text for section one. Body text for section one. Body text for section one."
        />
      </Aligner>

      <Aligner>
        <Block
          header="Section Two"
          body="Body text for section one. Body text for section one. Body text for section one. Body text for section one. Body text for section one."
        />
        <Image />
      </Aligner>

    </div>
  )
}

export default Intro
