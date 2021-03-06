import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Search = ({ setActive }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  const searchItem = (item) => {
    router.push({
      pathname: '/SearchItems',
      query: { name: item },
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    setActive('');
    searchItem(searchTerm);
    setSearchTerm('');
  };

  return (
    <form className="field has-addons" onSubmit={handleSearch}>
      <div className="control has-icons-left">
        <input
          className="input is-primary is-focused"
          type="text"
          placeholder="Search for Products"
          value={searchTerm}
          required
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <span className="icon is-small is-left">
          <figure className="image is-24x24">
            <Image width={24} height={24} src="/search.png" alt="Search" />
          </figure>
        </span>
      </div>
      <div className="control">
        <button
          className="button is-primary"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
