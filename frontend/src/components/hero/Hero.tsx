import { IconBase, IconType } from "react-icons";
import { BsMinecartLoaded } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";

const data = [
  {
    icon: FaCarSide,
    title: "Free Shipping",
    desc: "We offer free delivery on your first order",
  },
  {
    icon: MdOutlinePayments,
    title: "Secure Payment",
    desc: "secure payment in FlipZone",
  },
  {
    icon: BsMinecartLoaded,
    title: "Quality Products",
    desc: "We have only quality products",
  },
];

type Idata = {
  icon: IconType;
  title: string;
  desc: string;
}

const Hero = () => {
  return (
    <div className="flex  w-full justify-center gap-16 my-6">
      {data.map((item: Idata) => {
        const Icon = item.icon
        return (
            <div key={item.desc} className="border w-72 px-7 py-3 rounded-sm border-gray-600">
              <Icon className="text-4xl text-pink-500"/>
                <p className="text-xl font-semibold">{item.title}</p>
                <p>{item.desc}</p>
            </div>
        );
      })}
    </div>
  );
};

export default Hero;
