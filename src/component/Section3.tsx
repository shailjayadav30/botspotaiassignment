



import map from "../images/map.png";

const Section3 = () => {
  const items = [
    { location: "Mira Road", price: "₹9.6K/sq.ft", growth: "1.57%" },
    { location: "Andheri West", price: "₹28.1K/sq.ft", growth: "-4.8%" },
    { location: "Chembur", price: "₹20.9K/sq.ft", growth: "10.7%" },
    { location: "Borivali West", price: "₹22.3K/sq.ft", growth: "-1.00%" },
    { location: "Malad West", price: "₹18.8K/sq.ft", growth: "4.67%" },
    { location: "Kandivali West", price: "₹20.4K/sq.ft", growth: "8.57%" },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full bg-gray-100 p-4 sm:p-8 rounded-lg shadow-lg">
      {/* Table Section */}
      <div className="w-full lg:w-[50%] overflow-x-auto mb-6 lg:mb-0 lg:mr-8">
        <table className="w-full table-auto text-center border-collapse rounded-lg overflow-hidden shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 sm:p-4 border-b border-gray-300">Location</th>
              <th className="p-3 sm:p-4 border-b border-gray-300">Price/sq.ft</th>
              <th className="p-3 sm:p-4 border-b border-gray-300">Growth %</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 transition-colors duration-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-3 sm:p-4 border-b border-gray-200">{item.location}</td>
                <td className="p-3 sm:p-4 border-b border-gray-200">{item.price}</td>
                <td className="p-3 sm:p-4 border-b border-gray-200">{item.growth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[50%] flex justify-center items-center">
        <img
          className="w-full h-64 sm:h-[24.5rem] object-cover rounded-lg shadow-lg"
          src={map}
          alt="Map"
        />
      </div>
    </div>
  );
};

export default Section3;
