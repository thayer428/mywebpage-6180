import { Link } from "wouter";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  ContactForm,
  Eyebrow,
  OrbitalArt,
  ScrollCue,
  SocialLinks,
  TextLink,
} from "../components/site";
import { mission, projects } from "../lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <OrbitalArt />
        <div className="hero-content wrap">
          <div className="hero-kicker">
            <span className="blue-dot" /> AT THE INTERSECTION OF WHAT'S NEXT
          </div>
          <h1>
            Colby K.
            <br />
            Clark<span className="blue-period">.</span>
          </h1>
          <p className="hero-bio">
            Exploring the intersection of <span>education</span> and
            <br className="desktop-break" /> <span>innovative technology</span> to transform lives.
          </p>
          <Link to="/about" className="hero-cta">
            A little about me <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="hero-bottom wrap">
          <ScrollCue />
          <span className="hero-note">CURIOUS BY NATURE. INTENTIONAL BY DESIGN.</span>
          <span className="hero-index">01 — 05</span>
        </div>
      </section>

      <section className="intro wrap reveal" id="intro">
        <Eyebrow number="01">THE BIG PICTURE</Eyebrow>
        <h2>
          Good things happen
          <br />
          at the <span className="muted">intersection.</span>
        </h2>
        <p>
          Where education meets innovation.
          <br />
          Where curiosity becomes opportunity.
          <br />
          Where ideas become something that matters.
        </p>
        <span className="blue-rule" />
      </section>

      <section className="about-split wrap reveal">
        <div className="portrait-frame">
          <img
            src="/images/portrait.jpg"
            alt="Black-and-white editorial portrait, stock placeholder"
            loading="lazy"
          />
          <span className="image-caption">PORTRAIT PLACEHOLDER · UNSPLASH</span>
        </div>
        <div className="about-copy">
          <Eyebrow number="02">THE PERSON BEHIND THE IDEAS</Eyebrow>
          <h2>
            Always learning.
            <br />
            Always looking
            <br />
            <span className="muted">forward.</span>
          </h2>
          <p>
            I'm Colby. I'm drawn to the space where education and technology meet—and the
            possibilities that open up when we put people first.
          </p>
          <p>
            {mission} That's the question behind this space, and the conversation I hope to keep
            building.
          </p>
          <TextLink to="/about">More about me</TextLink>
          <SocialLinks />
        </div>
      </section>

      <section className="featured-section wrap reveal">
        <div className="section-heading">
          <div>
            <Eyebrow number="03">IDEAS INTO ACTION</Eyebrow>
            <h2>
              Selected explorations<span className="blue-period">.</span>
            </h2>
          </div>
          <TextLink to="/experience">The journey so far</TextLink>
        </div>
        <div className="project-grid">
          {projects.map((project, i) => (
            <Link to={`/work/${project.slug}`} key={project.slug} className="project-card">
              <div className="card-image">
                <img src={`/images/${project.image}.jpg`} alt={project.title} loading="lazy" />
                <span className="image-arrow">
                  <ArrowUpRight size={22} />
                </span>
                <span className="project-count">0{i + 1}</span>
              </div>
              <div className="card-meta">
                {project.category}
                <span>CONCEPT</span>
              </div>
              <h3>
                {project.title}
                <ArrowUpRight size={20} />
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="journal-strip wrap reveal">
        <div>
          <Eyebrow number="04">NOTES FROM THE INTERSECTION</Eyebrow>
          <h2>
            A few thoughts.
            <br />A little perspective.
          </h2>
        </div>
        <div>
          <p>
            On learning, technology, and the ideas that connect them. A space to think out loud.
          </p>
          <TextLink to="/blog">Explore the journal</TextLink>
        </div>
        <Link to="/blog" className="round-arrow" aria-label="Explore the journal">
          <ArrowRight size={28} />
        </Link>
      </section>

      <section className="contact-teaser wrap reveal">
        <div>
          <Eyebrow number="05">GOOD CONVERSATIONS START HERE</Eyebrow>
          <h2>
            What could we
            <br />
            make <span className="muted">possible?</span>
          </h2>
          <p>
            An idea, a collaboration, or simply a hello.
            <br />
            I'd love to hear what's on your mind.
          </p>
        </div>
        <ContactForm compact />
      </section>
    </>
  );
}
