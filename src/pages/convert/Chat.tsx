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

                </div>
            </div>
            <div css={css`
                    padding: 30px;
                    // backgroundColor: "red";
                `
            }>
                <input type="text" css={css`
                        width: 100%;
                        height: 75px;
                        text-align: top;
                        margin: auto;
                        padding-top: 5px;
                        padding-bottom: 10px;
                        padding-left: 10px;
                        padding-right: 10px;
                        box-sizing: border-box;
                        background-color: #E3E3E3;
                        font-family: input mono;
                        border-radius: 7px;
                        box-shadow: 2px 4px #959595;
                    `
                } />
            </div>
        </div>
    </div>
  )
}

export default Chat
