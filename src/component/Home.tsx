import Heading from "./Heading"
import Navbar from "./Navbar"
import Allflat from "./Allflats"
import Page2 from "../pages/page2"
import Page3 from "../pages/Page3"


const Home = () => {
  return (
<div className="bg-[#F3F5FD]">
    <Heading/>
    <Navbar/>
    <Allflat/>
    <Page2/>
    <Page3/>
</div>
  )
}

export default Home
