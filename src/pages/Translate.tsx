import Chat from "./translate/Chat"
import NavBar from "./home/NavBar"
import Dropdown from "./translate/Dropdown"

const Translate: React.FC = () => {
  return (
    <>
      <NavBar />
      <Chat />
      <Dropdown />
    </>
  )
}

export default Translate
