import styles from "./Review.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Review = (props) => {
  return (
    <div className={styles.div}>
      <div className={styles.seta}>
        <MdKeyboardArrowLeft />
      </div>

      <div className={styles.user}>
        <div>
          <img src="./assets/reviews/1.png" alt="Felipe Salmin" />
        </div>
        <div>
          <p className={styles.nome}>Felipe Salmin</p>
          <p className={styles.cargo}>Designer</p>
        </div>
      </div>
      <div className={styles.commentBox}>
        <div className={styles.triangleLeft}></div>
        <div className={styles.comment}>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for ‘lorem ipsum’
          </p>
        </div>
      </div>
      <div className={styles.seta}>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default Review;
