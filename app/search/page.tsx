import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { format } from "date-fns";
import { SearchResult } from "@/types";
import InfoCard from "@/components/InfoCard";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

async function Search({ searchParams }: Props) {
  const location = searchParams.location;
  const startDate = searchParams.startDate;
  const endDate = searchParams.endDate;
  const noOfGuests = searchParams.noOfGuests;
  const formattedStartDate = format(
    new Date(startDate?.toString() || ""),
    "dd MMM yy"
  );
  const formattedEndDate = format(
    new Date(endDate?.toString() || ""),
    "dd MMM yy"
  );

  const range = `${formattedStartDate}  - ${formattedEndDate}`;

  const searchResults: SearchResult[] = await fetch(
    "https://www.jsonkeeper.com/b/5NPS"
  ).then((res) => res.json());

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} for {noOfGuests} Guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults?.map((item, i) => (
              <InfoCard key={i} {...item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
