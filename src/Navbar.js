import react from "react";
import { FaBars } from "react-icons/fa";
import logo from "./images/logo.svg";

import { useGlobalContext } from "./context";

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <div className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img className="nav-logo" alt="stripe" src={logo} />
          <button onClick={openSidebar} className="btn toggle-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn " onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn " onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn " onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn">Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
