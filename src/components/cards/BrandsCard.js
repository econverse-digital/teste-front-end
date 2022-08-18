const BrandsCard = (props) => {
  return <div className="brand-card">
    <img src={`./assets/logos/${props.image}`} alt={`${props.name}`} />
  </div>;
};

export default BrandsCard;
