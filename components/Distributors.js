import Image from "next/image";
import Link from "next/link";

const Disributors = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered is-gapless">
            <div className="column is-one-half"></div>
            <div className="column">
              <Image
                width={200}
                height={80}
                src="/GutmanLogo.jpg"
                alt="Gutman"
              />
            </div>

            <div className="column ">
              <h1 className="title  is-size-3">Distributors</h1>
            </div>
            <div className="column is-one-fifth"></div>
          </div>

          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">Hungary</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/Hungary.jpg"
                        alt="Slovakia"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        H-1119 Budapest, Kelenvölgy htsr.5 www.h-itb.hu
                        hitb@h-itb.hu +36 1 2056208
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
                      <p className="card-header-title">Romania</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/Romania.jpg"
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
              <Link href="/LiftingEquipment">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">Slovakia</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/Slovakia.jpg"
                        alt="Slovakia"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        H-1119 Budapest, Kelenvölgy htsr.5 www.h-itb.hu
                        hitb@h-itb.hu +36 1 2056208
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
                      <p className="card-header-title">Serbia</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/Serbia.jpg"
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
                      <p className="card-header-title">Croatia</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/Croatia.jpg"
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disributors;
