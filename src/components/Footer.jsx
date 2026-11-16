import { useState } from "react";
import GemMark from "./GemMark";
import { SOCIAL_ICONS, MailIcon } from "./icons";
import { EMAIL, SOCIAL, SUBSCRIBE, COPYRIGHT, NAV } from "../content";

export default function Footer() {
  const [done, setDone] = useState(false);

  return (
    <footer className="ft" id="contact">
      {/* Subtle brand watermark */}
      <GemMark className="ft-gem" />

      {/* Main Light Footer Container */}
      <div className="ft-in">
        {/* Left: Brand, Email & Social Links */}
        <div className="ft-brand">
          <a className="ft-logo" href="/" aria-label="Kuantam Solutions home">
            <img alt="Kuantam Solutions" src="/KuantomSol-02.png" />
          </a>
          <a className="ft-mail" href={`mailto:${EMAIL}`}>
            <MailIcon />
            <span>{EMAIL}</span>
          </a>
          <div className="ft-soc">
            {SOCIAL.map(([n, h]) => (
              <a
                key={n}
                href={h}
                aria-label={n}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SOCIAL_ICONS[n]}
              </a>
            ))}
          </div>
        </div>

        {/* Middle: Header Navigation Links (Two-Column Layout) */}
        <nav className="ft-nav" aria-label="Footer navigation">
          {NAV.map(([t, h]) => (
            <a key={t} href={h} className="ft-nav-link">
              <span className="ft-nav-dot" aria-hidden="true" />
              <span>{t}</span>
            </a>
          ))}
        </nav>

        {/* Right: Pill Email Subscription */}
        <div className="ft-sub">
          <h3>{SUBSCRIBE.title}</h3>
          <p>{SUBSCRIBE.body}</p>
          <form
            className={`ft-form${done ? " is-done" : ""}`}
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <span className="ft-form-ic" aria-hidden="true">
              <MailIcon />
            </span>
            <input
              type="email"
              required
              disabled={done}
              placeholder={
                done ? "Thank you for subscribing!" : "Enter your email address"
              }
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={done}
              aria-label={done ? "Subscribed" : "Subscribe"}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {done ? (
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Dark Bar: Copyright (Left) & Powered By (Right) */}
      <div className="ft-bar">
        <div className="ft-bar-in">
          <p className="ft-copy">{COPYRIGHT}</p>
          <p className="ft-powered">
            Powered by{" "}
            <a
              href="https://pulsedigimedia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              pulsedigimedia.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}