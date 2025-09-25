import Navbar from "../components/fragments/Navbar";
import Hero from "../components/fragments/Hero";
import Sponsors from "../components/fragments/Sponsors";
import Category from "../components/fragments/Category";
import Products from "../components/fragments/Products";
import CtaArea from "../components/fragments/CtaArea";
import Footer from "../components/fragments/Footer";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <main className="px-6 lg:px-16 lg:mt-5">
        <div className="flex flex-col gap-10 mb-10 md:flex-row md:gap-5 md:mb-16">
          <Hero />
          <img
            src="/Floating Varsity Jacket.png"
            alt=""
            className="w-full rounded-3xl md:w-[50%] lg:w-[50%]"
          />
        </div>
        <Sponsors />
      </main>
      <section className="p-6 mt-10 lg:px-16">
        <Category />
      </section>
      <section className="p-6 mt-10 lg:px-16">
        <Products />
      </section>
      <section className="p-6 mt-10 lg:px-16">
        <CtaArea />
      </section>
      <footer className="p-6 mt-10 lg:px-16">
        <Footer />
      </footer>
    </>
  );
};

export default MainPage;
