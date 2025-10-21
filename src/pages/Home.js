import "../css/Home.css";

function Home() {
  return (
    <div className="container__home">
      <section className="hero__home">
        <main className="hero">
            <div className="hero__info">
                <header className="title__hero">
                    <h1 className="title">
                        Professional Resume Templates
                    </h1>
                    <p className="subtitle">
                        Choose from our thousands of professional and
                        high-quality resume templates to use today!
                    </p>
            </header>
            <div className="newsletter-container">
                <input
                    type="email"
                    placeholder="Enter Email"
                    required
                />
                <button className="subscribe-btn">Subscribe</button>
            </div>
            </div>
        </main>
      </section>
    </div>
  );
}

export default Home;
