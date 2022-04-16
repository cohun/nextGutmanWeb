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
                        A crane is a type of machine, generally equipped with a
                        hoist rope, wire ropes or chains, and sheaves, that can
                        be used both to lift and lower materials and to move
                        them horizontally.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/PoweredMiscellaneous">
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
                        A lifting equipment which can be worked through power.
                        They are designed to reduce the manual handling effort
                        and associated risk to the user to a minimum.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/ManualMiscellaneous">
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
                        A lifting equipment which is not worked through power
                        but by an individual. (lifting, putting down, pushing,
                        pulling, carrying or moving)
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
