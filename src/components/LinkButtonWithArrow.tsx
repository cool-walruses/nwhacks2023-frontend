import { css } from "@emotion/react"
import { PropsWithChildren } from "react"
import { ArrowRight } from "react-feather"
import { Link } from "wouter"
import { COLORS, transition } from "../const/styles"
import Button from "./Button"

type LinkButtonWithArrow = {
  href: string;
}

const LinkButtonWithArrow: React.FC<PropsWithChildren<LinkButtonWithArrow>> = ({ href, children }) => {
  return (
    <Link href={href}>
      <Button
        css={css`
          display: flex;
          align-items: center;
          position: relative;
          padding-right: 50px;
          cursor: pointer;
          overflow: hidden;
          ${transition(["background"])}

          &:hover {
            background: transparent;

            .arrow {
              margin-right: -5px;
            }
          }

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            background: linear-gradient(90deg, ${COLORS.LT_BLUE}, ${COLORS.LT_PURPLE});
            width: 100%;
            height: 100%;
            z-index: -1
          }
        `}
      >
        {children}
        <ArrowRight
          className="arrow"
          css={css`
            ${transition("margin-right")}
            margin-top: -1px;
            position: absolute;
            right: 20px;
          `}
        />
      </Button>
    </Link>
  )
}

export default LinkButtonWithArrow
