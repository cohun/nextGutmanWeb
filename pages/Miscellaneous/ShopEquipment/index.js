import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const ShopEquipment = () => {
  return (
    <div>
      <Head>
        <title>Gutman ShopEquipment</title>
        <meta name="description" content="Gutman ShopEquipment" />
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
              <Link href="/Miscellaneous" passHref>
                <div className="has-text-grey px-3">Miscellaneous</div>
              </Link>
            </li>
            <li>
              <Link href="/Miscellaneous/ShopEquipment" passHref>
                <div className="is-active px-3">ShopEquipment</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">ShopEquipment</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/ShopEquipment/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        D.21. ShopEquipment straps
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.11.-ShopEquipment-straps.jpg"
                        alt="ShopEquipment"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Cargo restraint ratchet straps are available in
                        different sizes , capacities and lengths. Ratchet straps
                        have a steel ratchet handle with a polyester webbing
                        sling. Single part ratchet straps have the long webbing
                        sling fitted permanently to the ratchet. 2 part ratchet
                        straps have a separate web sling with end fittings. The
                        web sling can be supplied with different end fittings
                        dependant on our customer s applications, usually hook
                        or eye or buckle (many types). We also supply cam buckle
                        restraint straps, lorry straps, one way straps.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/ShopEquipment/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        D.22. ShopEquipment chains
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.12.-ShopEquipment-chains.jpg"
                        alt="ShopEquipment chain"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Load binders are to achieve exactly the same function as
                        ratchet straps. They are totally made from steel using a
                        chain sling with grab hook as opposed to a webbing
                        sling. There are differing styles available, ratchet
                        load binders and lever action load binders. These are
                        used in applications where items with shape edge s or
                        abrasive surfaced need to be restrained; surfaces that
                        would damage or cut a polyester sling ratchet load
                        binder and can be supplied in different configurations
                        with a hook or eye termination or with a permanently
                        fitted restraint chain fitted.
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

export default ShopEquipment;
