import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Eyebrow, SocialLinks, TextLink } from "../components/site";

export default function About() {
  return (
    <div className="interior-page">
      <section className="page-heading wrap">
        <Eyebrow>ABOUT COLBY</Eyebrow>
        <h1>
          Driven by curiosity.
          <br />
          Grounded in <span className="muted">possibility.</span>
        </h1>
        <p className="page-subtitle">
          A perspective on education, technology, and what comes next.
        </p>
      </section>
      <section className="about-narrative wrap reveal">
        <div className="portrait-frame">
          <img
            src="/images/portrait.jpg"
            alt="Editorial stock portrait placeholder—not a photograph of Colby"
          />
          <span className="image-caption">PORTRAIT PLACEHOLDER · UNSPLASH</span>
        </div>
        <div className="narrative-copy">
          <Eyebrow>THE WHY</Eyebrow>
          <blockquote>
            “The most interesting question isn't what technology can do. It's what it can make
            possible for people.”
          </blockquote>
          <span className="draft-note">DRAFT PERSONAL STATEMENT</span>
          <div className="editorial-columns">
            <p>
              I'm Colby K. Clark. This space begins with a simple idea: education and innovative
              technology have the potential to transform lives when we approach them with intention.
            </p>
            <p>
              I'm interested in the connections between disciplines. The questions that emerge when
              we look beyond the familiar. The possibilities we find when we start with people
              rather than tools.
            </p>
            <p>
              That means thinking about access as much as innovation. About the learner as much as
              the learning platform. About the impact an idea can have—not just how impressive it
              looks.
            </p>
            <p>
              Here, you'll find explorations and writing on those themes. Not a collection of final
              answers, but an invitation to keep learning, asking, and creating something
              meaningful.
            </p>
          </div>
          <SocialLinks />
        </div>
      </section>
      <section className="values-section wrap reveal">
        <div className="section-heading">
          <div>
            <Eyebrow>THE WAY I SEE IT</Eyebrow>
            <h2>
              A few guiding ideas<span className="blue-period">.</span>
            </h2>
          </div>
        </div>
        <div className="values-grid">
          {[
            [
              "01",
              "People before platforms.",
              "Begin with the person, not the product. Understand the need before choosing the technology.",
            ],
            [
              "02",
              "Curiosity is a practice.",
              "Keep asking. Stay open to unfamiliar perspectives. The best ideas rarely arrive fully formed.",
            ],
            [
              "03",
              "Opportunity should be shared.",
              "Build with access in mind. Meaningful progress creates possibilities for more people.",
            ],
          ].map(([n, title, text]) => (
            <div key={n}>
              <span className="value-number">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="interior-cta wrap reveal">
        <div>
          <Eyebrow>LET'S KEEP THE CONVERSATION GOING</Eyebrow>
          <h2>
            Better ideas start
            <br />
            with a connection.
          </h2>
        </div>
        <Link className="button" to="/contact">
          Say hello <ArrowUpRight size={18} />
        </Link>
        <TextLink to="/experience">Experience & education</TextLink>
      </section>
    </div>
  );
}
