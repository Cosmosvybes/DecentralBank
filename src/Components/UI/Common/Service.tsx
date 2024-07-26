import { servicePropTypes } from "./service.proptypes";
const Service = ({ image, text }: servicePropTypes) => {
  return (
    <>
      <div className="relative w-1/2 h-auto border  max-sm:w-full rounded-lg flex flex-col">
        <img src={image} alt="image" className="object-contain w-full h-72" />
        <p className="text-red-900 font-normal text-2xl text-center">{text}</p>
      </div>
    </>
  );
};

export default Service;
