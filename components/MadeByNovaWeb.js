export default function MadeByNovaWeb() {
  return (
    <div className="novaweb-credit-bar">
      <a
        className="novaweb-credit"
        href="https://www.nova-web.it/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Site desenvolvido pela NovaWeb"
        title="NovaWeb"
      >
        <span>Made by</span>
        <span className="novaweb-credit-logo">
          <img
            src="https://www.nova-web.it/Logo-scritta-vet.png"
            alt="NovaWeb"
            width="72"
            height="20"
            loading="lazy"
            decoding="async"
          />
        </span>
      </a>
    </div>
  );
}
