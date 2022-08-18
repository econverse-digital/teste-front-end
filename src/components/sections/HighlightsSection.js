import DefaultButton from "../buttons/DefaultButton";
import "../../css/components/sections/highlightsSection.css";

const HighlightsSection = () => {
  return (
    <section>
      <div className="highlights-container">
        <div>
          <article className="highlights-partners-article">
            <h1>Parceiros</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <DefaultButton
              buttonName="Confira"
              buttonType="medium-orange-button"
            />
          </article>
        </div>
        <article className="highlights-subscription-article">
          <h1>Assinatura Cãoselheiro</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            adipiscing quis non sed.
          </p>
          <DefaultButton
            buttonName="Saiba mais"
            buttonType="medium-orange-button"
          />
        </article>
        <img
          width={241}
          height={375}
          className="highlights-subscription-article-image"
          src="./assets/images/OpenMouthDog.png"
          alt="Cachorro com boca aberta"
        />
      </div>
      <img className="highlights-three-dots-icon" src="./assets/icons/GrayThreeDots.png" alt="Três pontos" />
    </section>
  );
};

export default HighlightsSection;
