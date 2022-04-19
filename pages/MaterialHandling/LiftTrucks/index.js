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
              <Link href="/MaterialHandling/LiftTrucks/HandPalletTrucks">
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
                        Hand pallet trucks are a versatile piece of kit and a
                        must for any warehouse. Agile and easy-to-operate, these
                        trucks are the perfect choice whenever you need to
                        transport large volumes of goods or heavy loads quickly
                        and efficiently over short distances. Narrow aisles,
                        tight lorry loading areas, and steep ramps pose no
                        problem for them.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling/LiftTrucks/TableLifters">
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
                        The device has a scissor lifting mechanism. This enables
                        it to lift loads up to different heights without
                        compromising on maximum load capacity. All Gutman
                        lifting tables are raised with a foot pedal and can be
                        proportionally lowered with a hand lever.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling/LiftTrucks/Stackers">
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
                        Manual Stacker are equipped with standard formed metal
                        forks. The Gutman Stacker range enables you to lift and
                        rack pallets up to a height of 1,6m. The pump comes
                        standard with proportional lowering and a foot pedal to
                        speed up the lifting process.
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
