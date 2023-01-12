import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import Header from "../components/header";
import InfoCard from "../components/infoCard";
import Maps from "../components/maps";

const Search = ({searchResults}) => {
  const router = useRouter();

  // ES6 destructuring
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

            <div className="flex flex-col">
                {searchResults?.map(({img, location, title, description, star, price, total}) => (
                    <InfoCard
                        key={img}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}
                    />
                ))}
            </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[40%] sticky top-[76px] h-[calc(100vh-76px)]">
            <Maps searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS")
    .then(
        (res) => res.json()
    );

  return {
    props: {
      searchResults,
    },
  };
}