import { Flex, Badge, Text } from "@chakra-ui/react";
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
      <div className="pl-10">
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">Plus</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; {property.city}
          </Text>
        </Flex>
      </div>
      <h3 className="font-sans font-semibold px-2 text-center text-lg py-2">
        {property.title}
      </h3>
      <div className="pt-3 pl-4">
        <h3 className="font-sans text-left pl-2 text-gray-700">
          ₹
          <span className="font-semibold text-lg">
            {" "}
            {property.pricePerNight}
          </span>
          /per Night
        </h3>
        <p className="pl-2 pt-2 flex items-center font-sans text-lg font-semibold">
          <StarIcon className="h-5 text-red-400 pl-1" />
          4.9
          <span className="font-normal text-xs items-baseline text-gray-500 pt-1 pl-[1px]"> (100+)</span>
        </p>
      </div>
    </div>
  );
}

export default PlaceCard;