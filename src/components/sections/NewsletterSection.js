import "../../css/components/sections/newsletterSection.css";
import DefaultButton from "../buttons/DefaultButton";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section-container">
      <div className="newsletter-container">
        <img
          src="./assets/images/LookingDog.png"
          alt="Cachorro olhando na direção da tela"
        />
        <form className="newsletter-form">
          <h1>Se inscreva para receber novidades e promoções</h1>
          <input
            className="header-search-bar-input name-input"
            placeholder="Digite seu nome"
          />
          <input
            className="header-search-bar-input email-input"
            placeholder="Digite seu e-mail"
          />
          <DefaultButton
            buttonName="Enviar"
            buttonType="alternative-medium-orange-button"
          />
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
