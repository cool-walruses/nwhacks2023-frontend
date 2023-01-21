import Intro from "./home/Intro"
import Landing from "./home/Landing"
import NavBar from "./home/NavBar"

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Landing />
      <Intro />
    </>
  )
}

export default Home
