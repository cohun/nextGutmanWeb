import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import SearchItem from './SearchItem';

export async function getServerSideProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: 'search',
  });
  const searchItems = res.items;

  return {
    props: {
      searchItems: searchItems,
    },
  };
}

const SearchTerms = (props) => {
  const router = useRouter();
  const [term, setTerm] = useState('');

  useEffect(() => {
    setTerm(router.query.name);
  }, [router.query.name]);

  return term ? (
    <div>
      <SearchItem term={term} searchItems={props.searchItems} />
    </div>
  ) : (
    <div></div>
  );
};

export default SearchTerms;
