import usFlag from "../assets/images/18165.jpg";
import { GoQuestion } from "react-icons/go";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const HeaderHotels = () => {
  return (
    <header className="w-full ">
      <div className="flex items-center justify-between px-36 pt-4 pb-10 bg-gradient-to-l from-primary to-[#026ce4]">
        <h1 className="text-[#fff] text-2xl font-bold"><Link to="/">Booking.App</Link></h1>
        <div className="flex gap-6 items-center">
          <div className="text-[#fff] font-medium cursor-pointer">IRR</div>
          <img src={usFlag} className="w-7 h-7 rounded-full cursor-pointer" />
          <GoQuestion className="text-[#fff] text-2xl cursor-pointer" />
          <button className="px-2 py-1 bg-[#fff] text-sm text-[#026ce4] rounded-sm border-0 font-semibold ">
            Sign in
          </button>
        </div>
      </div>
      <div className="px-36 relative -top-6">
        <SearchBar />
      </div>
    </header>
  );
};

export default HeaderHotels;
