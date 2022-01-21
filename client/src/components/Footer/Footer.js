import styles from "./Footer.module.css";
import NewsLetter from "./NewsLetter";
import Assinatura from "./Assinatura";

const Footer = (props) => {
  return (
    <div className={styles.div}>
      <div className={styles.content}>
        <div className={styles.row}>
          <ul>
            <li>
              <span>INSTITUCIONAL</span>
            </li>
            <ul>
              <li>QUEM SOMOS</li>
              <li>NOSSAS LOJAS</li>
            </ul>
          </ul>
          <ul>
            <li>
              <span>ATENDIMENTO</span>
            </li>
            <li>FALE CONOSCO</li>
            <li>VENDAS@NINJASOM.COM.BR</li>
          </ul>
        </div>
        <div className={styles.row}>
          <ul>
            <li>
              <span>AJUDA E SUPORTE</span>
            </li>
            <li>POLÍTICA DE PRIVACIDADE</li>
            <li>POLÍTICA DE TROCAS</li>
            <li>PRAZOS DE ENTREGA</li>
            <li>TERMOS DE USO</li>
          </ul>
        </div>
        <div className={styles.row}>
          <ul>
            <li>
              <span>FORMAS DE PAGAMENTO</span>
            </li>
            <li>
              <img src="./assets/cards/card1.png" alt="" />
              <img src="./assets/cards/card2.png" alt="" />
              <img src="./assets/cards/card3.png" alt="" />
            </li>
            <li>
              <img src="./assets/cards/card4.png" alt="" />
              <img src="./assets/cards/card5.png" alt="" />
            </li>
          </ul>
          <ul>
            <li>
              <span>SEGURANÇA</span>
            </li>
            <li>
              <img src="./assets/security/sec1.png" alt="" />
              <img src="./assets/security/sec2.png" alt="" />
            </li>
          </ul>
        </div>
        <div className={styles.row}>
          <NewsLetter />
        </div>
      </div>
      <Assinatura />
    </div>
  );
};

export default Footer;
