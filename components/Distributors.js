import Image from 'next/image';
import Link from 'next/link';

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
              <Link href="https://h-itb.hu">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-header-title is-flex-direction-row">
                        <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                          Hungary
                        </p>

                        <Image
                          className="is-justify-content-flex-end"
                          width={100}
                          height={40}
                          src="/H-ITBLogo.jpg"
                          alt="H-ITB logo"
                        />
                      </div>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/Hungary.jpg"
                        alt="Hungary"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="mb-0 has-text-weight-semibold">
                          H-ITB Kft.
                        </p>
                        <p className="mb-0">
                          H-1119 Budapest, Kelenvölgyi htsr. 5
                        </p>
                        <p className="mb-0">Tel: +36 1 2056208</p>
                        <p>Email: hitb@h-itb.hu</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="https://www.alfa-cluj.ro/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-header-title is-flex-direction-row">
                        <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                          Romania
                        </p>

                        <Image
                          className="is-justify-content-flex-end"
                          width={160}
                          height={40}
                          src="/alfa.jpg"
                          alt="Alfa-Cluj logo"
                        />
                      </div>
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
                        <p className="mb-0 has-text-weight-semibold">
                          Alfa Cluj SRL
                        </p>
                        <p className="mb-0">
                          Bd. Muncii, nr. 14, perim. 10 Cluj-Napoca
                        </p>
                        <p className="mb-0">Tel: +40 264 415 662</p>
                        <p>Email: info@alfa-cluj.ro</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="https://www.gutmanlifting.sk/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-header-title is-flex-direction-row">
                        <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                          Slovakia
                        </p>

                        <Image
                          className="is-justify-content-flex-end"
                          width={128}
                          height={38}
                          src="/Gutman_Dizalica.png"
                          alt="Dizalica logo"
                        />
                      </div>
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
                        <p className="mb-0 has-text-weight-semibold">
                          Gutman Lifting, s.r.o.
                        </p>
                        <p className="mb-0">
                          Bratislavská cesta 13 949 01 Nitra
                        </p>
                        <p className="mb-0">Tel: +421 949 00 53 53</p>
                        <p>Email: shop@gutmanlifting.sk</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="https://gutmanlifting.rs/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-header-title is-flex-direction-row">
                        <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                          Serbia
                        </p>

                        <Image
                          className="is-justify-content-flex-end"
                          width={128}
                          height={38}
                          src="/Gutman_Dizalica.png"
                          alt="Dizalica logo"
                        />
                      </div>
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
                        <p className="mb-0 has-text-weight-semibold">
                          GUTMAN LIFTING DOO
                        </p>
                        <p className="mb-0">Miška Jovanovića 16-18, Beograd</p>
                        <p className="mb-0">Tel: +381 11 39 80 315</p>
                        <p>Email: gutmanlift@verat.net</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="https://dizalica.hr/">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-header-title is-flex-direction-row">
                        <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                          Croatia
                        </p>

                        <Image
                          className="is-justify-content-flex-end"
                          width={128}
                          height={38}
                          src="/Gutman_Dizalica.png"
                          alt="Dizalica logo"
                        />
                      </div>
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
                        <p className="mb-0 has-text-weight-semibold">
                          DIZALICA d.o.o.
                        </p>
                        <p className="mb-0">
                          Slavonska avenija 22E, 10000 Zagreb
                        </p>
                        <p className="mb-0">Tel: +385 1 553 0706</p>
                        <p>Email: prodaja@dizalica.hr</p>
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
