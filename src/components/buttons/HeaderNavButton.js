import '../../css/components/buttons/headerNavButton.css'

const HeaderNavButton = (props) => {
  return (
    <div className="nav-container">
      {props.icon ? (
        <img src={`./assets/${props.icon}`} alt={`${props.iconDescription}`} />
      ) : null}
      <button className={`${props.buttonColor}`}>{props.buttonName}</button>
    </div>
  );
};

export default HeaderNavButton;
