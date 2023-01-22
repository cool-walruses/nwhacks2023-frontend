import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CopyBlock, tomorrowNight } from "react-code-blocks";



const Code: React.FC = () => {
  return (
      <CopyBlock
        text={""}
        language="go"
        theme={tomorrowNight}
        showLineNumbers
        wrapLines
      />
  )
}

export default Code
