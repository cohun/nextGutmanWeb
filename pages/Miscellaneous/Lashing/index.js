import Image from 'next/image';
import Link from 'next/link';

const Lashing = () => {
  return (
    <div>
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
              <Link href="/Miscellaneous/Lashing/">
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
                        alt="Lashing strap"
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

export default Lashing;
