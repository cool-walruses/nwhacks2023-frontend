import { css } from "@emotion/react"
import { PropsWithChildren } from "react"
import { Link } from "wouter"
import { FONT_WEIGHT, HOME_PADDING, transition } from "../../const/styles"
import { CHATBOT_URL } from "../../const/urls"

const NavBar: React.FC = () => {
  return (
    <div
      css={css`
        position: absolute;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: ${HOME_PADDING.LEFT};
        padding-right: ${HOME_PADDING.RIGHT};
        padding-top: ${HOME_PADDING.TOP};
      `}
    >
      <Link
        className="display"
        href="/"
        css={css`
          font-weight: bold;
          font-size: 50px;
        `}
      >encode.</Link>

      <div
        css={css`
          a {
            font-weight: ${FONT_WEIGHT.BOLD};
            display: inline-block;
            margin-left: 50px;
            font-size: 18px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0;

            &::before {
              background: #ffffff;
              opacity: 0;
              content: '';
              width: 100%;
              height: 2px;
              display: block;
              position: absolute;
              z-index: -1;
              bottom: 0;
              ${transition("opacity")}
            }

            &:hover::before {
              opacity: 1;
            }
          }
        `}
      >
        <Link href="/">Home</Link>
        <Link href={CHATBOT_URL}>Convert</Link>
      </div>
    </div>
  )
}

export default NavBar
