import Image from 'next/image';

const Search = () => {
  return (
    <div>
      <p className="control has-icons-left">
        <input
          className="input is-primary"
          type="text"
          placeholder="Search for Products"
        ></input>
        <span className="icon is-small is-left">
          <figure className="image is-24x24">
            <Image
              width={24}
              height={24}
              src="/search.png"
              alt="Lifing accessories"
            />
          </figure>
        </span>
      </p>
    </div>
  );
};

export default Search;
