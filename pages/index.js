import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gutman lifting products</title>
        <meta name="description" content="Gutman lifting products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="pt-4 pb-0">
        <nav
          className="breadcrumb is-right has-arrow-separator"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <a className="has-text-grey">Lifting Equipment</a>
            </li>
            <li>
              <a className="has-text-grey">Lifting Accessories</a>
            </li>
            <li>
              <a className="has-text-grey">Textile Slings</a>
            </li>
            <li className="is-active">
              <a aria-current="page">Roundslings</a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae beatae quisquam rerum magni sequi perferendis
                laborum! Suscipit aut laboriosam voluptatem blanditiis magnam
                qui, consequuntur assumenda quod et, accusamus, quidem veniam.
              </p>
            </div>
            <div className="column">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae beatae quisquam rerum magni sequi perferendis
                laborum! Suscipit aut laboriosam voluptatem blanditiis magnam
                qui, consequuntur assumenda quod et, accusamus, quidem veniam.
              </p>
            </div>
            <div className="column">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae beatae quisquam rerum magni sequi perferendis
                laborum! Suscipit aut laboriosam voluptatem blanditiis magnam
                qui, consequuntur assumenda quod et, accusamus, quidem veniam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="title has-text-centered is-size-4">
            Product Categories
          </h3>

          <div className="columns is-mobile is-multiline">
            <div className="column is-6-mobile is-4-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <p className="card-header-title">A. Lifting Equipment</p>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/A.-Lifting-Equipment_T.jpg"
                    alt="Lifing accessories"
                  />
                </div>
                <div className="card-content">
                  <div class="content">
                    The term lifting equipment contains all lifting accessories
                    and appliances, any machine which is able to raise, lower or
                    suspend a load. Examples are cranes, hoists, jacks, etc.
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6-mobile is-4-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <p className="card-header-title">B. Operators Duty Service</p>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/B.-Operators-Duty-Service_T.jpg"
                    alt="Lifing accessories"
                  />
                </div>
                <div className="card-content">
                  <div class="content">
                    A service to help operators to comply with legislative
                    requirements concerning the use of lifting equipment.
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6-mobile is-4-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <p className="card-header-title">C. Material Handling</p>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/C. Material Handling_T.jpg"
                    alt="Lifing accessories"
                  />
                </div>
                <div className="card-content">
                  <div class="content">
                    Mechanical equipment used for the movement, transport,
                    positioning, storage of materials, goods and products
                    throughout the process of manufacturing, distribution,
                    consumption, and disposal.
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-6-mobile is-4-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <p className="card-header-title">D. Miscellaneous products</p>
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
                  <div class="content">
                    Lorem ipsum leo risus, porta ac consectetur ac, vestibulum
                    at eros. Donec id elit non mi porta gravida at eget metus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras mattis consectetur
                    purus sit amet fermentum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
