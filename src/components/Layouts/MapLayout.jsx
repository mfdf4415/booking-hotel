import { Outlet } from "react-router-dom";
import SearchBar from "../SearchBar";

const MapLayout = () => {
  return (
    <>
      <SearchBar />
      <div>{<Outlet />}</div>
    </>
  );
};

export default MapLayout;
