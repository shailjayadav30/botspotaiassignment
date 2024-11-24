import React, { useState } from 'react';
import RentalCard from "./Flat";
import flat1 from "../images/flat1.png"
import flat2 from "../images/flat2.png"
import flat3 from "../images/flat3.png"

const RentalList: React.FC = () => {
  const rentalData = [
    {
      title: 'Flat In North Goa',
      location: 'Goan Studio Near Vagator Beach',
      rating: 4.94,
      reviews: 31,
      beds: 2,
      originalPrice: 48186,
      discountedPrice: 43788,
      imageUrl: flat1,
    },
    {
      title: 'Studio in Mumbai',
      location: 'Near Marine Drive',
      rating: 4.5,
      reviews: 120,
      beds: 1,
      originalPrice: 35000,
      discountedPrice: 30000,
      imageUrl: flat2,
    },
    {
      title: 'Apartment in Kolkata',
      location: 'Near Salt Lake',
      rating: 4.2,
      reviews: 50,
      beds: 3,
      originalPrice: 45000,
      discountedPrice: 42000,
      imageUrl: flat3,
    },
    {
      title: 'Villa in Jaipur',
      location: 'Near City Center',
      rating: 4.8,
      reviews: 75,
      beds: 4,
      originalPrice: 60000,
      discountedPrice: 58000,
      imageUrl: flat1,
    },
    {
      title: 'Flat in Bangalore',
      location: 'Near Whitefield',
      rating: 4.6,
      reviews: 40,
      beds: 2,
      originalPrice: 38000,
      discountedPrice: 36000,
      imageUrl: flat2,
    },
    {
      title: 'Apartment in Kolkata',
      location: 'Near Salt Lake',
      rating: 4.2,
      reviews: 50,
      beds: 3,
      originalPrice: 45000,
      discountedPrice: 42000,
      imageUrl: flat3,
    },
    {
      title: 'Villa in Jaipur',
      location: 'Near City Center',
      rating: 4.8,
      reviews: 75,
      beds: 4,
      originalPrice: 60000,
      discountedPrice: 58000,
      imageUrl: flat1,
    },
    {
      title: 'Flat in Bangalore',
      location: 'Near Whitefield',
      rating: 4.6,
      reviews: 40,
      beds: 2,
      originalPrice: 38000,
      discountedPrice: 36000,
      imageUrl: flat2,
    },
  ];

  const [visibleRentals, setVisibleRentals] = useState(3);

  const handleViewMore = () => {
    setVisibleRentals((prev) => prev + 3);
  };

  return (
    <div className="p-4  sm:pl-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {rentalData.slice(0, visibleRentals).map((rental, index) => (
          <RentalCard key={index} {...rental} />
        ))}
      </div>

      {visibleRentals < rentalData.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="px-6 py-2 bg-[#0D28AB] text-white rounded-full "
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default RentalList;
