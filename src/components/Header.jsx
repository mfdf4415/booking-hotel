import usFlag from "../assets/images/18165.jpg";
import { GoQuestion } from "react-icons/go";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="w-full px-36 py-8 bg-gradient-to-l from-primary to-[#026ce4]">
      <div className="flex items-center justify-between">
        <h1 className="text-[#fff] text-2xl font-bold">Booking.App</h1>
        <div className="flex gap-6 items-center">
          <div className="text-[#fff] font-medium cursor-pointer">IRR</div>
          <img src={usFlag} className="w-7 h-7 rounded-full cursor-pointer" />
          <GoQuestion className="text-[#fff] text-2xl cursor-pointer" />
          <button className="px-2 py-1 bg-[#fff] text-sm text-[#026ce4] rounded-sm border-0 font-semibold ">
            Sign in
          </button>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-[#fff] text-5xl font-medium">
          Finde your next stay
        </h2>
        <p className="text-[#fff] text-xl mt-2">
          Search low prices on hotels, homes and much more....
        </p>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
