import { StarIcon } from "@heroicons/react/24/solid";
import { urlFor } from "../sanity";

function PlaceCard({ property }) {
  return (
    <div
      key={property._id}
      className="m-2 cursor-pointer hover:scale-105 transition transform duration-300 ease-out"
    >
      <img
        src={urlFor(property.mainImage)}
        className="h-60 object-cover rounded-2xl"
      />
      <h3 className="font-sans font-semibold px-2 text-center text-lg py-2">
        {property.title}
      </h3>
      <div className="flex justify-between pt-3">
        <h3 className="font-sans text-left pl-2 text-gray-700">
          ₹
          <span className="font-semibold text-xl">
            {" "}
            {property.pricePerNight}
          </span>
          /per Night
        </h3>
        <p className="pr-2 flex items-center font-serif font-semibold text-xl">
          5 <StarIcon className="h-5 text-red-400 pl-1" />
        </p>
      </div>
    </div>
  );
}

export default PlaceCard;
