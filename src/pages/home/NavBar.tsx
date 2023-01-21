import { css } from "@emotion/react"
import { Link } from "wouter"
import { HOME_PADDING } from "../../const/styles"

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
        className="display-bold"
        href="/"
        css={css`
          font-size: 40px;
          padding-bottom: 7px;
        `}
      >Title</Link>

      <div
        css={css`
          a {
            font-weight: bold;
            display: inline-block;
            margin-left: 40px;
            font-size: 15px;
            text-transform: uppercase;
          }
        `}
      >
        <Link href="/">Home</Link>
        <Link href="/convert">Convert</Link>
      </div>
    </div>
  )
}

export default NavBar
