import Footer from "./UI/Common/Footer";
import Header from "./UI/Header/Header";
import Main from "./UI/Section/Main";

const Bank = () => {
  return (
    <>
      <div className="relative h-auto flex flex-col gap-5 bg-white">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Bank;
