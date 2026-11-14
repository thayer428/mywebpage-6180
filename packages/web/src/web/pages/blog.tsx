import { useState } from "react";
import { Link } from "wouter";
import { Search, ArrowUpRight, ArrowRight, X } from "lucide-react";
import { Eyebrow } from "../components/site";
import { articles } from "../lib/content";

const resources = [
  {
    subject: "EDUCATION & LEARNING",
    links: [
      ["MIT OpenCourseWare", "https://ocw.mit.edu"],
      ["Learning How to Learn", "https://www.coursera.org/learn/learning-how-to-learn"],
    ],
  },
  {
    subject: "TECHNOLOGY & DESIGN",
    links: [
      ["MIT Technology Review", "https://www.technologyreview.com"],
      ["Nielsen Norman Group", "https://www.nngroup.com"],
    ],
  },
  {
    subject: "IDEAS & PERSPECTIVES",
    links: [
      ["The Marginalian", "https://www.themarginalian.org"],
      ["TED", "https://www.ted.com"],
    ],
  },
];
export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = articles.filter(
    (a) =>
      (category === "All" || a.category === category) &&
      `${a.title} ${a.summary} ${a.category}`.toLowerCase().includes(search.toLowerCase()),
  );
  const featured = articles[0];
  return (
    <div className="interior-page">
      <section className="page-heading wrap blog-heading">
        <Eyebrow>THE JOURNAL</Eyebrow>
        <h1>
          Notes from
          <br />
          the <span className="muted">intersection.</span>
        </h1>
        <p className="page-subtitle">On learning, technology, and the ideas that connect them.</p>
      </section>
      <div className="wrap">
        <Link className="featured-post" to={`/blog/${featured.slug}`}>
          <img src={`/images/${featured.image}.jpg`} alt="Concrete architecture framed by trees" />
          <div className="featured-post-shade" />
          <div className="featured-label">
            <span className="blue-dot" /> FEATURED PERSPECTIVE
          </div>
          <div className="featured-post-copy">
            <div className="post-meta">
              <span>{featured.category}</span> · {featured.time}
            </div>
            <h2>{featured.title}</h2>
            <p>{featured.summary}</p>
            <span className="text-link">
              Read the story <ArrowUpRight size={18} />
            </span>
          </div>
          <span className="featured-post-arrow">
            <ArrowUpRight size={36} />
          </span>
        </Link>
      </div>
      <section className="journal-layout wrap reveal">
        <div className="journal-main">
          <div className="articles-heading">
            <Eyebrow>RECENT PERSPECTIVES</Eyebrow>
            <span>{filtered.length} ARTICLES · EDITORIAL DRAFTS</span>
          </div>
          <div className="article-grid">
            {filtered.map((a) => (
              <Link className="article-card" to={`/blog/${a.slug}`} key={a.slug}>
                <div className="card-image">
                  <img
                    src={`/images/${a.image}.jpg`}
                    loading="lazy"
                    alt={
                      a.category === "Education"
                        ? "An environment for learning"
                        : a.category === "Technology"
                          ? "Abstract imagery exploring technology"
                          : "Architectural and creative perspectives"
                    }
                  />
                  <span className="image-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
                <div className="post-meta">
                  <span>{a.category}</span>
                  <span>{a.time}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.summary}</p>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="empty-state">
              <Search size={30} />
              <h3>No stories found.</h3>
              <p>Try a different search or category.</p>
              <button
                className="text-link"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Reset filters <ArrowRight size={17} />
              </button>
            </div>
          )}
        </div>
        <aside className="journal-sidebar">
          <label className="search-label">
            FIND A PERSPECTIVE
            <div className="search-input">
              <Search size={16} />
              <input
                aria-label="Search the journal"
                placeholder="Search the journal…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button onClick={() => setSearch("")} aria-label="Clear search">
                  <X size={14} />
                </button>
              )}
            </div>
          </label>
          <Eyebrow>EXPLORE BY SUBJECT</Eyebrow>
          <div className="category-filters">
            {["All", "Education", "Technology", "Ideas"].map((c) => (
              <button
                className={category === c ? "selected" : ""}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                key={c}
              >
                {c}
                <span>
                  {c === "All" ? articles.length : articles.filter((a) => a.category === c).length}
                </span>
              </button>
            ))}
          </div>
          <div className="curated-resources">
            <Eyebrow>WORTH YOUR ATTENTION</Eyebrow>
            <p>A few good places to keep exploring.</p>
            {resources.map((group) => (
              <div key={group.subject}>
                <h4>{group.subject}</h4>
                {group.links.map(([label, url]) => (
                  <a href={url} key={label} target="_blank" rel="noopener noreferrer">
                    {label}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
