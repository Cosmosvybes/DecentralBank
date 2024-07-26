import { UserCircle, BellNotification } from "react-huge-icons/solid";

const BreadCrumbs = () => {
  return (
    <>
      <div className="relative h-10   gap-2 px-2 flex justify-between items-center  w-full">
        <h1 className="text-3xl max-sm:text-xl font-normal">Welcome back,</h1>
        <div className="relative h-auto flex justify-center items-center gap-5">
          <UserCircle className="text-5xl text-red-900 " />{" "}
          <BellNotification className="text-5xl text-red-900 " />
        </div>
      </div>
    </>
  );
};

export default BreadCrumbs;
