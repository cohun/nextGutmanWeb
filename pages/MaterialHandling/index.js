import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const MaterialHandling = () => {
  return (
    <div>
      <Head>
        <title>Gutman lifttruck</title>
        <meta name="description" content="Gutman lifttruck" />
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
              <Link href="/MaterialHandling" passHref>
                <div className="tag is-active px-3 is-info">
                  Material Handling
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Material Handling
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling/LiftTrucks">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">C.1. Lift Trucks</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.1.-Lift-Trucks_T.jpg"
                        alt="Crane and Trolley"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Different small trucks used to lift and move materials
                        over short distances.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling/Attachments">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">C.2. Attachments</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.2.-Attachments_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A lifting equipment which can be worked through power.
                        They are designed to reduce the manual handling effort
                        and associated risk to the user to a minimum.
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

export default MaterialHandling;
