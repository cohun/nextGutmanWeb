import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Search from "./Search";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <nav className="navbar has-shadow is-dark is-fixed-top">
      <div className="navbar-brand">
        <Link href="https://gutmanlifting.com" className="navbar-item" passHref>
          <div className="ml-3 mt-2 mb-1">
            <Image
              width={100}
              height={40}
              src="/GutmanLogo.jpg"
              alt="site logo"
            />
          </div>
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={(e) => clickHandler(e)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        className={`navbar-menu ${active ? "is-active" : ""}`}
        id="nav-links"
      >
        <div className="navbar-end container">
          <div className="navbar-menu"></div>

          <Link href="/" passHref className="container is-primary">
            <div className="navbar-item">
              <Search />
            </div>
          </Link>

          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
        </div>

        <div className="navbar-end">
          <a role="button" onClick={(e) => clickHandler(e)}>
            <Link href="/" className="navbar-item" passHref>
              <div className="navbar-item">Home</div>
            </Link>
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <p className="navbar-link">Categories</p>
            <div className="navbar-dropdown">
              <div className="navbar-item has-text-weight-semibold">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/LiftingEquipment">Lifting Equipment</Link>
                </a>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item ml-3">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/LiftingEquipment/CraneAndTrolley">
                    Crane and Trolley
                  </Link>
                </a>
              </div>
              <div className="navbar-item ml-3">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/LiftingEquipment/PoweredLiftingEquipment">
                    Powered Lifting Equipment
                  </Link>
                </a>
              </div>
              <div className="navbar-item ml-3">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/LiftingEquipment/ManualLiftingEquipment">
                    Manual Lifting Equipment
                  </Link>
                </a>
              </div>
              <div className="navbar-item ml-3">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link
                    href="/LiftingEquipment/LiftingAccessories"
                    className="navbar-item ml-3"
                  >
                    Lifting Accessories
                  </Link>
                </a>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item has-text-weight-semibold">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/OperatorsDuty">Operators Duty Service</Link>
                </a>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item ml-3">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/OperatorsDuty">ETAR</Link>
                </a>
              </div>
              <div className="navbar-item ml-3">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/OperatorsDuty">ETAR EN</Link>
                </a>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item has-text-weight-semibold">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/MaterialHandling">Material Handling</Link>
                </a>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item ml-3">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/MaterialHandling/LiftTrucks">Lift Trucks</Link>
                </a>
              </div>
              <div className="navbar-item ml-3">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/MaterialHandling/Attachments">Attachments</Link>
                </a>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item has-text-weight-semibold">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/Miscellaneous">Miscellaneous Products</Link>
                </a>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item ml-3">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/Miscellaneous/Lashing">Lashing Systems</Link>
                </a>
              </div>
              <div className="navbar-item ml-3">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/">Shop Equipment</Link>
                </a>
              </div>
              <div className="navbar-item ml-3">
                <a role="button" onClick={(e) => clickHandler(e)}>
                  <Link href="/">Fall Protection</Link>
                </a>
              </div>
            </div>
          </div>
          <Link href="/" passHref>
            <div className="navbar-item">Products</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
