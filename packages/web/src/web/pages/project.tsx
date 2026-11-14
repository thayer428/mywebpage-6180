import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../lib/content";
import { Eyebrow, TextLink } from "../components/site";

export default function Project() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  if (!project)
    return (
      <section className="page-heading wrap">
        <Eyebrow>404</Eyebrow>
        <h1>
          Not here.
          <br />
          <span className="muted">Not yet.</span>
        </h1>
        <TextLink to="/">Back home</TextLink>
      </section>
    );
  return (
    <div className="interior-page">
      <section className="page-heading wrap">
        <Link to="/#intro" className="back-link">
          <ArrowLeft size={15} /> SELECTED EXPLORATIONS
        </Link>
        <Eyebrow>{project.category} · CONCEPT</Eyebrow>
        <h1>
          {project.title}
          <span className="blue-period">.</span>
        </h1>
        <p className="page-subtitle">{project.description}</p>
      </section>
      <div className="project-cover wrap">
        <img src={`/images/${project.image}.jpg`} alt={project.title} />
      </div>
      <section className="project-detail wrap reveal">
        <div>
          <Eyebrow>THE EXPLORATION</Eyebrow>
          <h2>
            A direction.
            <br />
            Not a destination.
          </h2>
          <p className="draft-note">CONCEPT OVERVIEW · NOT A COMPLETED CLIENT PROJECT</p>
        </div>
        <div>
          <p>
            {project.description} This concept is a starting point for research, conversations, and
            small experiments.
          </p>
          {project.points.map((p, i) => (
            <div className="project-point" key={p}>
              <span>0{i + 1}</span>
              <h3>{p}</h3>
            </div>
          ))}
          <TextLink to="/blog">Read related perspectives</TextLink>
        </div>
      </section>
      <section className="interior-cta wrap reveal">
        <div>
          <Eyebrow>LET'S EXPLORE IT TOGETHER</Eyebrow>
          <h2>See a possibility?</h2>
        </div>
        <Link className="button" to="/contact">
          Start a conversation <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
