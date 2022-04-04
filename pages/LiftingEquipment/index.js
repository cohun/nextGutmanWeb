import Image from 'next/image';
import Link from 'next/link';

const LiftingEquipment = () => {
  return (
    <div>
      <section className="pt-4 pb-0">
        <nav
          className="breadcrumb is-right has-arrow-separator"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <Link href="/">
                <a className="has-text-grey">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment">
                <a className="has-text-grey">Lifting Equipment</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section">
        <div className="container">
          <h3 className="title has-text-centered is-size-3">
            Lifting Equipment
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.1. Crane and Trolley
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.1.-Crane_and_Trolley_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        The term lifting equipment contains all lifting
                        accessories and appliances, any machine which is able to
                        raise, lower or suspend a load. Examples are cranes,
                        hoists, jacks, etc.
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
                      <p className="card-header-title">
                        A.2. Powered LiftingEquipment
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.2.-Powered_Liftinf_Equipment_T.jpg"
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
                      <p className="card-header-title">
                        A.3. Manual LiftingEquipment
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.3.-Manual_Lifting_Equipment_T.jpg"
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

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.4. Lifting Accessories
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.-Miscellaneous_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Lorem ipsum leo risus, porta ac consectetur ac,
                        vestibulum at eros. Donec id elit non mi porta gravida
                        at eget metus. Cum sociis natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus. Cras
                        mattis consectetur purus sit amet fermentum.
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

export default LiftingEquipment;
