// laranja e branco, branco e cinza, grande, pequeno e médio
import "../../css/components/buttons/defaultButton.css";

const DefaultButton = (props) => {
  return (
    <button className={`default-button-styling ${props.buttonType}`}>
      {props.buttonName}
    </button>
  );
};

export default DefaultButton;
