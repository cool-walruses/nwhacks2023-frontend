import { css } from "@emotion/react"

const Chat: React.FC = () => {
  return (
    <div
        css={css`
            padding-top: 100px;
            padding-left: 30px;
            padding-right: 30px;
            height: 100vh;
        `}
        >
        <div css={css`
                height: 100%;
                width: 100%;
                background-color: #F5F5F5;
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                box-shadow: 2px 4px 3px #000;
            `
        }>
            <div css={css`
                    flex: 1;
                    overflow-y: scroll;
                `
            }>
                <div css={css`
                    height: 100vh;
                `}>
                    {/* insert textbubbles here */}
                </div>
            </div>
            <div css={css`
                    padding: 30px;
                    // backgroundColor: "red";
                `
            }>
                <input type="text"
                    placeholder="Enter your prompt here..."
                    css={css`
                        overflow-y: scroll;
                        // placeholder string should be top aligned like Figma prototype
                        line-height: 150%;
                        width: 100%;
                        height: 75px;
                        text-align: top;
                        margin: auto;
                        padding-top: 5px;
                        padding-bottom: 10px;
                        padding-left: 13px;
                        padding-right: 13px;
                        box-sizing: border-box;
                        background-color: #E3E3E3;
                        border-top-style: hidden;
                        border-right-style: hidden;
                        border-left-style: hidden;
                        font-family: input mono;
                        border-radius: 7px;
                        box-shadow: 2px 4px 3px #959595;
                        outline: none;
                    `
                } />
            </div>
        </div>
    </div>
  )
}

export default Chat
