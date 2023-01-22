import { useRef } from "react"
import HowItWorks from "./home/HowItWorks"
import Landing from "./home/Landing"
import HomeNav from "./home/HomeNav"
import TryNow from "./home/TryNow"

const Home: React.FC = () => {
  const ref = useRef<any>();

  return (<>
    <HomeNav parentRef={ref} />
    <div ref={ref}>
      <Landing />
      <HowItWorks />
      <TryNow />
    </div>
  </>)
}

export default Home
