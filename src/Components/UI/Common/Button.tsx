import { button } from "./button.types";
const Button = ({ text, callback, icon }: button) => {
  return (
    <>
      <button
        className="shadow-md shadow-black  rounded-lg text-white duration-700 transition py-5 h-18 max-sm:h-14 bg-gradient-to-tr from-red-900 to-black  w-32 max-sm:w-auto  gap-1 px-3 text-sm flex justify-center items-center hover:bg-gradient-to-tr hover:from-black hover:to-red-800"
        onClick={callback}
      >
        {text}
        {icon}
      </button>
    </>
  );
};

export default Button;
