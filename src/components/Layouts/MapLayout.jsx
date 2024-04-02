import { Outlet } from "react-router-dom";
import SearchBar from "../SearchBar";

const MapLayout = () => {
  return (
    <>
      <SearchBar />
      <div className="px-36 py-24">{<Outlet />}</div>
    </>
  );
};

export default MapLayout;
