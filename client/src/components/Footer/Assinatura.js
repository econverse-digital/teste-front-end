import styles from "./Assinatura.module.css";

const Assinatura = (props) => {
  return (
    <div className={styles.div}>
      <p>
        NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os direitos
        reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa Efigênia - CEP:
        01.207-000 - São Paulo / SP - CNPJ 07.282.516/0001-15
      </p>
      <div className={styles.images}>
        <img src="./assets/assinatura/sign1.png" alt="" />
        <img src="./assets/assinatura/sign2.png" alt="" />
      </div>
    </div>
  );
};

export default Assinatura;
