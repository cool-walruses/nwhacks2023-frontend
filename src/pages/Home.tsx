import { useRef } from "react"
import HowItWorks from "./home/HowItWorks"
import Landing from "./home/Landing"
import HomeNav from "./home/HomeNav"
import ReadyToTry from "./home/ReadyToTry"
import WhoCanUse from "./home/WhoCanUse"

const Home: React.FC = () => {
  const ref = useRef<any>();

  return (<>
    <HomeNav parentRef={ref} />
    <div ref={ref}>
      <Landing />
      <WhoCanUse />
      <HowItWorks />
      <ReadyToTry />
    </div>
  </>)
}

export default Home
