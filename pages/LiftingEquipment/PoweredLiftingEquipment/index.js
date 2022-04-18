import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const LiftingEquipment = () => {
  return (
    <div>
      <Head>
        <title>Gutman powered lifting equipment</title>
        <meta name="description" content="Gutman powered lifting equipment" />
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
              <Link href="/LiftingEquipment">
                <a className="has-text-grey">Lifting Equipment</a>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/PoweredLiftingEquipment">
                <a className="has-text-grey">Powered Lifting Equipment</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Powered Lifting Equipment
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/ElectricHoist">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.21. Electric hoists</p>
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
                      <p className="card-header-title">A.22. Lifting tables</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.22.-Lifting-tables_T.jpg"
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
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.23. Vacuum lifter</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.23.-Vacuum-lifter_T.jpg"
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

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.24. Air hoists</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.24.-Air-hoists_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Pneumatic power operated hoists offer many advantages
                        over electrically operated equipment and as a result are
                        widely used in industries where air is provided for
                        other purposes or where the safety aspects associated
                        with air operated equipment are a major consideration.
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

export default LiftingEquipment;
