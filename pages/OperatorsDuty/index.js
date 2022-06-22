import Image from "next/image";
import Link from "next/link";

const OperatorsDuty = () => {
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
              <Link href="/OperatorsDuty" passHref>
                <div className="tag is-active px-3 is-info">
                  Operators Duty Service
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Operators Duty Service
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/OperatorsDuty">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title pl-6">
                        B.1. ETAR app
                        <Image
                          className="pl-3"
                          width={110}
                          height={50}
                          src="/ETAR_250_125.jpg"
                          alt="ETAR"
                        />
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={85}
                        height={165}
                        src="/ETAR.webp"
                        alt="ETAR"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        ETAR app for Android is designed to deliver all the
                        duties a lifting equipment operator has to fullfill.
                        Identification with NFC chip, certificates for Operation
                        Start, Thorough Examination, Maintenance and Service.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-6-widescreen">
              <div className="card-image has-text-centered pt-6">
                <div className="pt-6"></div>
                <Image width={1201} height={600} src="/image.jpg" alt="ETAR" />
              </div>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/OperatorsDuty">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title pl-6">
                        B.2. ETAR EN app
                        <Image
                          className="pl-3"
                          width={60}
                          height={50}
                          src="/ETAR_EN_250_250.jpg"
                          alt="ETAR"
                        />
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={85}
                        height={165}
                        src="/EtarEn.webp"
                        alt="ETAR"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        This app for Android keeps record of your lifting
                        equipment and devices. Operation documentation and
                        logbook entries are made easy according to
                        authorizations, based on the ETAR app.
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

export default OperatorsDuty;
