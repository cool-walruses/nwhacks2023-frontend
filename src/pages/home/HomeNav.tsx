import NavBar from "../../components/NavBar"

type HomeNavProps = {
  parentRef: any
}

const HomeNav: React.FC<HomeNavProps> = ({ parentRef }) => {
  const handleScroll = (id: string) => {
    const element = parentRef.current.querySelector(`#${id}`);
    console.log(parentRef);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <NavBar>
      <a onClick={() => handleScroll("who")}>Who is it for</a>
      <a onClick={() => handleScroll("how")}>How it works</a>
    </NavBar>
  )
}

export default HomeNav
