// COMPONENT IMPORTS
import Navbar from "./Nav";
import Home from "./Home";
import About from "./About";
import Subscriptions from "./Subscriptions";
import Reviews from "./Reviews";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";

function Main() {
  return (
    <div className="container__main">
      <main className="components">
        <Navbar />

        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="subscriptions">
          <Subscriptions />
        </section>

        <section id="reviews">
          <Reviews />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default Main;