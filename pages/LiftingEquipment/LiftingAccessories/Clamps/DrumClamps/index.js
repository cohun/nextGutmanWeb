import Link from "next/link";
import Table from "../../../../../components/Table";
import Head from "next/head";
import { createClient } from "contentful";

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "productTable",
    "fields.productGroupId[all]": "A.443.",
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "A.443."
  );

  return {
    props: {
      type: resFiltered,
    },
  };
}

function DrumClamp({ type }) {
  return (
    <div>
      <Head>
        <title>Drum Clamps</title>
        <meta name="description" content="Drum Clamps" />
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
              <Link href="/LiftingEquipment/LiftingAccessories/Clamps" passHref>
                <div className="has-text-grey px-3">Clamps</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/LiftingAccessories/Clamps/DrumClamps"
                passHref
              >
                <div className="tag is-active px-3 is-info">Drum Clamps</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default DrumClamp;
