import styles from "./Body.module.css";
import BodyCarousel from "./BodyCarousel";
import InstrumentBand from "./InstrumentBand";
import News from "./News";

const Body = (props) => {
  return (
    <div className={styles.div}>
      <BodyCarousel />
      <InstrumentBand />
      <News />
    </div>
  );
};

export default Body;
