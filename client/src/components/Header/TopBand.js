import styles from "./TopBand.module.css";
import NavBarButton from "./NavBarButton";
import { MdOutlineLock } from "react-icons/md";
import { RiPercentLine, RiTruckLine } from "react-icons/ri";

const TopBand = (props) => {
  return (
    <div className={styles.div}>
      <ul className={styles.topBar}>
        <li>
          <NavBarButton>
            <span className={styles.ico}>
              <MdOutlineLock />
            </span>
            COMPRA 100%
          </NavBarButton>
        </li>
        |
        <li>
          <NavBarButton>1 TROCA GRÁTIS</NavBarButton>
        </li>
        |
        <li>
          <NavBarButton>
            <span className={styles.ico}>
              <RiPercentLine />
            </span>
            5X SEM JUROS
          </NavBarButton>
        </li>
        |
        <li>
          <NavBarButton>
            <span className={styles.ico}>
              <RiTruckLine />
            </span>
            ENTREGAS EM TODO O BRASIL
          </NavBarButton>
        </li>
      </ul>
    </div>
  );
};

export default TopBand;
