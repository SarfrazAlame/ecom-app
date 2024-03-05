import { useEffect, useState } from "react";
import { SliderProduct } from "./sliderProducts";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ProductI {
  imageUrl: string;
  heading: string;
  description: string;
}

const Slider = () => {
  const [slider, setSlider] = useState(0);
  const numOfslider = SliderProduct.length;

  function leftMove() {
    if (slider !== numOfslider - 1) {
      setSlider(slider + 1);
    }
  }
  function rightMove() {
    if (slider !== 0) {
      setSlider(slider - 1);
    }
  }

  useEffect(() => {
    setSlider(0);
  }, []);

  return (
    <div className="w-full flex justify-center">
      {SliderProduct.map((product: ProductI, index: number) => {
        return (
          <div key={index} className="">
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
