import { ArrowRight } from "react-huge-icons/solid";
const Footer = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center h-auto ">
        <p className="text-gray-500 font-normal text-2xl max-sm:text-sm text-center">
          Decentralized Banking Service Powered by Blockchain, Licensed by
          Ethereum.
        </p>
        <strong className="text-red-900 font-normal flex justify-center items-center">
          <ArrowRight className="text-3xl inline text-red-900 mb-0.5" /> DB ULTD
          &copy; {new Date().getFullYear()}
        </strong>
      </div>
    </>
  );
};

export default Footer;
