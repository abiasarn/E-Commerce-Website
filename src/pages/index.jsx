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
      <main className="px-6">
        <div className="flex flex-col gap-10 mb-10">
          <Hero />
          <img
            src="/Floating Varsity Jacket.png"
            alt=""
            className="rounded-3xl"
          />
        </div>
        <Sponsors />
      </main>
      <section className="p-6 mt-10">
        <Category />
      </section>
      <section className="p-6 mt-10">
        <Products />
      </section>
      <section className="p-6 mt-10">
        <CtaArea />
      </section>
      <footer className="p-6 mt-10">
        <Footer />
      </footer>
    </>
  );
};

export default MainPage;
