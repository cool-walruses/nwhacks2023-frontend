import { css } from "@emotion/react"
import { PropsWithChildren } from "react"
import { ArrowRight } from "react-feather"
import { Link } from "wouter"
import { transition } from "../const/styles"
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
          ${transition("opacity")}

          &:hover {
            opacity: 0.6;

            .arrow {
              margin-right: -5px;
            }
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
