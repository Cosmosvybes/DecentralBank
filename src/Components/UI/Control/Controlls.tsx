import Button from "../Button";
import BTN from "../Common/Button";
import {
  SendFast,
  Deposit,
  Withdraw,
  CoinDollar,
} from "react-huge-icons/solid";
import { useState } from "react";

interface sendingFunds {
  sendingStatus: boolean;
  switchStatus: any;
}

const Controlls = ({ sendingStatus, switchStatus }: sendingFunds) => {
  const [controlls] = useState([
    {
      icon: (
        <CoinDollar className="text-3xl text-white transition duration-500 max-sm:text-gray-50" />
      ),
      id: 4,
      text: "Top up",
      sendCallback: () => console.log("hello world"),
    },
    {
      icon: <Deposit className="text-3xl max-sm:text-gray-50 text-white" />,
      id: 2,
      text: "Deposit",
      sendCallback: () => console.log("hello world"),
    },
    {
      text: "Withdraw",
      icon: <Withdraw className="text-3xl text-white max-sm:text-gray-50" />,
      id: 1,
      sendCallback: () => console.log("hello world"),
    },
    {
      icon: <SendFast className="text-3xl text-white max-sm:text-gray-50" />,
      id: 3,
      text: "Send",
      sendCallback: () => switchStatus(!sendingStatus),
    },
  ]);

  return (
    <>
      <div className="relative  flex px-1 py-2 flex-col h-auto  gap-3 rounded-xl ">
        <div className="relative flex justify-between  items-center">
          <div className="relative justify-center flex-col  items-center">
            <h1 className="text-white text-xl font-nomal ">
              {" "}
              Available Balance{" "}
            </h1>
            <h1 className="text-white text-6xl max-sm:text-3xl  mt-2 font-extrabold">
              $ DBC 0.00{" "}
            </h1>
          </div>
          <Button />
        </div>

        <div className="relative flex justify-start items-center gap-2 py-2 px-2   w-full  max-sm:border-none max-sm:px-2 max-sm:h-44  max-sm:grid grid-cols-4 max-sm:gap-2 max-sm:py-2 max-sm:w-full max-sm:justify-centermax-sm:shadow-none max-sm:rounded-md h-24 rounded-xl ">
          {controlls.map(({ text, icon, sendCallback, id }) => (
            <BTN text={text} icon={icon} key={id} callback={sendCallback} />
          ))}
        </div>

        <hr className=" border border-gray-200 " />
        <div className="relative justify-end flex-col flex  items-end w-full mb-3 ">
          <p className="text-white text-xl font-normal">
            {" "}
            Total Reward Balance{" "}
          </p>
          <h1 className="text-white text-3xl flex justify-center items-center gap-2 font-bold">
            <CoinDollar className="inline text-white text-2xl mt-1" /> DBRC 0.00{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Controlls;
