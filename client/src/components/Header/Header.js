import styles from "./Header.module.css";
import TopBand from "./TopBand";
import HeaderBody from "./HeaderBody";
import NavBar from "./NavBar";
import ShopCart from "./ShopCart";

const Header = (props) => {
  return (
    <div>
      <TopBand />

      <div className={styles.div}>
        <ShopCart />
        <HeaderBody />
      </div>

      <NavBar />
    </div>
  );
};

export default Header;
