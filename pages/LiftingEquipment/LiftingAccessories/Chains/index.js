import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Chains = () => {
  return (
    <div>
      <Head>
        <title>Gutman chains</title>
        <meta name="description" content="Gutman chains" />
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
              <Link href="/LiftingEquipment/LiftingAccessories" passHref>
                <div className="has-text-grey px-3">Lifting Accessories</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/LiftingAccessories/Chains" passHref>
                <div className="is-active px-3">Chains</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Chain, -slings, components
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Chains/ChainSlings">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.421. Chain slings</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/421.-Chain-slings.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Round slings are made from a continuous loop of
                        polyester yarn covered by a double wall tubular
                        polyester jacket. It is manufactured according to EN
                        1492 Part 2
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Chains/ChainComponents">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.422. Chains & Components
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/422.-Chains-&-Components.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Flat webbing sling is a standard device for lifting
                        applications. It is made from high tensile polyester
                        (PES) manufactured according to EN 1492 Part 1
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

export default Chains;
