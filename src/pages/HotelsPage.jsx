import HotelsList from "../components/HotelsList";
import mapImg from "../assets/images/bg_mapV8.87d8e59989a401c2ce2bc772fea4a32a.png";

const HotelsPage = () => {
  return (
    <div className="flex gap-4">
      <div className="relative w-[270px] h-[120px] flex items-center justify-center">
        <img src={mapImg} className="absolute object-cover top-0 left-0 w-full h-full" />
        <button className="bg-primary text-[#fff] py-2 px-4 rounded-lg z-50">Show on map</button>
      </div>
      <HotelsList />
    </div>
  );
};

export default HotelsPage;
