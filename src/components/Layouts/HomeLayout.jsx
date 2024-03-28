import Header from "../Header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div className="px-36 py-24">{<Outlet />}</div>
    </>
  );
};

export default HomeLayout;
