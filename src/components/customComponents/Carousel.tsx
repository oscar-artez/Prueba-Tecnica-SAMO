import { useState } from "react";

type Props = {
    photos: Array<string>;
}

export default function Carousel({photos} : Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? photos.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return(
        <div>
        <div className="relative w-full h-64 my-4">
          <img
            src={photos[currentIndex]}
            alt={`Foto ${currentIndex + 1}`}
            className="object-cover h-full w-full rounded"
          />
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black rounded-full p-2"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black rounded-full p-2"
          >
            &gt;
          </button>
        </div>
      </div>
    )
}