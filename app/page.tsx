import Image from "next/image";
import Hero from "./components/hero";
import FilterSection from "./components/filter";
import JobsSection from "./components/jobs";
import ContactSection from "./components/contact";

interface Data {
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const data: Data[] = await fetch("https://fakejobs-api.vercel.app/jobs")
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      return [];
    });
    console.log(data)

  return (
    <div>
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 bg-gray-100 p-10">
        <div className="order-1 xl:order-1 col-span-1 block">
          <FilterSection />
        </div>
        <div className="col-span-2 order-3 xl:order-2">
          {/* Pass the fetched data to the JobsSection */}
          <JobsSection data={data} />
        </div>
        <div className="order-2 xl:order-3  col-span-1">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
