import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const LiftTrucks = () => {
  return (
    <div>
      <Head>
        <title>Lifttrucks</title>
        <meta name="description" content="Gutman liftrtucks" />
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
              <Link href="/">
                <a className="has-text-grey">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/MaterialHandling">
                <a className="has-text-grey">Material Handling</a>
              </Link>
            </li>
            <li>
              <Link href="/MaterialHandling/LiftTrucks">
                <a className="px-3 is-active">Lifttrucks</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Lifttrucks</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/ElectricHoist">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        C.11. Hand pallet trucks
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.11.-Hand-pallet-trucks_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Power operated hoists are widely used in industry, often
                        as part of a larger lifting installation, e.g. with an
                        overhead runway, jib crane or overhead travelling crane,
                        or where a permanent lifting facility is required. They
                        may also be used for fxed position lifting applications
                        or where a temporary powered lifting facility is
                        required
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/LiftingTable">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">C.12. Table lifters</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.12.-Table-lifters_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A lift table is a device that employs a scissors
                        mechanism to raise or lower goods. Typically lift tables
                        are used to raise large, heavy loads through relatively
                        small distances. They can work in hostile environments,
                        be manufactured in stainless steel and have equipment
                        like conveyors, turn-tables, barriers and gates easily
                        added to their deckplates.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">C.13. Manual Stackers</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.13.-Manual-Stackers_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Vacuum lifters can be suitable for lifting loads which
                        have a smooth, non-porous surface such as metal plates,
                        glass, stone slabs, cardboard boxes, etc. If required,
                        the vacuum lifter can have the facility to tilt a load,
                        such as a steel or glass plate from horizontal to
                        vertical or vice versa, and be capable of rotating the
                        load.
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

export default LiftTrucks;
