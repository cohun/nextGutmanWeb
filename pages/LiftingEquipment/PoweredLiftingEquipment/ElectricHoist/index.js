import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const ElectricHoist = () => {
  return (
    <div>
      <Head>
        <title>Electric Hoists</title>
        <meta name="description" content="Electric Hoists" />
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
              <Link href="/LiftingEquipment/PoweredLiftingEquipment" passHref>
                <div className="has-text-grey px-3">
                  Powered Lifting Equipment
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/PoweredLiftingEquipment/ElectricHoist"
                passHref
              >
                <div className="tag is-active px-3 is-info">
                  Electric Hoists
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Electric Hoists</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/ElectricHoist/ElectricChainHoist">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.211. Electric Chain Hoist
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.21.-Electric-hoists_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        An electric chain hoist is designed so that the chain
                        passes over a pocketed wheel, the slack chain may hang
                        freely or be stored in a chain collecting box. they can
                        be combined with trolleys.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/ElectricHoist/ElectricWireRopeHoist">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.212. Electric Wire Rope Hoist
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.212.ElectricWireRopeHoist.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        An electric wire rope hoist is designed so that the wire
                        rope winds on and off a drum upon it is stored. The
                        hoist may be combined with travelling trolleys.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/ElectricHoist/ElectricWinch">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.213. Electric Winch</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.213.ElectricWinches.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Winches provide a winding mechanism which may be fitted
                        or built into structure to enable loads to be moved from
                        one position to another.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectricHoist;
