'use client';

export default function MadeByNovaWeb() {
  return (
    <div className="novaweb-credit-wrap">
      <a
        className="novaweb-credit"
        href="https://www.nova-web.it/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Site desenvolvido pela NovaWeb"
        title="NovaWeb"
      >
        <span className="novaweb-credit-label">Made by</span>
        <span className="novaweb-credit-logo">
          <img
            src="https://www.nova-web.it/Logo-scritta-vet.png"
            alt="NovaWeb"
            width="78"
            height="22"
            loading="lazy"
            decoding="async"
          />
        </span>
      </a>

      <style jsx>{`
        .novaweb-credit-wrap {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .novaweb-credit {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 42px;
          margin: 0;
          padding: 7px 8px 7px 13px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 999px;
          background: #000;
          box-shadow: 0 10px 28px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.05);
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
          isolation: isolate;
        }
        .novaweb-credit::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(110deg, transparent 25%, rgba(255,255,255,.08) 50%, transparent 75%);
          transform: translateX(-120%);
          transition: transform .55s ease;
        }
        .novaweb-credit:hover {
          transform: translateY(-2px);
          border-color: rgba(141,181,230,.50);
          box-shadow: 0 14px 34px rgba(0,0,0,.40), 0 0 0 1px rgba(141,181,230,.06) inset;
        }
        .novaweb-credit:hover::before { transform: translateX(120%); }
        .novaweb-credit-label {
          white-space: nowrap;
          color: rgba(255,255,255,.82);
          font-size: 7px;
          font-weight: 700;
          letter-spacing: .17em;
          text-transform: uppercase;
        }
        .novaweb-credit-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 28px;
          padding: 4px 9px;
          border-radius: 999px;
          background: #fff;
          box-shadow: inset 0 0 0 1px rgba(8,17,31,.08);
        }
        .novaweb-credit-logo img {
          display: block;
          width: 78px;
          height: auto;
          object-fit: contain;
        }
        @media (max-width: 580px) {
          .novaweb-credit { min-height: 40px; padding-left: 12px; }
          .novaweb-credit-logo img { width: 72px; }
        }
      `}</style>
    </div>
  );
}
