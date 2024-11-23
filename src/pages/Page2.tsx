import Discoverimagecomp from "../component/Discoverimagecomp"
import Navbar2 from "../component/Navbar2"

const page2 = () => {
  return (
  <div className="h-full">

    <div className="flex flex-col items-center justify-center pt-[4rem] bg-white p-6">
    <h1 className="text-4xl md:text-5xl text-center text-gray-800  mb-2">
    Discover the <span className="text-[#B138C9]">Benefits </span> of <br /> Renting with Us
    </h1>
    <p className="text-sm text-gray-600 max-w-2xl text-center ">
    Beautifully curated rental homes that perfectly match your style and needs, making <br /> your search for the ideal living space effortless and enjoyable.
    </p>
  </div>
  <Navbar2/>
  <Discoverimagecomp/>
  </div>
  )
}

export default page2


