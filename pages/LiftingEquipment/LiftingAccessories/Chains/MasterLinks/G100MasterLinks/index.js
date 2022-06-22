import Link from "next/link";
import Table from "../../../../../../components/Table";
import Head from "next/head";
import { createClient } from "contentful";

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "productTable",
    "fields.productGroupId[all]": "A.4222.",
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "A.4222."
  );

  return {
    props: {
      type: resFiltered,
    },
  };
}

function G100MasterLinks({ type }) {
  return (
    <div>
      <Head>
        <title>G80 Master Links & Connectors</title>
        <meta name="description" content="G80 Master Links & Connectors" />
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
              <Link href="/LiftingEquipment/LiftingAccessories/Chains" passHref>
                <div className="has-text-grey px-3">Chains</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/LiftingAccessories/Chains/MasterLinks"
                passHref
              >
                <div className="has-text-grey px-3">MasterLinks</div>
              </Link>
            </li>

            <li>
              <Link
                href="/LiftingEquipment/LiftingAccessories/Chains/MasterLinks/G100MasterLinks"
                passHref
              >
                <div className="tag is-active px-3 is-info">
                  G100 MasterLinks & Connectors
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default G100MasterLinks;
