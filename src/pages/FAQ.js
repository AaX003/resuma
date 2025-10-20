import "../css/FAQ.css";

function FAQ() {
  return (
    <div className="container__faq" id="faq">
      <section className="hero__faq">
        <header className="title__hero">
          <h3 className="title__faq" id="faq-heading">Frequently Asked Questions</h3>
          <p className="subtitle__faq">
            We’ve collected common questions and answered them clearly below. 
            Still stuck? Reach out and we’ll help within 24 hours.
          </p>
        </header>
      </section>

      <section className="faq" aria-labelledby="faq-heading">
        <div className="accordion-container">
          
          <details className="accordion-item">
            <summary className="accordion-summary">What is Resuma?</summary>
            <p className="accordion-content">
              Resuma is a resume builder that helps you create professional, ATS-friendly resumes
              with modern templates and AI suggestions tailored to your target roles.
            </p>
          </details>

          <details className="accordion-item">
            <summary className="accordion-summary">Is Resuma free to use?</summary>
            <p className="accordion-content">
              Yes—getting started is free and doesn’t require a credit card. 
              Pro and Enterprise plans unlock extra features when you’re ready.
            </p>
          </details>

          <details className="accordion-item">
            <summary className="accordion-summary">Which plan should I choose?</summary>
            <p className="accordion-content">
              New users typically start with <strong>Free</strong> to explore the editor. 
              Upgrade to <strong>Pro</strong> for unlimited resumes, premium templates, and AI guidance. 
              Teams and schools usually choose <strong>Enterprise</strong> for collaboration and admin tools.
            </p>
          </details>

          <details className="accordion-item">
            <summary className="accordion-summary">Can I cancel anytime?</summary>
            <p className="accordion-content">
              Yes. You can cancel your subscription at any time in account settings.
            </p>
          </details>

          <details className="accordion-item">
            <summary className="accordion-summary">How does Resuma keep my data secure?</summary>
            <p className="accordion-content">
              We follow industry best practices, including encryption in transit, 
              limited access controls, and routine security reviews. 
              You control your data and can delete it from your account at any time.
            </p>
          </details>

          <details className="accordion-item">
            <summary className="accordion-summary">Do you support business or school accounts?</summary>
            <p className="accordion-content">
              Yes—our <strong>Enterprise</strong> plan includes team collaboration, admin controls, 
              and custom branding. Contact sales for setup and pricing.
            </p>
          </details>

          <details className="accordion-item">
            <summary className="accordion-summary">How long does sign-up take?</summary>
            <p className="accordion-content">
              Usually 2–3 minutes. You can build your first resume right away.
            </p>
          </details>

          <details className="accordion-item">
            <summary className="accordion-summary">Do you support users with disabilities?</summary>
            <p className="accordion-content">
              Absolutely. We aim for an accessible experience and provide accommodations where possible. 
              If you run into barriers, contact Support and we’ll work with you to help.
            </p>
          </details>

        </div>
      </section>
    </div>
  );
}

export default FAQ;