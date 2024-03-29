import { Outlet } from "react-router-dom";
import HeaderHotels from "../HeaderHotels";


const HotelsLayout = () => {
  return (
    <>
      <HeaderHotels />
      <div className="px-36 py-24 bg-backG">{<Outlet />}</div>
    </>
  );
};

export default HotelsLayout;
