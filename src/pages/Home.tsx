import { useRef } from "react"
import HowItWorks from "./home/HowItWorks"
import Landing from "./home/Landing"
import NavBar from "./home/NavBar"
import Team from "./home/Team"

const Home: React.FC = () => {
  const ref = useRef<any>();

  return (<>
    <NavBar parentRef={ref} />
    <div ref={ref}>
      <Landing />
      <HowItWorks />
      <Team />
    </div>
  </>)
}

export default Home
