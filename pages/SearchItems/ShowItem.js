import { createClient } from "contentful";
import Table from "../../components/Table";
import { useRouter } from "next/router";
import Image from "next/image";

export async function getServerSideProps(context) {
  const productGroupId = context.query.name;

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "productTable",
  });

  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === productGroupId
  );

  return {
    props: {
      query: context.query.name,
      type: resFiltered,
    },
  };
}
function ShowItem(props) {
  const router = useRouter();
  return (
    <section className="section mt-6">
      <div className="box ">
        <div className="content has-text-centered">
          <button
            className="button is-medium is-primary is-outlined"
            type="button"
            onClick={() => router.back()}
          >
            <span className="icon is-medium">
              <i className="fab fa-github"></i>
            </span>
            Click here to go back to search results
          </button>
        </div>
      </div>

      <Table type={props.type} />
    </section>
  );
}

export default ShowItem;
