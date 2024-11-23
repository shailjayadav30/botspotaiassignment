import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaHeart as HeartFilled, FaRegHeart as HeartOutlined } from 'react-icons/fa'; 

interface RentalCardProps {
  title: string;
  location: string;
  rating: number;
  reviews: number;
  beds: number;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
}

const RentalCard: React.FC<RentalCardProps> = ({
  title,
  location,
  rating,
  reviews,
  beds,
  originalPrice,
  discountedPrice,
  imageUrl,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="max-w-sm   ">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-lg" />
        <button
          onClick={toggleLike}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
        >
          {isLiked ? (
            <HeartFilled className="text-red-500" />
          ) : (
            <HeartOutlined className="text-white" />
          )}
        </button>
      </div>

      <div className="p-4">
       <div className='flex justify-between items-center '>
       <h3 className="font-bold text-lg mb-1 text-[#222222]">{title}</h3>
        <div className="flex items-center ">
          <FaStar className="text-blue-900 mr-1" />
          <span className="text-[#333333] font-semibold">{rating}</span>
          <span className="text-[#333333] ml-1">({reviews})</span>
        </div>
       </div>
        <p className="text-[#666666] mb-2">{location}</p>

       

        <p className="text-[#666666] mb-1">{beds} beds</p>

        <div className="flex items-center">
          <span className="line-through text-[#666666] mr-2">₹{originalPrice}</span>
          <span className="text-[#333333] font-bold">₹{discountedPrice} month</span>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
