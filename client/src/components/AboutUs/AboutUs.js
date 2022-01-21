import styles from "./AboutUs.module.css";
import Review from "./Review";

const AboutUs = (props) => {
  return (
    <div className={styles.div}>
      <p className={styles.title}>
        <span>SOBRE NÓS</span>
      </p>
      <div className={styles.divSubtitle}>
        <p className={styles.subtitle}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using ‘Content here, content here’, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for ‘lorem ipsum’ will uncover many web sites still in their
          infancy. Lorem Ipsum as their default model text, and a search for
          ‘lorem ipsum’ will uncover many web sites still in their infancy.
          Lorem Ipsum as their default model text, and a search for ‘lorem
          ipsum’ will uncover many web sites still in their infancy.
        </p>
      </div>
      <Review />
    </div>
  );
};

export default AboutUs;
