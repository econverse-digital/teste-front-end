import MyDogCategoriesNavBar from "./MyDogCategoriesNavBar";
import "../css/components/sectionTitle.css";

const SectionTitle = (props) => {
  return (
    <div className="section-title-container">
      <h2>{props.title}</h2>
      {props.productNav ? <MyDogCategoriesNavBar /> : null}
    </div>
  );
};

export default SectionTitle;
