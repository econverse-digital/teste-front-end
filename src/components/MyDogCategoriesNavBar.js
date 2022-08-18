import DefaultButton from "./buttons/DefaultButton";
import { productFilterButtons } from "../helpers/sections";
import "../css/components/myDogCategoriesNavBar.css"

const MyDogCategoriesNavBar = () => {
  const mappedProductsNavButtons = productFilterButtons.map((productFilter) => {
    return (
      <DefaultButton
        buttonName={productFilter.buttonName}
        buttonType={productFilter.buttonType}
      />
    );
  });

  return (
    <nav className="nav-bar-container">
      <img className="nav-bar-left-arrow" width={16} height={16} src="./assets/icons/CaretDown.png" alt="Seta esquerda" />
      <div className="nav-bar-buttons">{mappedProductsNavButtons}</div>
      <img width={16} height={16} src="./assets/icons/CaretDown.png" alt="Seta direita" />
    </nav>
  );
};

export default MyDogCategoriesNavBar;
