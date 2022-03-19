import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className={styles.container}>
        <a href="/"><FontAwesomeIcon className={styles.icon} icon={faBars} /></a>
        <ul className={styles.list}>
          <li className={styles.listElem}><NavLink className={styles.navLink} to="/">HOME</NavLink></li>
          <li className={styles.listElem}><NavLink className={styles.navLink} to="/favorite">FAVORITE</NavLink></li>
          <li className={styles.listElem}><NavLink className={styles.navLink} to="/about">ABOUT</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
