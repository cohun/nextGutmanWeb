import Image from 'next/image';
import Link from 'next/link';
import Table from '../../../../../components/Table';

function RoundSling() {
  return (
    <div>
      <section className="pt-6"></section>
      <section className="pt-4 pb-0">
        <nav
          className="breadcrumb is-right has-arrow-separator"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <Link href="/">
                <div className="has-text-grey px-3">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment">
                <div className="has-text-grey px-3">Lifting Equipment</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/LiftingAccessories">
                <div className="has-text-grey px-3">Lifting Accessories</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings">
                <div className="has-text-grey px-3">Textile Slings</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings/RoundSling">
                <div className="is-active px-3">Roundlings</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <Table />
    </div>
  );
}

export default RoundSling;
