import styles from "./NewsPortrait.module.css";
import TransparentButton from "../UI/TransparentButton";

const NewsPortrait = (props) => {
  return (
    <div className={styles.div}>
      <img
        className={styles.img}
        src={"./assets/news/" + props.image + ".png"}
        alt=""
      />
      <span className={styles.newsText}>N O V I D A D E S </span>
      <span className={styles.newsHr}>_____</span>
      <span className={styles.mainText}>{props.message}</span>
      <span className={styles.subText}>{props.sub}</span>

      <span className={styles.button}>
        <TransparentButton button={"white"} size={"normal"}>
          C O N F I R A
        </TransparentButton>
      </span>
    </div>
  );
};

export default NewsPortrait;
