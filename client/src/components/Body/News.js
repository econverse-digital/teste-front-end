import styles from "./News.module.css";
import NewsPortrait from "./NewsPortrait";

const news = [
  {
    image: "banner-profissional-home",
    main: "ÁUDIO",
    sub: "P R O F I S S I O N A L",
  },
  {
    image: "banner-instrumentos-home",
    main: "INSTRUMENTOS",
    sub: "M U S I C A I S",
  },
];

const list = news.map((a) => (
  <span key={Math.random()} className={news}>
    <NewsPortrait image={a.image} message={a.main} sub={a.sub} />
  </span>
));

const News = (props) => {
  return <div className={styles.div}>{list}</div>;
};

export default News;
