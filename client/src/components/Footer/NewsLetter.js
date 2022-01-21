import styles from "./NewsLetter.module.css";
import TransparentButton from "../UI/TransparentButton";
import Input from "../UI/Input";

const NewsLetter = (props) => {
  return (
    <div className={styles.div}>
      <div className={styles.title}>
        ASSINE NOSSO <span>NEWSLETTER</span> E RECEBA NOVIDADES E PROMOÇÕES
      </div>
      <div className={styles.content}>
        <Input>SEU NOME</Input>
        <Input>SEU E-MAIL</Input>
        <TransparentButton button={"blue"} size={"small"}>
          ENVIAR
        </TransparentButton>
      </div>
    </div>
  );
};

export default NewsLetter;
