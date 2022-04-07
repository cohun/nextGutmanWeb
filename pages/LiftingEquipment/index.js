import Image from 'next/image';
import Link from 'next/link';

const LiftingEquipment = () => {
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
              <Link href="/">
                <div className="has-text-grey px-3">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment">
                <div className="px-3 is-active">Lifting Equipment</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
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
                        src="/A.1.-Crane-and-Trolley_T.jpg"
                        alt="Lifing accessories"
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
              <Link href="/LiftingEquipment/PoweredLiftingEquipment">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.2. Powered Lifting Equipment
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
              <Link href="/LiftingEquipment/ManualLiftingEquipment">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.3. Manual Lifting Equipment
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
                        A lifting equipment which is not worked through power
                        but by an individual. (lifting, putting down, pushing,
                        pulling, carrying or moving)
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories">
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
                        src="/Lifting_Accessories_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        The term lifting accessory, or accessory for lifting, is
                        an item of equipment used to attach the load to the
                        lifting appliance. Such equipment is also known as
                        ‘rigging equipment’, ‘lifting gear’ or ‘lifting tackle’.
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
