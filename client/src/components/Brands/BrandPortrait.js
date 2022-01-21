import styles from "./BrandPortrait.module.css";

const BrandPotrait = (props) => {
  return (
    <div className={styles.div}>
      <img src={"./assets/brands/" + props.image + ".png"} alt="" />
    </div>
  );
};

export default BrandPotrait;
