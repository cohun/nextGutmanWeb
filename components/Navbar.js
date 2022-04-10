import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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
        className={`navbar-menu ${active ? 'is-active' : ''}`}
        id="nav-links"
      >
        <div className="navbar-end">
          <Link href="/" className="navbar-item" passHref>
            <div className="navbar-item">Home</div>
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Categories</a>
            <div className="navbar-dropdown">
              <a className="navbar-item has-text-weight-semibold">
                Lifting Equipment
              </a>
              <hr className="navbar-divider" />
              <p className="navbar-item ml-3">
                <Link href="/">Crane and Trolley</Link>
              </p>
              <p className="navbar-item ml-3">
                <Link href="/LiftingEquipment/PoweredLiftingEquipment">
                  Powered Lifting Equipment
                </Link>
              </p>
              <p className="navbar-item ml-3">
                <Link href="/LiftingEquipment/ManualLiftingEquipment">
                  Manual Lifting Equipment
                </Link>
              </p>
              <p className="navbar-item ml-3">
                <Link
                  href="/LiftingEquipment/LiftingAccessories"
                  className="navbar-item ml-3"
                >
                  Lifting Accessories
                </Link>
              </p>
              <hr className="navbar-divider" />
              <a className="navbar-item has-text-weight-semibold">
                Operators Duty Service
              </a>
              <hr className="navbar-divider" />
              <p className="navbar-item ml-3">
                <Link href="/OperatorsDuty">ETAR</Link>
              </p>
              <p className="navbar-item ml-3">
                <Link href="/OperatorsDuty">ETAR EN</Link>
              </p>
              <hr className="navbar-divider" />
              <a className="navbar-item has-text-weight-semibold">
                Material Handling
              </a>
              <hr className="navbar-divider" />
              <p className="navbar-item ml-3">
                <Link href="/">Lift Trucks</Link>
              </p>
              <p className="navbar-item ml-3">
                <Link href="/">Attachments</Link>
              </p>
              <hr className="navbar-divider" />
              <a className="navbar-item has-text-weight-semibold">
                Miscellaneous Products
              </a>
              <hr className="navbar-divider" />
              <p className="navbar-item ml-3">
                <Link href="/">Lashing Systems</Link>
              </p>
              <p className="navbar-item ml-3">
                <Link href="/">Shop Equipment</Link>
              </p>
              <p className="navbar-item ml-3">
                <Link href="/">Fall Protection</Link>
              </p>
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
