import "../css/components/headerIcon.css";

const HeaderIcon = (props) => {
  return (
    <img
      className="icon-spacing turn-button"
      src={`./assets/${props.icon}`}
      alt={`${props.iconDescription}`}
    />
  );
};

export default HeaderIcon;
