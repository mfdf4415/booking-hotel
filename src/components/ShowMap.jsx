import { useNavigate } from "react-router-dom";
import mapImg from "../assets/images/bg_mapV8.87d8e59989a401c2ce2bc772fea4a32a.png";
const ShowMap = ({ lat = 51, lng = 0 }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/map?lat=${lat}&lng=${lng}`);
  };

  return (
    <div className="relative w-[270px] h-[120px] flex items-center justify-center">
      <img
        src={mapImg}
        className="absolute object-cover top-0 left-0 w-full h-full"
      />
      <button
        onClick={handleNavigate}
        className="bg-primary text-[#fff] py-2 px-4 rounded-lg z-50"
      >
        Show on map
      </button>
    </div>
  );
};

export default ShowMap;
