import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "../components/site";

export default function Experience() {
  return (
    <div className="interior-page">
      <section className="page-heading wrap">
        <Eyebrow>EXPERIENCE & EDUCATION</Eyebrow>
        <h1>
          A journey of
          <br />
          <span className="muted">continuous learning.</span>
        </h1>
        <p className="page-subtitle">The work, learning, and questions that shape a perspective.</p>
      </section>
      <section className="timeline-section wrap reveal">
        <div className="timeline-intro">
          <Eyebrow>THE JOURNEY</Eyebrow>
          <h2>
            Looking back.
            <br />
            Moving forward.
          </h2>
          <p>
            Exploring the intersection of education and innovative technology to transform lives.
          </p>
          <div className="content-notice">
            <span className="blue-dot" />
            <p>
              Career and education details are awaiting Colby's input. No roles, institutions,
              dates, or qualifications have been assumed.
            </p>
          </div>
        </div>
        <div className="timeline">
          {[
            [
              "01",
              "EXPERIENCE",
              "The work behind the perspective",
              "Professional history",
              "Roles, organizations, and meaningful contributions will be added here.",
              "Dates to be added",
            ],
            [
              "02",
              "EDUCATION",
              "The foundation for what's next",
              "Academic background",
              "Degrees, institutions, and areas of study will be added here.",
              "Dates to be added",
            ],
            [
              "03",
              "CONTINUING EXPLORATION",
              "Never finished learning",
              "Education × technology",
              "A space for ongoing learning, professional development, and the ideas that connect disciplines.",
              "An ongoing conversation",
            ],
          ].map(([n, tag, title, org, description, dates]) => (
            <article className="timeline-entry" key={n}>
              <span className="timeline-node" />
              <div className="timeline-meta">
                <Eyebrow>{tag}</Eyebrow>
                <span>{dates}</span>
              </div>
              <h3>{title}</h3>
              <h4>{org}</h4>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="interior-cta wrap reveal">
        <div>
          <Eyebrow>THE NEXT CHAPTER</Eyebrow>
          <h2>
            Have a possibility
            <br />
            in mind?
          </h2>
        </div>
        <Link className="button" to="/contact">
          Let's talk <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
