import Link from "next/link";
import Table from "../../../../../components/Table";
import Head from "next/head";
import { createClient } from "contentful";

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "productTable" });
  console.log(res.items);
  return {
    props: {
      irs: res.items,
    },
  };
}

function RoundSling({ irs }) {
  return (
    <div>
      <Head>
        <title>Gutman lifting products</title>
        <meta name="description" content="Gutman polyester roundsling" />
        <link rel="icon" href="/favicon.ico" />
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
              <Link href="/LiftingEquipment" passHref>
                <div className="has-text-grey px-3">Lifting Equipment</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/LiftingAccessories" passHref>
                <div className="has-text-grey px-3">Lifting Accessories</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/LiftingAccessories/TextileSlings"
                passHref
              >
                <div className="has-text-grey px-3">Textile Slings</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/LiftingAccessories/TextileSlings/RoundSling"
                passHref
              >
                <div className="is-active px-3">Roundlings</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table irs={irs} />
    </div>
  );
}

export default RoundSling;
