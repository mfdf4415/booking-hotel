import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ShowMap from "../components/ShowMap";
import { PiUsersThreeFill } from "react-icons/pi";
import { TbBathFilled } from "react-icons/tb";
import { MdBedroomParent } from "react-icons/md";

const HotelDetailsPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(
    "http://localhost:5000/hotels",
    `id=${id}`
  );

  const sortData = data[0];
  console.log(sortData);
  return (
    sortData && (
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
        <Description data={sortData} />
      </div>
    )
  );
};

export default HotelDetailsPage;

const Amenities = ({ data }) => {
  const sortedData = data.slice(0, 6);
  return (
    <div id="Amenities" className="">
      <h3 className="text-bold mb-4">Popular amenities</h3>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(25rem,_1fr))] gap-5">
        {sortedData.map((item) => (
          <div className="flex-1 text-light text-[14px]">&bull; {item}</div>
        ))}
      </div>
    </div>
  );
};
const Overview = ({ data }) => {
  return (
    <div id="Overview" className="py-10 flex gap-5 items-start">
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
        <ShowMap lat={data.latitude} lng={data.longitude} />
        <p className="text-light max-w-[300px] text-[14px] my-4">
          {data.street}
        </p>
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="flex gap-4 place-items-center text-light max-w-[700px] text-[14px]">
              <PiUsersThreeFill className="text-bold  text-[20px]" />
              Accommodates:
            </span>
            <span className="text-light text-[14px]">{data.accommodates}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="flex gap-4 place-items-center text-light max-w-[700px] text-[14px]">
              <TbBathFilled className="text-bold  text-[20px]" /> Bathrooms
            </span>
            <span className="text-light text-[14px]">{data.bathrooms}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="flex gap-4 place-items-center text-light max-w-[700px] text-[14px]">
              <MdBedroomParent className="text-bold  text-[20px]" /> Bedrooms
            </span>
            <span className="text-light text-[14px]">{data.bedrooms}</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="flex gap-4 place-items-center text-light max-w-[700px] text-[14px]">
              <TbBathFilled className="text-bold  text-[20px]" /> Bathrooms
            </span>
            <span className="text-light text-[14px]">{data.bathrooms}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const Nav = () => {
  return (
    <nav className="sticky top-0">
      <ul className="flex items-center justify-start gap-5 py-3 border-b-[.5px] border-solid border-[#ccc]">
        <li>
          <a href="#Overview" className="text-light text-[14px]">
            Overview
          </a>
        </li>
        <li>
          <a href="#Amenities" className="text-light text-[14px]">
            Amenities
          </a>
        </li>
        <li>
          <a href="#Description" className="text-light text-[14px]">
            Features
          </a>
        </li>
        <li>
          <a className="text-light text-[14px]">Address</a>
        </li>
      </ul>
    </nav>
  );
};
const Description = ({ data }) => {
  return (
    <div id="Description" className="my-28 flex flex-col gap-10">
      <div className="flex items-start justify-between gap-10">
        <h3 className="text-bold text-2xl font-medium">About this property</h3>
        <p className="text-light flex-1 text-[14px] ">{data.description}</p>
      </div>
      <div className="flex items-start justify-between gap-10">
        <h3 className="text-bold text-2xl font-medium">Features</h3>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(25rem,_1fr))] gap-5">
          {data.features.map((item) => (
            <div className="text-light flex-1 text-[14px]">{item}</div>
          ))}
        </div>
      </div>
      <div className="flex items-start justify-between gap-10">
        <h3 className="text-bold text-2xl font-medium">Transit</h3>
        <p className="text-light flex-1 text-[14px]">{data.transit}</p>
      </div>
    </div>
  );
};
