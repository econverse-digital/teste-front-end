import styles from "./HeaderBody.module.css";
import Search from "./Search";
import WelcomeUser from "./WelcomeUser";
import { RiWhatsappLine } from "react-icons/ri";

const HeaderBody = (props) => {
  return (
    <div className={styles.div}>
      <ul className={styles.topBar}>
        <li>
          <img
            className={styles.logo}
            src="./assets/logo/ninja.png"
            alt="NinjaSomLogo"
          />
        </li>
        <li>
          <Search>BUSQUE AQUI...</Search>
        </li>
        <li>
          <span className={styles.ico}>
            <RiWhatsappLine />
          </span>
          <span className={styles.phone}>(11) 99999-9999</span>
        </li>
        <li>
          <WelcomeUser />
        </li>
      </ul>
    </div>
  );
};

export default HeaderBody;
