import Image from 'next/image';

const Search = () => {
  const handleSearch = (s) => {
    console.log(s);
  };
  return (
    <div className="field has-addons">
      <p className="control has-icons-left">
        <input
          className="input is-primary is-focused"
          type="text"
          placeholder="Search for Products"
          onKeyUp={(e) => handleSearch(e.target.value)}
        ></input>
        <span className="icon is-small is-left">
          <figure className="image is-24x24">
            <Image width={24} height={24} src="/search.png" alt="Search" />
          </figure>
        </span>
      </p>
      <div className="control">
        <a className="button is-primary">Search</a>
      </div>
    </div>
  );
};

export default Search;
