import Heading from "./Heading"
import Navbar from "./Navbar"
import Allflat from "./Allflats"
import Page2 from "../pages/Pagess2"
import Page3 from "../pages/Pagess3"


const Home = () => {
  return (
<div className="bg-[#F3F5FD] w-screen">
    <Heading/>
    <Navbar/>
    <Allflat/>
    <Page2/>
    <Page3/>
</div>
  )
}

export default Home
