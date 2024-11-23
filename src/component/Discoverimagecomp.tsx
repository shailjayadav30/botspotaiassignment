import comm from '../images/communication.png';
import roommate from '../images/roommate.png';
import discover from '../images/discover.png';

const imageData = [
  { src: comm, text: 'Match with your ideal roommate' },
  { src: roommate, text: ' Seamless communication' },
  { src: discover, text: 'Discover activities around you' },
];

const Discoverimagecomp = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 sm:p-14 bg-white">
      {imageData.map((item, index) => (
        <div
          key={index}
          className="h-[17rem] w-[14rem] flex flex-col justify-between items-center rounded-lg border border-gray-400 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="flex items-center mt-6 justify-center">
            <img
              src={item.src}
              alt={item.text}
              className="h-[10rem] w-[10rem]  object-contain "
            />
          </div>
          <p className="w-full py-4 pl-6 pr-6 text-lg font-semibold text-gray-800 bg-white text-center">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Discoverimagecomp;
