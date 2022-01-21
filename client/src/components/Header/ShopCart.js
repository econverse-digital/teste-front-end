import styles from "./ShopCart.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi";

const ShopCart = (props) => {
  return (
    <div className={styles.shopcart}>
      <span className={styles.ico}>
        <HiOutlineShoppingBag />
      </span>
      <span className={styles.carrinho}>SEU CARRINHO</span>
      <span className={styles.itens}>0 item (s)</span>
    </div>
  );
};

export default ShopCart;
