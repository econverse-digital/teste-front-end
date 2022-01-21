import styles from "./WelcomeUser.module.css";
import { HiOutlineUser } from "react-icons/hi";

const WelcomeUser = (props) => {
  return (
    <div>
      <span className={styles.ico}>
        <HiOutlineUser />
      </span>
      <ul className={styles.userInfo}>
        <li>
          <span>OLÁ, VISITANTE</span>
        </li>
        <li>
          <span className={styles.userInfoAccount}>MINHA CONTA</span>
        </li>
      </ul>
    </div>
  );
};

export default WelcomeUser;
