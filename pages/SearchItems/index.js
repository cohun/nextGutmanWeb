import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import SearchItem from './SearchItem';

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: 'search',
  });
  const searchItems = res.items;
  console.log(res.items[1]);
  console.log(res.items[0].fields);
  console.log(res.items[0].fields.search);

  return {
    props: {
      searchItems: searchItems,
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
    <div>
      <SearchItem term={term} searchItems={props.searchItems} />
    </div>
  );
};

export default SearchTerms;
