import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, ArrowRight, ArrowDown, Menu, X, Check, Loader2 } from "lucide-react";
import { useContactSubmission } from "../queries/contact";

const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Blog", "/blog"],
];

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "instant" });
    const titles: Record<string, string> = {
      "/": "Education. Technology. Possibility.",
      "/about": "About",
      "/experience": "Experience & Education",
      "/blog": "The Journal",
      "/contact": "Let's connect",
    };
    document.title = `${titles[location] || "Ideas & explorations"} — Colby K. Clark`;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);
  useEffect(() => {
    if (!menu) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menu]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header ${scrolled || menu || location !== "/" ? "solid" : ""}`}>
        <Link className="wordmark" to="/" aria-label="Colby K. Clark, home">
          CKC<span>.</span>
        </Link>
        <nav aria-label="Main navigation" className={menu ? "nav-links open" : "nav-links"}>
          {navigation.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className={
                location === path || (path === "/blog" && location.startsWith("/blog/"))
                  ? "active"
                  : ""
              }
              aria-current={location === path ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="nav-contact">
            Let's connect <ArrowUpRight size={15} />
          </Link>
        </nav>
        <button
          className="menu-toggle"
          aria-label={menu ? "Close navigation" : "Open navigation"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main" key={location}>
        {children}
      </main>
      <footer className="site-footer wrap">
        <div>
          <Link className="wordmark" to="/">
            CKC<span>.</span>
          </Link>
          <p>Education. Technology. Possibility.</p>
        </div>
        <div className="footer-right">
          <span>© {new Date().getFullYear()} Colby K. Clark</span>
          <a href="#main" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export function Eyebrow({ children, number }: { children: ReactNode; number?: string }) {
  return (
    <div className="eyebrow">
      {number && <span className="section-number">{number} /</span>} {children}
    </div>
  );
}
export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}

export function OrbitalArt() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Touch devices keep the artwork static: no large GPU layer or scroll repaint.
    if (
      !window.matchMedia(
        "(min-width: 701px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      ).matches
    )
      return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const paint = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (window.scrollY > window.innerHeight) return;
        ref.current?.style.setProperty("--parallax", `${Math.min(window.scrollY * 0.12, 100)}px`);
        ref.current?.style.setProperty("--pointer-x", `${x}px`);
        ref.current?.style.setProperty("--pointer-y", `${y}px`);
      });
    };
    const pointer = (e: PointerEvent) => {
      x = (e.clientX / window.innerWidth - 0.5) * 14;
      y = (e.clientY / window.innerHeight - 0.5) * 10;
      paint();
    };
    window.addEventListener("scroll", paint, { passive: true });
    window.addEventListener("pointermove", pointer, { passive: true });
    return () => {
      window.removeEventListener("scroll", paint);
      window.removeEventListener("pointermove", pointer);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div className="orbital-art" ref={ref} aria-hidden="true">
      {/* Pre-rendered original SVG eliminates live blur/filter compositing in mobile browsers. */}
      <picture>
        <source media="(max-width: 700px)" srcSet="/images/orbital-mobile.webp" />
        <img
          className="orbital-image"
          src="/images/orbital-desktop.webp"
          alt=""
          width={1600}
          height={1000}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero-shade" />
    </div>
  );
}

export function ScrollCue() {
  return (
    <a className="scroll-cue" href="#intro">
      <span className="scroll-icon">
        <ArrowDown size={15} />
      </span>
      <span>SCROLL TO EXPLORE</span>
    </a>
  );
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const mutation = useContactSubmission();
  const [submitted, setSubmitted] = useState(false);
  return submitted ? (
    <div className="form-success" aria-live="polite">
      <Check size={26} />
      <h3>Conversation started.</h3>
      <p>
        Your {compact ? "connection request" : "message"} has been saved. Thank you for reaching
        out.
      </p>
      <button
        className="text-link"
        onClick={() => {
          setSubmitted(false);
          mutation.reset();
        }}
      >
        Send another message <ArrowRight size={17} />
      </button>
    </div>
  ) : (
    <form
      className={`contact-form ${compact ? "compact" : ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        mutation.mutate(
          {
            name: String(data.get("name")),
            email: String(data.get("email")),
            message: compact ? "I'd like to connect." : String(data.get("message")),
            website: String(data.get("website") || ""),
          },
          { onSuccess: () => setSubmitted(true) },
        );
      }}
    >
      <div className="form-row">
        <label>
          Your name
          <input
            aria-label="Your name"
            name="name"
            placeholder="What should I call you?"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
          />
        </label>
        <label>
          Email address
          <input
            aria-label="Email address"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            maxLength={254}
            required
          />
        </label>
      </div>
      {!compact && (
        <label>
          What's on your mind?
          <textarea
            aria-label="What's on your mind?"
            name="message"
            rows={5}
            placeholder="An idea, a question, a possibility…"
            maxLength={5000}
            required
          />
        </label>
      )}
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input aria-label="Website" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-bottom">
        <button className="button" disabled={mutation.isPending} type="submit">
          {mutation.isPending ? (
            <>
              Saving <Loader2 className="spin" size={17} />
            </>
          ) : (
            <>
              {compact ? "Let's connect" : "Send message"}
              <ArrowUpRight size={18} />
            </>
          )}
        </button>
        <span>No noise. Just a good conversation.</span>
      </div>
      {mutation.isError && (
        <p className="form-error" role="alert">
          Couldn't save your message. Please try again.
        </p>
      )}
    </form>
  );
}

export function SocialLinks() {
  const [selected, setSelected] = useState<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected) dialog.current?.showModal();
  }, [selected]);
  return (
    <>
      <div className="social-links">
        {["X / Twitter", "LinkedIn", "Newsletter"].map((label) => (
          <button key={label} className="text-link" onClick={() => setSelected(label)}>
            {label}
            <ArrowUpRight size={14} />
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="social-dialog"
        aria-label={`${selected || "Social"} connection`}
        onClose={() => setSelected(null)}
      >
        <button className="dialog-close" aria-label="Close" onClick={() => dialog.current?.close()}>
          <X size={20} />
        </button>
        <Eyebrow>STAY CONNECTED</Eyebrow>
        <h3>{selected}</h3>
        <p>
          This destination hasn't been connected yet. In the meantime, start a conversation through
          the contact page.
        </p>
        <Link className="button" to="/contact" onClick={() => dialog.current?.close()}>
          Get in touch <ArrowUpRight size={17} />
        </Link>
      </dialog>
    </>
  );
}
