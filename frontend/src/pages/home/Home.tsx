import Carousel from "react-multi-carousel";
import Hero from "../../components/hero/Hero";
import Slider from "../../components/slider/Slider";

const PageHeading = ({
  heading,
  shopNow,
}: {
  heading: string;
  shopNow: string;
}) => {
  return (
    <div className="flex w-full justify-between">
      <h1 className="text-2xl">{heading}</h1>
      <button className="bg-gray-200 px-12 py-2 rounded-sm text-xl">{shopNow}</button>
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 ">
        <Slider />
        <Hero />
        <PageHeading heading={"Latest Product"} shopNow={"Shop Now >>"} />
      </div>
    </div>
  );
};

export default Home;
