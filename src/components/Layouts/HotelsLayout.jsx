import { Outlet } from "react-router-dom";


const HotelsLayout = () => {
  return (
    <>
      <Header />
      <div className="px-36 py-24">{<Outlet />}</div>
    </>
  );
};

export default HotelsLayout;
