import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "search",
  });
  const searchItems = res.items;

  return {
    props: {
      searchItems: searchItems,
    },
  };
}

const SearchTerms = (props) => {
  const router = useRouter(props);

  const [term, setTerm] = useState("");

  useEffect(() => {
    setTerm(router.query.name);
  }, [router.query.name]);

  let refArray = [];
  let resFiltered = [];

  props.searchItems.length >= 1 && term
    ? (resFiltered = props.searchItems.filter(
        (item) => item.fields.search === term.toLowerCase()
      ))
    : console.log("No");

  resFiltered.length >= 1
    ? (refArray = resFiltered[0].fields.references)
    : console.log("No");

  return term !== "" ? (
    <section className="section mt-6">
      <article className="panel is-primary">
        <p className="panel-heading">
          <span>Search hits for: </span>
          <span className="has-text-warning is-size-5">...{term}...</span>
        </p>

        {refArray.length >= 1 ? (
          refArray.map((ref) => {
            return (
              <Link
                href={{
                  pathname: "/SearchItems/ShowItem",
                  query: { name: ref.fields.productGroupId },
                }}
                passHref
                key={ref.fields.name}
              >
                <a className="panel-block is-active">
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
              </Link>
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
  ) : (
    <div></div>
  );
};

export default SearchTerms;
