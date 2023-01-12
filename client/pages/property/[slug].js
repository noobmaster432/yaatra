import { sanityClient } from "../../sanity";
import { isMultiple } from "../../utils";
import Image from "../../components/image";
import Review from "../../components/review";
import { urlFor } from "../../sanity";
import Link from "next/link";
import Header from "../../components/header";

const Property = ({
  title,
  location,
  propertyType,
  mainImage,
  images,
  pricePerNight,
  beds,
  bedrooms,
  description,
  host,
  reviews,
}) => {
  const reviewAmount = reviews.length;

  console.log(images);
  return (
    <div>
      <Header />
      <div className="flex flex-col mx-20 my-5">
        <h1 className="font-semibold text-3xl font-sans">{title}</h1>
        <p className="mt-1 mb-3 text-gray-600">
          {reviewAmount} review{isMultiple(reviewAmount)}
        </p>
        <div className="flex overflow-hidden max-h-96 rounded-3xl space-x-1">
          <Image identifier="main-image" image={mainImage} />
          <div className="w-1/2 flex flex-wrap overflow-hidden">
            {images.map(({ _key, asset }, image) => (
              <Image key={_key} identifier="image" image={asset} />
            ))}
          </div>
        </div>

        <div className="ml-5 md:flex justify-between mt-10">
          <div className="md:w-3/5">
            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold text-2xl font-sans mb-3">
                  {propertyType} hosted by {host?.name}
                </h2>
                <h4 className="text-lg font-semibold font-sans">
                  {bedrooms} bedroom{isMultiple(bedrooms)} * {beds} bed
                  {isMultiple(beds)}
                </h4>
              </div>
              <img
                src={urlFor(host.image)
                  .width(70)
                  .height(70)
                  .crop("focalpoint")
                  .auto("format")}
                className="rounded-full"
              />
            </div>

            <div className="bg-gray-400 h-[1px] my-4" />
            <h4 className="font-semibold font-sans text-lg mt-2">
              Enhanced Clean
            </h4>
            <p className="font-sans my-2">
              This host is committed to Airbnb's 5-step enhanced cleaning
              process.
            </p>
            <h4 className="font-semibold font-sans text-lg mt-4">
              Amenities for everyday living
            </h4>
            <p className="font-sans my-2">
              The host has equipped this place for long stays - kitchen,
              shampoo, conditioner, hairdryer included.
            </p>
            <h4 className="font-semibold font-sans text-lg mt-4">
              House rules
            </h4>
            <p className="font-sans my-2">
              This place isn't suitable for pets andthe host does not allow
              parties or smoking.
            </p>
          </div>

          <div className="md:w-1/3 h-60 rounded-lg shadow-2xl p-6 flex-col items-center border-slate-400 bg-slate-50 border-solid">
            <h2 className="font-sans font-bold text-xl text-center mt-4">
              ₹{pricePerNight}
            </h2>
            <h4 className="text-center mt-6 text-gray-600 font-sans mb-4">
              {reviewAmount} review{isMultiple(reviewAmount)}
            </h4>
            <Link href="/">
              <div className="button text-center text-white my-8 bg-red-500 hover:bg-rose-600 rounded-lg">
                Change Dates
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-gray-400 h-[1px] my-8" />

        <h4 className="font-serif mx-8">{description}</h4>

        <div className="bg-gray-400 h-[1px] my-8" />

        <h2 className="font-sans font-semibold text-xl">
          {reviewAmount} Review{isMultiple(reviewAmount)}
        </h2>
        {reviewAmount > 0 &&
          reviews.map((review) => <Review key={review._key} review={review} />)}
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
    title,
    location,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    beds,
    bedrooms,
    description,
    host->{
      _id,
      name,
      slug,
      image
    },
    reviews[]{
      ...,
      traveller->{
        _id,
        name,
        slug,
        image
      }
    }
  }`;

  const property = await sanityClient.fetch(query, { pageSlug });

  if (!property) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: property.title,
        location: property.location,
        propertyType: property.propertyType,
        mainImage: property.mainImage,
        images: property.images,
        pricePerNight: property.pricePerNight,
        beds: property.beds,
        bedrooms: property.bedrooms,
        description: property.description,
        host: property.host,
        reviews: property.reviews,
      },
    };
  }
};

export default Property;
