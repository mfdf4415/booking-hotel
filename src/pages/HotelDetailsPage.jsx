import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import mapImg from "../assets/images/bg_mapV8.87d8e59989a401c2ce2bc772fea4a32a.png";

const HotelDetailsPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(
    "http://localhost:5000/hotels",
    `id=${id}`
  );

  const sortData = data[0];
  console.log(sortData);
  return (
    <div>
      <div className="h-[300px]">
        <img
          className="w-[50%] h-full object-cover"
          src={sortData.picture_url.url}
        />
      </div>
      <Nav />
      <Overview data={sortData} />
      <Amenities data={sortData.amenities} />
    </div>
  );
};

export default HotelDetailsPage;

const Amenities = ({ data }) => {
  return (
    <div className="">
      <h3 className="text-bold text-lg">Popular amenities</h3>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(25rem,_1fr))] gap-5">
        {data.map((item) => (
          <div className="flex-1">{item}</div>
        ))}
      </div>
    </div>
  );
};
const Overview = ({ data }) => {
  return (
    <div id="Overview" className="py-10 flex gap-5 items-center">
      <div className="flex-1 flex flex-col justify-center items-start">
        <h2 className="text-bold text-2xl font-medium">{data.name}</h2>
        <span className="text-light">{data.city}</span>
        <p className="text-light max-w-[700px] text-[14px] my-4">
          {data.neighborhood_overview}
        </p>
        <div className="flex items-center justify-center gap-2">
          <span className="bg-point text-[#fff] py-1 px-2 rounded-lg text-sm font-medium">
            {data.review_scores_rating}
          </span>
          <div>
            <div className="text-bold text-lg font-medium">
              {data.cancellation_policy}
            </div>
            <div className="text-light text-[12px]">
              {data.number_of_reviews} reviews
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-[270px] h-[120px] flex items-center justify-center">
          <img
            src={mapImg}
            className="absolute object-cover top-0 left-0 w-full h-full"
          />
          <button className="bg-primary text-[#fff] py-2 px-4 rounded-lg z-50">
            Show on map
          </button>
        </div>
      </div>
    </div>
  );
};
const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center justify-start gap-5 py-3 border-b-[.5px] border-solid border-[#ccc]">
        <li>
          <a href="#Overview" className="text-light text-[14px]">
            Overview
          </a>
        </li>
        <li>
          <a className="text-light text-[14px]">Amenities</a>
        </li>
        <li>
          <a className="text-light text-[14px]">Features</a>
        </li>
        <li>
          <a className="text-light text-[14px]">Address</a>
        </li>
      </ul>
    </nav>
  );
};
