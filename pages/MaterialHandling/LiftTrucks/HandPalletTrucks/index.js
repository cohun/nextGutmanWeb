import Link from "next/link";
import Table from "../../../../components/Table";
import Head from "next/head";
import { createClient } from "contentful";

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "productTable" });
  console.log(res.items);

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "C.11."
  );

  return {
    props: {
      type: resFiltered,
    },
  };
}

function HandPalletTrucks({ type }) {
  return (
    <div>
      <Head>
        <title>Gutman Hand Pallet Trucks</title>
        <meta name="description" content="Gutman Hand Pallet Trucks" />
      </Head>

      <section className="pt-6"></section>
      <section className="pt-4 pb-0">
        <nav
          className="breadcrumb is-right has-arrow-separator"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <Link href="/" passHref>
                <div className="has-text-grey px-3">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/MaterialHandling" passHref>
                <div className="has-text-grey px-3">Material Handling</div>
              </Link>
            </li>
            <li>
              <Link href="/MaterialHandling/LiftTrucks" passHref>
                <div className="has-text-grey px-3">LiftTrucks</div>
              </Link>
            </li>
            <li>
              <Link
                href="/MaterialHandling/LiftTrucks/HandPalletTrucks"
                passHref
              >
                <div className="is-active px-3">HandPalletTrucks</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default HandPalletTrucks;