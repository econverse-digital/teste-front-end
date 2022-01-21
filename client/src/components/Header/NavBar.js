import styles from "./NavBar.module.css";
import NavBarButton from "./NavBarButton";
import { BiCaretDown } from "react-icons/bi";

const NavBar = (props) => {
  return (
    <div className={styles.borderTop}>
      <div className={styles.div}>
        <ul className={styles.navBar}>
          <li>
            <NavBarButton>
              TODAS AS CATEGORIAS{" "}
              <span className={styles.ico}>
                <BiCaretDown />
              </span>
            </NavBarButton>
          </li>
          <li>
            <NavBarButton>
              SOM PROFISSIONAL
              <span className={styles.ico}>
                <BiCaretDown />
              </span>
            </NavBarButton>
          </li>
          <li>
            <NavBarButton>INSTRUMENTOS MUSICAIS</NavBarButton>
          </li>
          <li>
            <NavBarButton>PROMOÇÕES</NavBarButton>
          </li>
          <li>
            <NavBarButton>CONTATO</NavBarButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
