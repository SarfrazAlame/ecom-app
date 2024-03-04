import { useState } from "react";
import { SliderProduct } from "./sliderProducts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ProductI {
  imageUrl: string;
  heading: string;
  description: string;
}

const Slider = () => {
  const [slider, setSlider] = useState(0);

  function leftMove() {
    for (let i = 3; i > 0; i--) {
      setSlider(i);
    }
  }
  function rightMove() {
    for (let i = 0; i < 3; i++) {
      setSlider(i);
    }
  }

  return (
    <div className="w-full flex justify-center">
      {SliderProduct.map((product: ProductI, index: number) => {
        return (
          <div key={index}>
            {slider === index && (
              <div className="flex items-center">
                <FaArrowLeft
                  className="cursor-pointer bg-gray-200 h-20 w-6"
                  onClick={() => leftMove()}
                />
                <img src={product.imageUrl} alt={product.heading} />
                <FaArrowRight
                  className="cursor-pointer bg-gray-200 h-20 w-6"
                  onClick={() => rightMove()}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
