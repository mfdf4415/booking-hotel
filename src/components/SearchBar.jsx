import { LiaBedSolid, LiaPlusSolid, LiaMinusSolid } from "react-icons/lia";
import { CiCalendarDate } from "react-icons/ci";
import { PiUser } from "react-icons/pi";
import { useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [desenation, setDesenation] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const refDate = useRef();
  useOutsideClick(refDate, () => setOpenDate(false), "dateDropdown");
  const navigate = useNavigate();

  const handleSetOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name]++ : options[name]--,
      };
    });
  };

  const handleSearch = () => {
    const encodedParams = createSearchParams({
      date: JSON.stringify(date),
      options: JSON.stringify(options),
      desenation: desenation,
    });

    navigate({ pathname: "/hotels", search: encodedParams.toString() });
  };

  return (
    <div className="bg-[#fff] p-5 shadow-md rounded-md flex gap-2 flex-wrap w-full items-center z-50">
      <div className="rounded-md flex-auto border-solid border-[1px] border-border">
        <div className="flex gap-2 px-3 py-4 rounded-md">
          <LiaBedSolid className="text-light text-2xl " />
          <input
            onChange={(e) => setDesenation(e.target.value)}
            value={desenation}
            type="text"
            className="flex-auto text-bold placeholder:text-bold"
            placeholder="Where are you going?"
          />
        </div>
      </div>
      <div className="relative rounded-md flex-auto border-solid border-[1px] border-border">
        <div
          onClick={() => setOpenDate(!openDate)}
          className="flex gap-2 px-3 items-center py-4 rounded-md cursor-pointer"
          id="dateDropdown"
        >
          <CiCalendarDate className="text-light text-2xl" />
          <div className="flex-1 text-bold">
            {`${format(date[0].startDate, "PP")} to ${format(
              date[0].endDate,
              "PP"
            )}`}
          </div>
        </div>
        {openDate && (
          <DateRangePicker
            onChange={(item) => setDate([item.selection])}
            ranges={date}
            minDate={new Date()}
            moveRangeOnFirstSelection={false}
            className="absolute"
            ref={refDate}
          />
        )}
      </div>
      <div className="relative rounded-md flex-auto border-solid border-[1px] border-border">
        <div
          id="optionsDropdown"
          onClick={() => setOpenOptions(!openOptions)}
          className="flex gap-2 px-3 items-center py-4 rounded-md cursor-pointer"
        >
          <PiUser className="text-light text-2xl" />
          <div className="flex-1 text-bold placeholder:text-bold">
            {options.adult} adult &bull; {options.children} children &bull;{" "}
            {options.room} room
          </div>
        </div>
        {openOptions && (
          <GuestOptions
            setOpenOptions={setOpenOptions}
            options={options}
            handleSetOptions={handleSetOptions}
          />
        )}
      </div>
      <div className="rounded-md flex-auto">
        <button
          onClick={handleSearch}
          className="w-full text-lg font-semibold bg-primary px-8 py-4 text-[#fff] rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

const GuestOptions = ({ options, handleSetOptions, setOpenOptions }) => {
  const refOptions = useRef();
  useOutsideClick(refOptions, () => setOpenOptions(false), "optionsDropdown");
  return (
    <div
      ref={refOptions}
      className="absolute top-16 flex flex-col gap-2 bg-[#fff] w-full shadow-md p-6 rounded-md"
    >
      <Guest
        type="adult"
        options={options}
        min={1}
        handleSetOptions={handleSetOptions}
      />
      <Guest
        type="children"
        options={options}
        min={0}
        handleSetOptions={handleSetOptions}
      />
      <Guest
        type="room"
        options={options}
        min={1}
        handleSetOptions={handleSetOptions}
      />
      <button
        onClick={() => setOpenOptions(false)}
        className="border-solid border-[1px] border-primary text-primary rounded-md mt-2  py-1"
      >
        Done
      </button>
    </div>
  );
};

const Guest = ({ type, options, min, handleSetOptions }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="flex-1 text-bold">{type}:</span>
      <div className="flex place-items-center border-solid border-[1px] border-[#999] rounded-md">
        <button
          className="text-xl cursor-pointer text-primary px-4 py-2 disabled:cursor-not-allowed"
          disabled={min >= options[type]}
          onClick={() => handleSetOptions(type, "dec")}
        >
          <LiaMinusSolid />
        </button>
        <span className="text-bold p-2">{options[type]}</span>
        <button className="text-xl cursor-pointer text-primary px-4 py-2">
          <LiaPlusSolid onClick={() => handleSetOptions(type, "inc")} />
        </button>
      </div>
    </div>
  );
};
