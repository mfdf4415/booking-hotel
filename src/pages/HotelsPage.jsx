import HotelsList from "../components/HotelsList";
import ShowMap from "../components/ShowMap";

const HotelsPage = () => {
  return (
    <div className="flex gap-4">
      <ShowMap />
      <HotelsList />
    </div>
  );
};

export default HotelsPage;
