import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Lashing = () => {
  return (
    <div>
      <Head>
        <title>Gutman lashing</title>
        <meta name="description" content="Gutman lashing" />
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
              <Link href="/Miscellaneous/Lashing" passHref>
                <div className="is-active px-3">Lashing systems</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Lashing Systems</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing/LashingStraps">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D.11. Lashing straps</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.11.-Lashing-straps.jpg"
                        alt="Lashing"
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
              <Link href="/Miscellaneous/Lashing/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D.12. Lashing chains</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.12.-Lashing-chains.jpg"
                        alt="Lashing chain"
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
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D.13. Edge protectors</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.13.-Edge-protectors.jpg"
                        alt="Edge protector"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Edge or corner protectors (sometimes also called strap
                        protectors, vee boards, or tie down strap protectors)
                        are an inexpensive way to protect not only your cargo,
                        but also protect your straps or chains, and any tarps or
                        covers that you use in tie down applications.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        D.14. Load restraint systems
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.14.-Load-restraint-systems.jpg"
                        alt="Load restraint system"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        The number one priority of all transport truck drivers
                        is safety. The second priority of all transport truck
                        drivers is getting the cargo to its final destination
                        undamaged. Knowing this, load restraint systems are a
                        quick and easy way to secure cargo in the back of a
                        pickup truck.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D.15. Anti-slip mats</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.15.-Anti-slip-mats.jpg"
                        alt="Antislip mats"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Anti-slip mats are an indispensable and important way to
                        secure cargo. They make a valuable contribution to
                        safety and, due to the increase in the coefficient of
                        sliding friction to μD 0.6, prevent your goods and cargo
                        from slipping around dangerously.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        D.16. Disposable lashing
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.16.-Disposable-lashing.jpg"
                        alt="Disposable lashing"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Disposable or one way lashing for applications in which
                        the lashings used are disposed of at the end of the
                        transport route.
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

export default Lashing;
