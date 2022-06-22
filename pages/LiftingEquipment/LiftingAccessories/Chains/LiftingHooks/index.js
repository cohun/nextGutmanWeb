import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const LiftingHooks = () => {
  return (
    <div>
      <Head>
        <title>Gutman LiftingHooks</title>
        <meta name="description" content="Gutman LiftingHooks" />
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
                <div className="has-text-grey px-3">Chains</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/LiftingAccessories/Chains/LiftingHooks"
                passHref
              >
                <div className="tag is-active px-3 is-info">LiftingHooks</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">LiftingHooks</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Chains/LiftingHooks/G80LiftingHooks">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.4231. G80 LiftingHooks
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.4222.-LiftingHooks.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Grade 80 chain components are designed for Chain Slings
                        for industrial lifting applications. It is made from
                        alloy steel, hardened and tempered. It has a high
                        resistance to impact and meets critical requirements.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Chains/LiftingHooks/G100LiftingHooks">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.4232. G100 LiftingHooks
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.4232.-hooks.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        G100 chain components are European manufactured,
                        generally used for Chain Slings with 25% higher lifting
                        capacity than G80. Manufactured from hardened and
                        tempered alloy steels and has a high resistance to
                        impact and wear to meet critical requirements.
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

export default LiftingHooks;
