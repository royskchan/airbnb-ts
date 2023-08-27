import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import { CardData, ExploreData } from "@/types";

export default async function Home() {
  const exploreData: ExploreData[] = await fetch(
    "https://www.jsonkeeper.com/b/4G1G"
  ).then((res) => res.json());

  const cardData: CardData[] = await fetch(
    "https://www.jsonkeeper.com/b/VHHT"
  ).then((res) => res.json());

  return (
    <div className="">
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Small Card */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, i) => (
              <SmallCard
                key={i}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        {/* Medium Card */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Livee Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map((item, i) => (
              <MediumCard key={i} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        {/* Large Card */}
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
