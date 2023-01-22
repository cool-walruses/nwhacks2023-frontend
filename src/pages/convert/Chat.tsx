import Grid from "@mui/material/Grid"
import ChatBox from "../../components/ChatBox"
import { fontFamily, height, padding } from "@mui/system"

const Chat: React.FC = () => {
  return (
    <div style={
        {
            paddingTop: "100px",
            paddingLeft: "30px",
            paddingRight: "30px",
            height: "100vh",
        }
    }>
        <div style={
            {
                height: "100%",
                width: "100%",
                backgroundColor: "#F5F5F5",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column"
            }
        }>
            <div style={
                {
                    flex: "1",
                    overflowY: "scroll",
                }
            }>
                {/* <div style={{
                    height: "200vh"
                }}>a
                </div> */}
            </div>
            <div style = {
                {
                    padding: "30px",
                    // backgroundColor: "red"
                }
            }>
                <input type="text" style = {
                    {
                        width: "100%",
                        margin: "auto",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        boxSizing: "border-box",
                        backgroundColor: "#E3E3E3",
                        fontFamily: "input mono",
                        borderRadius: "7px",
                        boxShadow: "2px 4px #959595"
                    }
                } />
            </div>
        </div>
    </div>
  )
}

export default Chat
