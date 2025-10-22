import "../css/Reviews.css";
import { useState, useCallback } from "react";
import { IoMdStar } from "react-icons/io";

function Reviews() {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      rating: 5,
      quote:
        "Resuma helped me land my dream job in just 2 weeks. The templates are modern and the AI suggestions were spot-on!",
      reviewer: "Whitney Keaton",
      locale: "New York, NY",
    },
    {
      rating: 5,
      quote:
        "The best resume builder I've used. Clean interface, professional results, and the export options are perfect.",
      reviewer: "Mya Lu",
      locale: "Los Angeles, CA",
    },
    {
      rating: 5,
      quote:
        "I've tried many resume builders, but Resuma stands out. It's simple, effective, and produces stunning resumes.",
      reviewer: "Susan Jones",
      locale: "San Francisco, CA",
    },
    {
      rating: 5,
      quote:
        "After 300+ rejections I was losing confidence. Resuma’s guidance turned it around—and I finally landed the role.",
      reviewer: "Kyla Banks",
      locale: "Dallas, TX",
    },
    {
      rating: 4,
      quote:
        "A colleague recommended Resuma. Six weeks later I had measurable improvements and an interview on the books.",
      reviewer: "Randon Tyson",
      locale: "Chicago, IL",
    },
    {
      rating: 5,
      quote:
        "Skeptical at first, but the quality impressed me. I've used Resuma for 2+ years now—worth it.",
      reviewer: "Lance Johnson",
      locale: "Columbus, OH",
    },
  ];

  const total = reviews.length;
  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + total) % total), [total]);


  const { rating, quote, reviewer, locale } = reviews[current];

  return (
    <div className="container__reviews" id="reviews">
      <section className="hero__reviews">
        <header className="title__hero">
          <h3 className="title__reviews">Even Expertise Needs Reinforcement</h3>
          <p className="subtitle__reviews">
            Don’t just take our word for it—hear from recurring users about their results with Resuma.
          </p>
        </header>
      </section>

      <section className="showcase__reviews">
        <div
          className="reviews-display"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
          aria-live="polite"
        >
          <article className="review-card">
            <span className="review-rating" aria-label={`Rated ${rating} out of 5`}>
              {Array.from({ length: rating }).map((_, i) => (
                <IoMdStar key={i} />
              ))}
            </span>

            <h4 className="review-quote">“{quote}”</h4>
            <div className="review-divider" aria-hidden="true" />
            <small className="review-author">{reviewer}</small>
            <small className="review-locale">{locale}</small>
          </article>

          <div className="review-controls">
            <button className="prev-btn" type="button" onClick={prev} aria-label="Previous review">
              ‹
            </button>
            <div className="dots" role="tablist" aria-label="Review slides">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={current === i}
                  aria-label={`Go to review ${i + 1}`}
                  className={`dot ${current === i ? "is-active" : ""}`}
                  onClick={() => setCurrent(i)}
                  type="button"
                />
              ))}
            </div>
            <button className="next-btn" type="button" onClick={next} aria-label="Next review">
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;