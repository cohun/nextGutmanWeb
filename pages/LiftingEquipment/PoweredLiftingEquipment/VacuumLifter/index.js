import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const VacuumLifter = () => {
  return (
    <div>
      <Head>
        <title>Gutman vacuum lifter</title>
        <meta name="description" content="Gutman vacuum lifter" />
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
                href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter"
                passHref
              >
                <div className="is-active px-3">Vacuum Lifter</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Vacuum Lifter</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter/TraversingVacuum">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.231. Traversing Vacuum Lifting device
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.231.-Traversing-Vacuum-Lifting-device.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A vacuum lifter is a type of load-handling attachment.
                        It is used primarily when moving goods with smooth and
                        largely non-porous surfaces, such as panels made of
                        sheet metal, Glass and chipboard. Vacuum lifters are
                        attached to electric Cable hoists and Chain hoists. A
                        vacuum pump generates underpressure between the
                        load-handling attachment and the load, while a rubber
                        Seal protects the vacuum from the surrounding
                        atmospheric pressure.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter/TubeVacuum">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.232. Tube Vacuum Lifter
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.232.-Tube-Vacuum-Lifter.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Vacuum tube lifters are a unique lifting aid designed
                        for repetitive handling of materials or loads. These
                        systems hold, lift, and lower the load all with a single
                        operator control, and require minimal operator training.
                        The use of interchangeable attachments allows for a
                        variety of shaped and sized loads to be handled without
                        the need for multiple systems.
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

export default VacuumLifter;
