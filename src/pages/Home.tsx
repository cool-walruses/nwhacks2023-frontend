import { useRef } from "react"
import HowItWorks from "./home/HowItWorks"
import Landing from "./home/Landing"
import NavBar from "./home/NavBar"
import TryNow from "./home/TryNow"

const Home: React.FC = () => {
  const ref = useRef<any>();

  return (
    <div ref={ref}>
      <NavBar parentRef={ref} />
      <Landing />
      <HowItWorks />
      <TryNow />
    </div>
  )
}

export default Home
