import TransparentButton from "../UI/TransparentButton";
import styles from "./Shop.module.css";
import ShopItem from "./ShopItem";

const Shop = (props) => {
  const instruments = props.list.slice(0, 8);
  return (
    <div className={styles.div}>
      <p className={styles.title}>
        INSTRUMENTOS <span>DESTAQUE</span>
      </p>
      <p className={styles.subtitle}>
        It is a long established fact that a reader will be destracted by the
        readable
      </p>
      <ul>
        {instruments.map((instrument) => {
          return (
            <li key={instrument.productName}>
              <ShopItem item={instrument} setItemData={props.setItemData} />
            </li>
          );
        })}
      </ul>
      <div className={styles.button}>
        <TransparentButton size={"normal"}>VER MAIS</TransparentButton>
      </div>
    </div>
  );
};

export default Shop;
