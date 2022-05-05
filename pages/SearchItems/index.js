import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: 'search',
  });
  console.log(res.items);

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.search === 'roundsling'
  );
  console.log('filtered: ' + resFiltered);
  return {
    props: {
      type: resFiltered,
    },
  };
}

const SearchTerms = (props) => {
  const router = useRouter(props);
  const [term, setTerm] = useState('');

  useEffect(() => {
    setTerm(router.query.name);
  }, [router.query.name]);

  return (
    <section className="section mt-6">
      <article className="panel is-primary">
        <p className="panel-heading">
          <span>Search hits for: </span>
          <span className="has-text-warning is-size-5">...{term}...</span>
        </p>

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
