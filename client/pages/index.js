import Head from "next/head";
import { format } from "date-fns";
import Header from "../components/header";
import Banner from "../components/banner";
import SmallCard from "../components/smallCard";
import MediumCard from "../components/mediumCard";
import LargeCard from "../components/largeCard";
import Footer from "../components/footer";
import PlaceCard from "../components/placeCard";
import HostingCard from "../components/hostingCard";
import { sanityClient } from "../sanity";
import Link from "next/link";

export default function Home({ exploreData, cardsData, properties }) {

  const formattedStartDate = format(new Date(), "yyyy-MM-dd");
  const formattedEndDate = format(new Date(), "yyyy-MM-dd");

  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Airbnb clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 md:px-16">
        {properties && (
          <div className="flex flex-row" id="Box">
            <div className="pt-6">
              <h1 className="sm:text-4xl text-2xl font-semibold pb-5">
                Try Visiting our Top rated Places
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {properties.map((property) => (
                  <Link href={`property/${property.slug.current}`}>
                    <PlaceCard property={property} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <section className="pt-12">
          <h2 className="sm:text-4xl text-2xl font-semibold pb-5">
            Explore Nearby
          </h2>

          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <Link
                href={`/search?location=${location}&startDate=${formattedStartDate}T10%3A46%3A52.522Z&endDate=${formattedEndDate}T10%3A46%3A52.522Z&noOfGuests=1`}
              >
                <SmallCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              </Link>
            ))}
          </div>
        </section>

        <LargeCard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />

        <section className="pt-0">
          <h2 className="sm:text-4xl text-2xl font-semibold pb-5">
            Live Anywhere
          </h2>

          <div className="inline md:flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((card) => (
              <MediumCard key={card.img} img={card.img} title={card.title} />
            ))}
          </div>
        </section>

        <div id="beHost">
          <HostingCard
            img="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg"
            title="Try hosting"
            description="Earn extra income and unlock new opportunities by sharing your space."
            buttonText="Learn more"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const query = '*[ _type == "property"]';
  const properties = await sanityClient.fetch(query);

  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G#").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  if (!properties.length) {
    return {
      props: {
        properties: [],
        exploreData,
        cardsData,
      },
    };
  } else {
    return {
      props: {
        properties,
        exploreData,
        cardsData,
      },
    };
  }
}
