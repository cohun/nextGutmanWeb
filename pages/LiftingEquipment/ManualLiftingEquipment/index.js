import Image from "next/image";
import Link from "next/link";

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
              <Link href="/LiftingEquipment">
                <a className="has-text-grey">Manual Lifting Equipment</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Manual Lifting Equipment
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.31. Chain hoists, trolleys
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.31.-Chain-hoists,-trolleys_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Hand operated chain hoists which require the use of a
                        hand chain for both hoisting and lowering. They are
                        ftted with an automatic brake which is capable of
                        arresting and sustaining the load at any position.
                        Available with separate or built in travelling trolleys.
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
                      <p className="card-header-title">A.32. Lever hoists</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.32.-Lever-hoists_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Chain lever hoists are in wide use throughout industry
                        for both lifting and pulling applications. They provide
                        a comparatively lightweight method of moving loads over
                        a short distance and the lever operation allows them to
                        be used in any operating position. Chain lever hoists
                        have a ‘free wheel’ facility, which allows the operative
                        to rapidly extend or take up slack chain under no load
                        conditions.
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
                      <p className="card-header-title">A.33. Racks & Jacks</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.33.-Racks-&-Jacks_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Jacks are widely used in industry where loads need to be
                        raised or lowered a limited distance. They are often
                        used to afford access for other means of handling or
                        lifting equipment and for levelling purposes. Their
                        versatility of use and portability make them ideal for
                        many maintenance functions.
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
                      <p className="card-header-title">A.34. Pulling hoists</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.34.-Pulling-hoists,-Lifting-Pulleys-&-Winches_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Lifting and pulling machines, also known as jaw winches,
                        are, by their very nature, versatile pieces of equipment
                        and are widely used throughout industry. A hand operated
                        lever activates a mechanism to provide a direct pull on
                        an integral rope which is attached to the load. The pull
                        is applied by means of two pairs of self-energising
                        jaws, which exert a grip on the rope, the distance of
                        travel being limited only by the length of the rope.
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
                        A.35. Lifting Pulleys & Winches
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.35.-Lifting-Pulleys-&-Winches_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Winches are versatile lifting and pulling appliances,
                        lending themselves to easy adaptation and are widely
                        used throughout industry for both permanent and
                        temporary rigging applications. Although winches may be
                        used as a means of raising and lowering loads in lifting
                        operations. They may be ftted or built into structures
                        to enable loads to be moved from one position to
                        another. They may also be used to advantage as a safe
                        method of lifting loads in confned spaces as they can be
                        arranged to occupy less headroom than other lifting
                        appliances and the operative may be remote from the
                        load. They are often used in conjunction with pulley
                        blocks. Although some types of winch may be used with
                        fibre ropes,they mainly used with wire ropes.
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
