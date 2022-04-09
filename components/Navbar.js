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

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Categories</a>
            <div className="navbar-dropdown">
              <a className="navbar-item has-text-weight-semibold">
                Lifting Equipment
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item ml-3">Crane and Trolley</a>
              <a
                href="/LiftingEquipment/PoweredLiftingEquipment"
                className="navbar-item ml-3"
              >
                Powered Lifting Equipment
              </a>
              <a
                href="/LiftingEquipment/ManualLiftingEquipment"
                className="navbar-item ml-3"
              >
                Manual Lifting Equipment
              </a>
              <a
                href="/LiftingEquipment/LiftingAccessories"
                className="navbar-item ml-3"
              >
                Lifting Accessories
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item has-text-weight-semibold">
                Operators Duty Service
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item ml-3">ETAR</a>
              <a className="navbar-item ml-3">ETAR EN</a>
              <hr className="navbar-divider" />
              <a className="navbar-item has-text-weight-semibold">
                Material Handling
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item ml-3">Lift Trucks</a>
              <a className="navbar-item ml-3">Attachments</a>
              <hr className="navbar-divider" />
              <a className="navbar-item has-text-weight-semibold">
                Miscellaneous Products
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item ml-3">Lashing Systems</a>
              <a className="navbar-item ml-3">Shop Equipment</a>
              <a className="navbar-item ml-3">Fall Protection</a>
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
