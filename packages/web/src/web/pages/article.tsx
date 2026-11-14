import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowUpRight, Link2, Check } from "lucide-react";
import { articles } from "../lib/content";
import { Eyebrow, TextLink } from "../components/site";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const [active, setActive] = useState(article?.sections[0].id || "");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  useEffect(() => {
    if (!article) return;
    document.title = `${article.title} — Colby K. Clark`;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document.querySelectorAll(".article-section").forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, [article]);
  if (!article)
    return (
      <div className="page-heading wrap">
        <Eyebrow>404</Eyebrow>
        <h1>
          A page yet
          <br />
          to be written.
        </h1>
        <TextLink to="/blog">Back to the journal</TextLink>
      </div>
    );
  const url = window.location.href;
  return (
    <div className="interior-page">
      <section className="article-heading wrap">
        <Link className="back-link" to="/blog">
          <ArrowLeft size={15} /> THE JOURNAL
        </Link>
        <div className="post-meta">
          <span>{article.category}</span> · {article.time}
        </div>
        <h1>{article.title}</h1>
        <p>{article.summary}</p>
        <div className="article-byline">
          <span className="author-monogram">
            CKC<span>.</span>
          </span>
          <div>
            <strong>Colby K. Clark</strong>
            <span>Editorial draft · Personal perspective</span>
          </div>
        </div>
      </section>
      <div className="article-cover wrap">
        <img src={`/images/${article.image}.jpg`} alt={`Editorial visual for ${article.title}`} />
        <span className="image-caption">EDITORIAL IMAGE · UNSPLASH</span>
      </div>
      <div className="article-layout wrap">
        <aside className="article-toc">
          <Eyebrow>IN THIS ARTICLE</Eyebrow>
          {article.sections.map((s, i) => (
            <a
              key={s.id}
              className={active === s.id ? "active" : ""}
              href={`#${s.id}`}
              onClick={() => setActive(s.id)}
            >
              <span>0{i + 1}</span>
              {s.title}
            </a>
          ))}
          <Link className="back-link" to="/blog">
            <ArrowLeft size={14} /> Back to all stories
          </Link>
        </aside>
        <article className="article-body">
          <p className="article-lead">{article.summary}</p>
          {article.sections.map((s) => (
            <section id={s.id} key={s.id} className="article-section">
              <h2>{s.title}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
          <div className="article-end">
            <span className="blue-rule" />
            <p>
              A perspective, not a final answer.
              <br />
              What would you add to the conversation?
            </p>
            <TextLink to="/contact">Share your thoughts</TextLink>
          </div>
        </article>
        <aside className="share-sidebar">
          <Eyebrow>SHARE</Eyebrow>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
          >
            𝕏
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
          >
            in
          </a>
          <button
            aria-label="Copy article link"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setCopyError(false);
              } catch {
                setCopyError(true);
              }
            }}
          >
            {copied ? <Check size={17} /> : <Link2 size={17} />}
          </button>
          {copied && <output>Copied</output>}
          {copyError && <span role="alert">Copy the URL from your browser.</span>}
        </aside>
      </div>
      <section className="related-section wrap reveal">
        <Eyebrow>KEEP EXPLORING</Eyebrow>
        <h2>
          A different perspective<span className="blue-period">.</span>
        </h2>
        <div className="related-grid">
          {articles
            .filter((a) => a.slug !== slug)
            .slice(0, 2)
            .map((a) => (
              <Link key={a.slug} className="related-link" to={`/blog/${a.slug}`}>
                <div>
                  <div className="post-meta">
                    {a.category} · {a.time}
                  </div>
                  <h3>{a.title}</h3>
                </div>
                <ArrowUpRight size={24} />
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
