import Intro from "./home/Intro"
import Landing from "./home/Landing"
import NavBar from "./home/NavBar"
import Team from "./home/Team"

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Landing />
      <Intro />
      <Team />
    </>
  )
}

export default Home
