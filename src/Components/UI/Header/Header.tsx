import { useState } from "react";
import BreadCrumbs from "../BreadCrumbs";
import Controlls from "../Control/Controlls";
import Transfer from "../Transaction/Transfer";

const Header = () => {
  const [isSending, setIsSending] = useState(false);
  return (
    <>
      <div className="relative h-1/2 max-sm:h-auto bg-gradient-to-tr from-red-900 to-black flex flex-col gap-1 max-sm:px-0  py-2 justify-center text-white px-10 ">
        <BreadCrumbs />
        <Controlls sendingStatus={isSending} switchStatus={setIsSending} />
        <Transfer sendingStatus={isSending} changeStatus={setIsSending} />
      </div>
    </>
  );
};

export default Header;
