import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Disributors from "../components/Distributors";

export default function Home() {
  return (
    <div className="has-navbar-fixed-top">
      <Head>
        <title>Gutman lifting products</title>
        <meta name="description" content="Gutman lifting products" />
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
                <div className="px-3 is-active">Home</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="section is-hidden-mobile">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>
                Gutman is a well known brandname among lifting equipment users.
                Gutman stands for safe, reliable products and best service. Any
                lifting-related activity shall be covered by a product-, system-
                or service solution of Gutman. Therefore you can find in our
                product range an always improving and expanding assortment which
                has been carefully made up for your benefit.
              </p>
            </div>
            <div className="column">
              <p>
                We supply only the very highest quality lifting equipment with a
                strong and durable design - priding ourselves on providing an
                exemplary customer service. A broad product range allow us to
                facilitate almost any lifting requirement for our customers. Our
                products and services are continually up-dated to meet the needs
                of industry with a strong emphasis on quality and safety
              </p>
            </div>
            <div className="column">
              <p>
                For the marketed Gutman products through our dealer network and
                representatives we are able to perform inspection and testing as
                well. This service includes providing registers of lifting
                equipment for our customers and completing the 6 or 12 monthly
                inspections as required by law. Our clients can enjoy the
                benefits of short delivery time due to our large stocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="title has-text-centered is-size-3">
            Product Categories
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A. Lifting Equipment</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <figure className="image is-165x165">
                        <Image
                          width={165}
                          height={165}
                          src="/A.-Lifting-Equipment_T.jpg"
                          alt="Lifing accessories"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        The term lifting equipment contains all lifting
                        accessories and appliances, any machine which is able to
                        raise, lower or suspend a load. Examples are cranes,
                        hoists, jacks, etc.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/OperatorsDuty">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        B. Operators Duty Service
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/B.-Operators-Duty-Service_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A service to help operators to comply with legislative
                        requirements concerning the use of lifting equipment.
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
                      <p className="card-header-title">C. Material Handling</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.-Material-Handling_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Mechanical equipment used for the movement, transport,
                        positioning, storage of materials, goods and products
                        throughout the process of manufacturing, distribution,
                        consumption, and disposal.
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
                      <p className="card-header-title">
                        D. Miscellaneous products
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.-Miscellaneous_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Products which are connected to material transport but
                        fall not under the same regulations as lifting
                        equipment.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Disributors />
    </div>
  );
}
