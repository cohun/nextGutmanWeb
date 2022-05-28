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
                <a className="has-text-grey">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment">
                <a className="has-text-grey">Lifting Equipment</a>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/CraneAndTrolley">
                <a className="has-text-grey">Crane and Trolley</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Crane and Trolley
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/CraneAndTrolley/Overhead">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.11. Overhead crane</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.11.-Overhead-Crane_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        An overhead crane, commonly called a bridge crane, is a
                        type of crane found in industrial environments. An
                        overhead crane consists of two parallel rails seated on
                        longitudinal I-beams attached to opposite steel columns
                        by means of brackets. The traveling bridge spans the
                        gap. A hoist, the lifting component of a crane, travels
                        along the bridge.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/CraneAndTrolley">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.12. Gantry Crane</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.12.-Gantry-Crane_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A gantry crane is a type of an overhead crane where the
                        bridge is rigidly supported on two or more legs running
                        on two fixed rails at ground level. Such a crane is
                        called a gantry crane or a goliath crane.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/CraneAndTrolley/JibCrane">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.13. JibCrane</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.13.-Jib-Crane_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A jib crane is a type of crane where a horizontal member
                        (jib or boom), supporting a moveable hoist, is fixed to
                        a wall or to a floor-mounted pillar. The jib may swing
                        through an arc, to give additional lateral movement, or
                        be fixed.
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
                      <p className="card-header-title">A.14. Portal Crane</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.14.-Portal-Crane.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Portable gantry cranes are used to lift and transport
                        smaller items. They are intended to be stationary when
                        loaded, and mobile when unloaded. Portal Cranes can be
                        outfitted with either a handoperated or a lower capacity
                        poweroperated chain hoist.
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
                      <p className="card-header-title">A.15. Light Crane</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.15.-Light-Crane_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        The light crane system can transfer loads along smooth,
                        three-dimensional lines. The low mass of the rail gives
                        it advantages over ceiling-mounted cranes in building a
                        production line in an existing plant. The system
                        requires only light force to operate, so it can be
                        easily handled by women and seniors.
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
                        A.16. Crane Components
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.16.-Crane-Components.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Crane control: Control pendant, Radio remote control
                        (can be duplicated with a control pendant). Cable power
                        supply systems: galvanised C-rail, mounting hardware,
                        cable trolley. Electrical and safety components.
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
