const Hotel = ({ data }) => {
  return (
    <div className="bg-[#fff] border-[.5px] border-solid border-[#ccc] rounded-xl flex overflow-hidden">
      <div className="w-[35%]">
        <img src={data.picture_url.url} className="w-full h-full" />
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-bold text-lg font-medium">{data.name}</h2>
        <span className="text-light">{data.city}</span>
        <div className="text-point">{data.features[0]}</div>
        <p className="text-light text-[14px] my-2">{data.summary}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <span className="bg-point text-[#fff] py-1 px-2 rounded-lg text-sm font-medium">
              {data.review_scores_rating}
            </span>
            <div>
              <div className="text-bold text-[14px] font-medium">
                {data.cancellation_policy}
              </div>
              <div className="text-light text-[12px]">
                {data.number_of_reviews} reviews
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-bold text-lg font-medium">{data.price}$</div>
            <span className="text-light text-[12px]">
              includes taxes and feeds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
