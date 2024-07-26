import { useState } from "react";
import { servicePropTypes } from "../Common/service.proptypes";
import image_1 from "../../../assets/8b16b717a7b6ede88d2b5558130feeef.png";
import image_2 from "../../../assets/f7fab2df70297b9284fd3e5f2c5ca726.jpeg";
import Service from "../Common/Service";
import { ArrowRight } from "react-huge-icons/solid";

const Main = () => {
  const [services] = useState<servicePropTypes[]>([
    { image: image_1, text: "Put your money to work and earn more!" },
    {
      image: image_2,
      text: "Convert your rewards to spendable currency, and withdraw to your wallet !",
    },
  ]);

  return (
    <>
      <div className="relative h-1/2 bg-white  max-sm:w-full flex ">
        <div className="flex w-full px-2 py-5 flex-col ">
          <h1 className=" text-4xl text-red-800 font-extrabold ">
            Dont Miss{" "}
            <ArrowRight className="text-3xl inline text-red-900 mb-0.5" />
          </h1>
          <div className="relative flex w-full gap-2 max-sm:flex-col max-md:flex-col ">
            {services.map((service) => (
              <Service image={service.image} text={service.text} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
