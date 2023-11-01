import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";
import { useState } from "react";

import Nav from "./components/Nav";
const App = () => {
  const [dark, setdark] = useState(1);
  return (
    <main
      className={`relative duration-1000 ${
        dark === 1
          ? "bg-gradient-to-b from-[#040b29] to-[#170020] text-white"
          : ""
      }`}
    >
      <Nav setDark={setdark} isDark={dark} />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero dark={dark} />
      </section>
      <section className="padding">
        <PopularProducts dark={dark} />
      </section>
      <section className="padding">
        <SuperQuality dark={dark} />
      </section>
      <section className="padding-x py-10">
        <Services dark={dark} />
      </section>
      <section className="padding">
        <SpecialOffers dark={dark} />
      </section>
      <section
        className={`padding ${dark === 0 ? "bg-pale-blue" : "bg-[#21214b]"}`}
      >
        <CustomerReviews dark={dark} />
      </section>
      <section className="padding-x sm:py-32 py-16">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
