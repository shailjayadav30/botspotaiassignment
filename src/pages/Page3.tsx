import Navbar3 from "../component/Navbar3"
import Section3 from "../component/Section3"

const Page3 = () => {
  return (
    <>
       <div className="flex flex-col items-center justify-center pt-[4rem] bg-gray-100 p-6">
    <h1 className="text-4xl md:text-5xl text-center text-gray-800  mb-2">
    Leading <span className="text-[#B138C9]">Localities </span>  to Explore  
    </h1>
    <p className="text-sm text-gray-600 max-w-2xl text-center ">
    Explore a selection of the most desirable neighborhoods, where vibrant communities and
    <br /> exceptional amenities come together to create your perfect living environment.
    </p>
  </div>
  <Navbar3/>
  <Section3/>
    </>
  )
}

export default Page3

