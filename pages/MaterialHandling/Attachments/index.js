import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Attachments = () => {
  return (
    <div>
      <Head>
        <title>Attachments</title>
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
              <Link href="/MaterialHandling/Attachments">
                <a className="px-3 is-active">Attachments</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Attachments</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling/Attachments/HandPalletTrucks">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        C.21. Crane Attachments
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.21.-Crane-Attachments.jpg"
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
              <Link href="/MaterialHandling/Attachments/TableLifters">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        C.22. Foklift Truck Attachments
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.22.-Forklift-Truck-Attachments.jpg"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attachments;
