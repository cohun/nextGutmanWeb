import Image from 'next/image';
import Link from 'next/link';

const Miscellaneous = () => {
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
                <div className="px-3 is-active">Miscellaneous</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Miscellaneous Products
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D.1. Lashing systems</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.1.-Lashing-systems_T.jpg"
                        alt="Lashing"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Load restraint equipment are used to tie down equipment
                        stopping it from moving. Load restraint and cargo
                        restraint products are not lifting equipment and cannot
                        be used for lifting application under any circumstances.
                        Items need restraining from movement when being
                        transported between locations for example road and rail
                        freight. If the cargo is not restrained it could easily
                        cause an accident falling from the vehicle or train.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D.2. Shop equipment</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.2.-Shop-equipment_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        In this category Gutman offers many items that don’t
                        really fall into any other category but for a
                        maintenance or repair facility these items of garage
                        equipment are needed to lift or move things around.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D.3. Fall Protection</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.3.-Fall-Protection-.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        We offer a very comprehensive selection of fall arrest
                        and height safety equipment for those needing to keep
                        safe while working at height.
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

export default Miscellaneous;
