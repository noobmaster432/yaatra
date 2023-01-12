import { urlFor } from "../sanity";

const Review = ({ review }) => {
  return (
    <div className="bg-slate-100 shadow-md mt-10 p-6 md:w-1/2 mb-8">
      <h1 className="mb-2 font-semibold text-2xl text-zinc-900">
        {review.rating}
      </h1>
      <div className="bg-gray-400 h-[1px] my-4" />
      <div className="flex items-center">
        <div>
          <img
            src={urlFor(review.traveller.image)
              .width(100)
              .height(100)
              .crop("focalpoint")
              .auto("format")}
            className="rounded-full"
          />
          <h2 className="font-sans font-semibold text-xl text-center">
            {review.traveller.name}
          </h2>
        </div>
        <p className="font-serif italic pl-8">{review.reviewDescription}</p>
      </div>
    </div>
  );
};

export default Review;
