import Image from "next/image";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchItem = (item) => {
    console.log(item);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    searchItem(searchTerm);
    setSearchTerm("");
  };

  return (
    <form className="field has-addons" onSubmit={handleSearch}>
      <p className="control has-icons-left">
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
      </p>
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
