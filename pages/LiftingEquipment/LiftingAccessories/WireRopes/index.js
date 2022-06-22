import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const WireRopes = () => {
  return (
    <div>
      <Head>
        <title>Gutman wireropes</title>
        <meta name="description" content="Gutman wireropes" />
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
                href="/LiftingEquipment/LiftingAccessories/WireRopes"
                passHref
              >
                <div className="tag is-active px-3 is-info">Wire Ropes</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Steel wire rope, slings
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/WireRopes/WireRopeSlings">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.431. Wire rope slings
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/431.-Wire-rope-slings.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Wire rope is often used in slings because of its
                        strength, durability, abrasion resistance and ability to
                        conform to the shape of the loads. The use of wire rope
                        slings is one of the most important pieces of rigging
                        hardware used in lifting and hoisting operations.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/WireRopes/SteelWireRopes">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.432. Steel wire ropes
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.432.-SteelWireRope.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Wire rope is several strands of metal wire twisted into
                        a helix forming a composite rope, in a pattern known as
                        laid rope. Steel wires for wire ropes are normally made
                        of non-alloy carbon steel. Depending on where they are
                        used, wire ropes have to fulfill different requirements.
                        The main uses are: Running ropes, Stationary ropes, Wire
                        rope slings.
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

export default WireRopes;
