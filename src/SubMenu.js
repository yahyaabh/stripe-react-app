import react, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";
function SubMenu() {
  const {
    isSubmenuOpen,
    location,
    page: { page, links }
  } = useGlobalContext();
  const container = useRef(null);
  const [collumns, setCollumns] = useState("col-2");

  useEffect(() => {
    setCollumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setCollumns("col-3");
    }
    if (links.length > 3) {
      setCollumns("col-4");
    }
  }, [location, links]);

  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${collumns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default SubMenu;
