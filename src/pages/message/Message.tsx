import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react"
import { CopyBlock, tomorrowNight } from "react-code-blocks";
import { CODE_BLOCK_LANG, PROGRAM_LANG } from "../../const/languages";
import { FONT_WEIGHT } from "../../const/styles";

const Bubble = styled.div`
  width: auto;
  max-width: 500px;
  font-size: 18px;
  border-radius: 10px;
  padding: 30px 40px;
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
          css={css`
            background: skyblue;
            width: 81px;
            height: 81px;
            border-radius: 50px;
            display: inline-block;
          `}
        />
      }
      {!code ?
        <Bubble
          css={css`
            background: ${isAi ? "#1C1C1C" : "darkblue"};
          `}
        >
          {children}
          {!isAi && language &&
            <div
              css={css`
                font-size: 14px;
                margin-bottom: -5px;
                text-align: right;
                opacity: 0.5;
                font-weight: ${FONT_WEIGHT.BOLD};
              `}
            >
              in {language}
            </div>
          }
        </Bubble>
        :
        <CopyBlock
          text={code.text.replace("\t", "    ")}
          language={CODE_BLOCK_LANG[code.language]}
          theme={tomorrowNight}
          codeBlock
          showLineNumbers
          wrapLongLines
          customStyle={{
            borderRadius: 10,
            padding: "20px 40px 20px 25px",
            fontFamily: "Input Mono, monospace",
            maxWidth: 800
          }}
        />
      }
    </div>
  )
}

export default Message
