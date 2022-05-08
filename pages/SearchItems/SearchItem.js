import Image from 'next/image';

const SearchItem = ({ term, searchItems }) => {
  console.log(term);
  console.log(
    'searchItems: ' + searchItems[0].fields.references[0].fields.name
  );
  let refArray = [];
  let resFiltered = [];

  searchItems.length >= 1 && term
    ? (resFiltered = searchItems.filter(
        (item) => item.fields.search === term.toLowerCase()
      ))
    : console.log('No');

  resFiltered.length >= 1
    ? (refArray = resFiltered[0].fields.references)
    : console.log('No');
  console.log(refArray);

  return (
    <section className="section mt-6">
      <article className="panel is-primary">
        <p className="panel-heading">
          <span>Search hits for: </span>
          <span className="has-text-warning is-size-5">...{term}...</span>
        </p>

        {refArray.length >= 1 ? (
          refArray.map((ref) => {
            return (
              <a key={ref.fields.name} className="panel-block is-active">
                <span>
                  <Image
                    width={40}
                    height={40}
                    src="/searchIcon.png"
                    alt="Search Icon"
                  />
                </span>

                {ref.fields.productGroupId}
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                {ref.fields.name}
              </a>
            );
          })
        ) : (
          <a className="panel-block is-active">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            no data
          </a>
        )}
      </article>
    </section>
  );
};

export default SearchItem;
