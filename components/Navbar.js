import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <nav className="navbar has-shadow is-dark">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img
            src="/GutmanLogo.jpg"
            alt="site logo"
            style={{ maxHeight: '80px' }}
            className="py-2 px-2"
          />
        </a>
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
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/about">
            <a className="navbar-item">Categories</a>
          </Link>
          <Link href="/ninjas/">
            <a className="navbar-item">Products</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
