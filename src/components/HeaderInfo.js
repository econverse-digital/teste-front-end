import "../css/components/headerInfo.css";

const HeaderInfo = (props) => {
  return (
    <div className="header-info-list">
      <img
        width={20}
        height={20}
        className="icon-distancing"
        src={`./assets/${props.icon}`}
        alt={`${props.iconDescription}`}
      />
      <div>
        <span className={`${props.textStartStyle}`}>{props.textStart}</span>
        <span className={`${props.textEndStyle}`}>{props.textEnd}</span>
      </div>
    </div>
  );
};

export default HeaderInfo;
