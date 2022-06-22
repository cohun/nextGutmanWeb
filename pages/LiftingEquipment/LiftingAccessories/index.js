import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const LiftingEquipment = () => {
  return (
    <div>
      <Head>
        <title>Gutman lifting accessories</title>
        <meta name="description" content="Gutman lifting accessories" />
        <link rel="icon" href="/favicon.ico" />
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
              <Link href="/LiftingEquipment" passHref>
                <div className="has-text-grey px-3">Lifting Equipment</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/LiftingAccessories" passHref>
                <div className="tag is-active px-3 is-info">
                  Lifting Accessories
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Lifting Accessories
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.41. Textile slings and components
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/41.-Textile-slings-and-their-components_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Textile slings for multi-purposes, made of Polyester are
                        soft and easy to handle whilst offering rigidity across
                        their width. These qualities make them ideal for
                        handling loads which require some support when being
                        lifted as the load is spread across the full width, thus
                        avoiding point contact as is the case with chains or
                        ropes.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Chains">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.42. Chain, -slings, components
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/42.-Chain-slings-and-their-components_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Chain slings represent a highly versatile, durable and
                        safe means of connecting loads to lifting appliances.
                        The majority of chain slings in service are grade 8 or
                        grade 80 (or T). Although not yet standardised in many
                        parts of the world, grade 10, or higher, chain slings
                        are available and gaining in popularity.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/WireRopes">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.43. Steel wire rope, slings
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.43.-Steel-Wire-Rope,-Slings.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Wire rope slings give the user a versatile and safe
                        means of connecting loads to lifting appliances,
                        provided that they are used in the correct manner and
                        dangerous lifting practices and service damage are
                        avoided. In many cases the use of a wire rope sling in
                        preference to, for example, a chain sling is a matter of
                        the personal choice of the user.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Clamps">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.44. Clamps</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.44.-Clamps.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Plate clamps are widely used, particularly in the steel
                        fabrication industry, for handling a variety of work
                        including individual pieces of plate, fabricated
                        assemblies and bundles of plates. Clamps are subdivided
                        into those used to lift the plate in the vertical
                        position only and those which lift from the horizontal
                        to the vertical or viceversa.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Magnets">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.45. Lifting Magnets</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.45.-Lifting-Magnets.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Magnets will only work on a magnetic material which
                        usually means a ferrous metal although some other
                        materials such as cobalt or nickel are capable of being
                        lifted magnetically. As there is no positive connection
                        between the lifting device and the load, the ability of
                        the magnetic lifter to safely lift a particular load
                        needs to be carefully considered.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Beams">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.46. Lifting Beams , Spreaders
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.46.-Lifting-Beams.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Lifting beams, spreaders and frames are usually designed
                        either for a specifc purpose or as general purpose beams
                        for a specifed range of lifts. They are attached to the
                        load suspension point of a lifting machine or crane and
                        can therefore be considered to be portable.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/LiftingEyes">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.47. Lifting Eyes, Connecting Links
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.47.-Lifting-Eyes,-Connecting-Links-_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Eyebolt and shackles for lifting purposes are one of the
                        most widely used items of lifting gear. They are
                        normally forged from various grades of steel, mostly
                        from higher tensile steel which gives them a higher
                        working load limit than those made in mild steel.
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
