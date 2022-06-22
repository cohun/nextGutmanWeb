import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const TextileSlings = () => {
  return (
    <div>
      <Head>
        <title>Gutman textile slings</title>
        <meta name="description" content="Gutman textile slings" />
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
              <Link
                href="/LiftingEquipment/LiftingAccessories/TextileSlings"
                passHref
              >
                <div className="tag is-active px-3 is-info">Textile Slings</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Textile Slings and Components
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings/RoundSling">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.411. Round slings</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/411.-Round-slings_T.jpg"
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
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings/WebbingSling">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.412. Flat woven webbing sling
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/412.-Flat-woven-webbing-sling_T.jpg"
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
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings/BridleSling">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.413. Textile Bridle Slings
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/413.-Textile-Bridle-Slings_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Type IRG sling configurations consist of round sling
                        legs, which are affixed on one end to a master link,
                        with some type of attachment, usually a hook, affixed to
                        the opposite end.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings/FibreRopes">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.414. Fibre ropes</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/414.-Fibre-ropes_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Fibre rope slings are the traditional form of textile
                        sling whose origins are recorded in the earliest history
                        of lifting equipment. Although their use has declined in
                        recent years in favour of the newer forms of textile
                        slings, i.e. ﬂat woven webbing slings and roundslings,
                        they may still be found in general use throughout
                        industry
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

export default TextileSlings;
