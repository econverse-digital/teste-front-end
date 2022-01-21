import styles from "./InstrumentBand.module.css";
import InstrumentBandButton from "./InstrumentBandButton";

const instruments = [
  { nome: "Guitarras", url: "guitarras-category-home" },
  { nome: "Microfones", url: "microfones-category-home" },
  { nome: "Mesa de som", url: "mesas-category-home" },
  { nome: "Teclados", url: "teclados-category-home" },
  { nome: "Violão", url: "violao-category-home" },
  { nome: "Baterias", url: "bateria-category-home" },
];

const list = instruments.map((instrument) => (
  <InstrumentBandButton
    key={Math.random()}
    nome={instrument.nome}
    image={instrument.url}
  />
));

const InstrumentBand = (props) => {
  return <div className={styles.div}>{list}</div>;
};

export default InstrumentBand;
