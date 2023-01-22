import { useRef } from "react"
import Intro from "./home/Intro"
import Landing from "./home/Landing"
import NavBar from "./home/NavBar"
import Team from "./home/Team"

const Home: React.FC = () => {
  const ref = useRef<any>();

  return (
    <div ref={ref}>
      <NavBar parentRef={ref} />
      <Landing />
      <Intro />
      <Team />
    </div>
  )
}

export default Home
