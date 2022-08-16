import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function MenuBtn() {
    setIsOpen(() => !isOpen);
  }

  return (
    <nav>
      <div className="nav_container">
        <h2 className="logo">Personally</h2>
        <button className="menu_btn" onClick={MenuBtn}>
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <ul
          className="nav_links"
          style={{
            left: isOpen ? '0' : '-500%',
          }}
        >
          <li onClick={MenuBtn}>
            <Link href="/dailydigest">
              <a>Daily Digest</a>
            </Link>
          </li>
          <li onClick={MenuBtn}>
            <Link href="/designtools">
              <a>Design Tools</a>
            </Link>
          </li>
          <li onClick={MenuBtn}>
            <Link href="/tutorials">
              <a>Tutorial</a>
            </Link>
          </li>
          <li onClick={MenuBtn}>
            <Link href="#">
              <a>Subcribe</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
