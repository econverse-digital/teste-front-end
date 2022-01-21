import styles from "./Brands.module.css";
import BrandPortrait from "./BrandPortrait";

const brands = ["1", "2", "3", "4"];

const list = brands.map((brand) => (
  <li key={Math.random()}>
    <BrandPortrait image={brand} />
  </li>
));

const Brands = (props) => {
  return (
    <div className={styles.div}>
      <p className={styles.title}>
        AS <span>MELHORES</span> MARCAS
      </p>
      <p className={styles.subtitle}>
        It is a long established fact that a reader will be destracted by the
        readable
      </p>
      <ul>{list}</ul>
    </div>
  );
};

export default Brands;
