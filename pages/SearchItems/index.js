import Link from 'next/link';

const SearchTerms = () => {
  return (
    <div>
      <h1 className="mb-6">Search</h1>
      <Link href={'/SearchItems/1'} passHref>
        <button className="button">Button</button>
      </Link>
    </div>
  );
};

export default SearchTerms;
