import "../../css/components/layout/mainBanner.css";
import DefaultButton from "../buttons/DefaultButton";

const MainBanner = () => {
  return (
    <main className="main-banner-container">
      <img
        className="left-arrow-spacing"
        width={32}
        height={32}
        src="./assets/icons/Arrow.png"
        alt="Seta indicando esquerda"
      />
      <div className="details-container">
        <h1>As melhores guias para os melhores passeios.</h1>
        <DefaultButton
          className="details-button"
          buttonName="Confira"
          buttonType="medium-orange-button"
        />
      </div>
      <div>
        <img
          className="three-dots-spacing"
          src="./assets/icons/ThreeDots.png"
          alt="Três pontos de rolagem"
        />
        <img
          width={32}
          height={32}
          className="middle-arrow-spacing-and-styling"
          src="./assets/icons/ArrowTwo.png"
          alt="Seta indicando abaixo"
        />
      </div>
      <img
        width={32}
        height={32}
        className="right-arrow-spacing"
        src="./assets/icons/Arrow.png"
        alt="Seta indicando direita"
      />
    </main>
  );
};

export default MainBanner;
