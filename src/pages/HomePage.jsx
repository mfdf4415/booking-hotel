import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const HomePage = () => {
  const { data, error, isLoading } = useFetch(
    "http://localhost:5000/hotels",
    ""
  );
  const [showDescId, setShowDescId] = useState(0);

  const sortedDtaa = data.slice(0,5);

  return (
    <div>
      <h2 className="text-bold text-2xl font-extrabold">Trending desnation</h2>
      <p className="text-light mb-5">
        Most popular choices for travellers from iran
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))] gap-5">
        {sortedDtaa.map((item) => (
          <div
            onMouseEnter={() => setShowDescId(item.id)}
            onMouseLeave={() => setShowDescId(0)}
            key={item.id}
            className="relative w-full h-[258px] col-span-2  first:col-span-4  bg-border overflow-hidden rounded-lg cursor-pointer"
          >
            <span className="absolute top-5 left-5 z-50 text-[#fff] font-bold text-2xl">
              {item.host_name}
            </span>
            <img
              src={item.picture_url.url}
              className="absolute top-0 h-full w-full z-40 object-cover brightness-75 transition-all hover:brightness-50"
            />
            <span
              className={`absolute bottom-[-100%] z-50 text-[#fff] text-lg font-medium transition-all ${
                showDescId === item.id && "bottom-5 left-5 right-5"
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
