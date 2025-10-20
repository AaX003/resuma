import "../css/Subscriptions.css";

function Subscriptions() {
  const tiers = [
    {
      label: "Free",
      price: "$0",
      hint: "Perfect for getting started",
      tags: ["1 Resume", "PDF Export", "Basic Formatting", "Community Support"]
    },
    {
      label: "Pro",
      price: "$120 / month",
      hint: "For serious job seekers",
      tags: [
        "Unlimited Resumes",
        "All Premium Templates",
        "PDF & Word Export",
        "AI-Powered Suggestions",
        "Priority Support",
        "Custom Formatting",
        "Cover Letter Builder"
      ],
      banner: "Most Popular"
    },
    {
      label: "Enterprise",
      price: "Custom",
      hint: "For teams and organizations",
      tags: [
        "Everything in Pro",
        "Team Collaboration",
        "Admin Dashboard",
        "API Access",
        "Dedicated Support",
        "Custom Branding"
      ]
    }
  ];

  return (
    <div className="container__subscriptions" id="subscriptions">
      <section className="hero__subscriptions">
        <header className="title__hero">
          <h3 className="subs__title">You Pay, We Guarantee</h3>
          <p className="subs__subtitle">
            Choose the plan that’s right for you. 14-day money-back guarantee on all plans.
          </p>
        </header>
      </section>

      <section className="showcase__subscriptions">
        <div className="subscriptions-display">
          {tiers.map((tier, t) => (
            <article key={t} className={`subscription-card ${tier.banner ? "is-popular" : ""}`}>
              {tier.banner && <span className="banner" aria-label={tier.banner}>{tier.banner}</span>}

              <small className="card-label">{tier.label}</small>
              <h2 className="card-price">{tier.price}</h2>
              <small className="card-hint">{tier.hint}</small>

              <button className="start-btn">Start Trial</button>

              <ul className="card-tags">
                {tier.tags.map((tag, i) => (
                  <li key={i} className="tag">{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Subscriptions;