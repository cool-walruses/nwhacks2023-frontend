import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react"
import { arta, CopyBlock } from "react-code-blocks";
import { CODE_BLOCK_LANG, PROGRAM_LANG } from "../../const/languages";
import { COLORS, FONT_WEIGHT } from "../../const/styles";
import useFade from "../../hooks/useFade";

const Bubble = styled.div`
  width: auto;
  max-width: 500px;
  font-size: 16px;
  border-radius: 10px;
  padding: 15px 20px;
  display: inline-block;
`

type MessageProps = {
  origin?: "ai" | "user";
  language?: string;
  code?: {
    text: string,
    language: PROGRAM_LANG
  }
}

const Message: React.FC<PropsWithChildren<MessageProps>> = ({ origin, language, code, children }) => {
  const avatarRef = useFade({ to: { opacity: 0, y: 20 }, trigger: { end: "top" }, viewport: { end: "top+=100px"}});

  const isAi = origin === "ai" || code;

  return (
    <div
      css={css`
        display: flex;
        align-items: flex-start;
        gap: 50px;
        justify-content: ${isAi ? "flex-start": "flex-end"};

        button {
          cursor: pointer !important;
        }

        .react-syntax-highlighter-line-number {
          font-style: italic;
          opacity: 0.25
        }
      `}
    >
      {isAi &&
        <div
          ref={avatarRef}
          css={css`
            background: ${COLORS.BLUE};
            width: 49px;
            height: 49px;
            border-radius: 50px;
            display: inline-block;
            flex-shrink: 0;
            z-index: -9999;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              font-family: "Input Mono", monospace;
              font-size: 20px;
              font-weight: bold;
              color: ${COLORS.LT_BLUE};
            `}
          >
            o_o
          </div>
        </div>
      }
      {!code ?
        <Bubble
          css={css`
            background: ${isAi ? "#1C1C1C" : COLORS.DK_PURPLE};
            z-index: 9999;
          `}
        >
          {children}
          {!isAi && language &&
            <div
              css={css`
                font-size: 12px;
                margin-bottom: -5px;
                text-align: right;
                opacity: 0.5;
                font-weight: ${FONT_WEIGHT.BOLD};
              `}
            >
              {language}
            </div>
          }
        </Bubble>
        :
        <CopyBlock
          text={code.text.replace("\t", "    ")}
          language={CODE_BLOCK_LANG[code.language]}
          theme={arta}
          codeBlock
          showLineNumbers
          wrapLongLines
          customStyle={{
            borderRadius: 10,
            padding: "10px 40px 10px 12px",
            fontFamily: "Input Mono, monospace",
            maxWidth: 800,
            zIndex: 9999
          }}
        />
      }
    </div>
  )
}

export default Message
