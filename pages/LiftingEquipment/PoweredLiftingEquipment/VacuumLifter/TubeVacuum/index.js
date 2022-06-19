import Link from 'next/link';
import Table from '../../../../../components/Table';
import Head from 'next/head';
import { createClient } from 'contentful';

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: 'productTable',
    'fields.productGroupId[all]': 'A.232.',
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === 'A.232.'
  );

  return {
    props: {
      type: resFiltered,
    },
  };
}

function TubeVacuum({ type }) {
  return (
    <div>
      <Head>
        <title>Tube Vacuum</title>
        <meta name="description" content="Tube Vacuum Lifting Device" />
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
              <Link href="/LiftingEquipment/PoweredLiftingEquipment" passHref>
                <div className="has-text-grey px-3">
                  Powered Lifting Equipment
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter"
                passHref
              >
                <div className="has-text-grey px-3">Vacuum Lifter</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter/TubeVacuum"
                passHref
              >
                <div className="is-active px-3">Tube Vacuum Lifter</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default TubeVacuum;
