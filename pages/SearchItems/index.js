import Link from "next/link";

const SearchTerms = () => {
  return (
    <section className="section mt-6">
      <article className="panel is-primary">
        <p className="panel-heading">Search Hits for ....</p>

        <a className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          first
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          second
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          third
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          fourth
        </a>
      </article>
    </section>
  );
};

export default SearchTerms;
