import { ContactForm, Eyebrow, SocialLinks } from "../components/site";

export default function Contact() {
  return (
    <div className="interior-page">
      <section className="page-heading wrap">
        <Eyebrow>LET'S CONNECT</Eyebrow>
        <h1>
          Every possibility starts
          <br />
          with a <span className="muted">conversation.</span>
        </h1>
        <p className="page-subtitle">An idea, a collaboration, a question. Or just a hello.</p>
      </section>
      <section className="contact-page-grid wrap reveal">
        <div className="contact-side">
          <span className="blue-rule" />
          <h2>
            What's on
            <br />
            your mind?
          </h2>
          <p>
            Education. Innovative technology. Something at the intersection of both. Let's see where
            a conversation can take us.
          </p>
          <SocialLinks />
          <p className="draft-note">
            MESSAGES ARE SAVED SECURELY IN THIS SITE.
            <br />
            EMAIL DELIVERY IS NOT CONNECTED.
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
