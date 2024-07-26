import { useState } from "react";
import { RemoveCircle, SendFast } from "react-huge-icons/solid";
import Button from "../Common/Button";
import { status } from "./controller";

const Transfer = ({ sendingStatus, changeStatus }: status) => {
  //handle cnage func
  const handleChangeStatus = () => {
    changeStatus(!sendingStatus);
  };

  //controll object state
  const [controlls] = useState([
    {
      icon: <SendFast className="text-3xl max-sm:text-white text-white" />,
      id: 2,
      text: "Transfer",
    },
  ]);

  return (
    <>
      <div className={`relative flex justify-center items-center  z-20`}>
        <div
          className={`absolute bg-gradient-to-br from-transparent gap-3   ${
            sendingStatus ? "h-96" : "h-0"
          }  to-red-950 justify-end text-center items-center px-14 transition-all duration-500  max-sm:px-2  
          ${
            sendingStatus && "max-sm:h-72"
          } w-1/2 rounded-lg max-sm:rounded-none max-sm:w-full  flex
         `}
        >
          {sendingStatus && (
            <RemoveCircle
              className="text-6xl absolute right-2 top-2 text-gray-200"
              onClick={handleChangeStatus}
            />
          )}

          <input
            type="text"
            placeholder="Reciepient address"
            className={`w-full px-3 py-5 max-sm:py-3  transition duration-100  rounded-md text-black bg-gray-50 border brder-gray-50  text-xl outline-red-800 outline-double border-gray-50 ${
              sendingStatus ? "opacity-100" : "opacity-0"
            }`}
          />

          {controlls.map(({ text, icon, id }) => (
            <span key={id}>
              {sendingStatus && (
                <Button text={text} icon={icon} callback={() => alert("sending dbrc...")} />
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Transfer;
