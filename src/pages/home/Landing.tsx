import { css } from "@emotion/react"
import { ArrowRight } from "react-feather"
import Button from "../../components/Button"
import { HOME_PADDING } from "../../const/styles"

const Landing: React.FC = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
        background: #333333;
      `}
    >
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
          <div>Have you heard of Ligma?</div>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae velit varius, tincidunt turpis non, accumsan lacus. Fusce tristique orci id ex elementum, sagittis vehicula purus vehicula. Maecenas ullamcorper vitae sapien sit amet efficitur. Maecenas in placerat massa. Quisque iaculis cursus rutrum. Donec ut felis vel risus venenatis efficitur quis id diam. Vivamus in tellus dolor.
          </div>

          <Button
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            Try now
            <ArrowRight
              css={css`
                margin-top: -2px;
                margin-left: 10px;
                margin-right: -5px;
              `}
            />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Landing
