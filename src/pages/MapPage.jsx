import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Hotel from "../components/Hotel"

const MapPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const destenation = searchParams.get("desenation");
  const room = JSON.parse(searchParams.get("options"))?.room;
  const { data, error, isLoading } = useFetch(
    "http://localhost:5000/hotels",
    `q=${destenation || ""}&accommodates_get=${room || ""}`
  );
  const position = [51.505, -0.09];

  return (
    <div className="">
      <MapContainer
        className="h-[100vh] z-30"
        center={position}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {data.map((item) => (
          <Marker position={[item.latitude, item.longitude]}>
            <Popup>
              <Hotel  data={item}/>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      ,
    </div>
  );
};

export default MapPage;
