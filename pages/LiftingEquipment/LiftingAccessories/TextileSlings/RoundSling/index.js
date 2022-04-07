import Image from "next/image";
import Link from "next/link";
import Table from "../../../../../components/Table";

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
                <a className="has-text-grey">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment">
                <a className="has-text-grey">Lifting Equipment</a>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/LiftingAccessories">
                <a className="has-text-grey">Lifting Accessories</a>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings">
                <a className="has-text-grey">Textile Slings</a>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings/RoundSling">
                <a className="has-text-grey">Roundlings</a>
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
