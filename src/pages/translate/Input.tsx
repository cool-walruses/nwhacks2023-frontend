import { css } from "@emotion/react"
import { useState } from "react";
import { Send } from "react-feather";
import { FONT_WEIGHT, transition } from "../../const/styles"

type InputProps = {
  isLoading?: boolean;
  handleSubmit?: (str: string) => any;
}

const Input: React.FC<InputProps> = ({ isLoading, handleSubmit = () => {} }) => {
  const [input, setInput] = useState("");

  const handleChange = (event: any) => setInput(event.target.value);

  const handleSend = () => {
    if (!isLoading) {
      handleSubmit(input);
      setInput("");
    }
  }

  return (<>
    <input
      type="text"
      value={input}
      onChange={handleChange}
      placeholder="Enter your prompt here..."
      onKeyDown={(event) => {
				if (event.key === "Enter") {
					handleSend();
				}
			}}
      css={css`
        background: #222222;
        color: #ffffff;
        width: 100%;
        padding: 20px 30px;
        padding-right: 230px;
        font-family: inherit;
        font-size: 18px;
        font-weight: ${FONT_WEIGHT.REGULAR};
        border-radius: 100px;
        border: none;
        flex-grow: 0;
        flex-shrink: 0;
        ${transition("background")}

        &::placeholder {
          color: #ffffff;
          ${transition("opacity")}
          opacity: 0.2
        }

        &:focus {
          outline: none;
          background: #1c1c1c;

          &::placeholder {
            opacity: 0;
          }
        }
      `}
    />
    <button
      onClick={handleSend}
    >
      <Send />
    </button>
  </>)
}

export default Input
