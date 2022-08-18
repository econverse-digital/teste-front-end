import "../../css/components/layout/footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer-company-personal-info">
          <h1 className="follow-us">Nos siga nas nossas redes sociais</h1>
          <img
            src="./assets/icons/SocialMedia.png"
            alt="Ícones de redes sociais"
          />
          <h1 className="about-us">Sobre O Cãoselheiro</h1>
          <p className="about-us-text">
            Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de
            uma empresa que nasceu para contribuir para uma melhor qualidade de
            vida dos cães e seus familiares humanos. Seus sócios são
            profissionais de educação canina que trabalham seguindo metodologias
            positivas de treinamento animal, encorajando e recompensando os
            acertos de nossos amigos em seus processos de adestramento. Aqui
            você encontrará apenas itens de qualidade comprovada e utilizados
            pessoalmente por seus idealizadores. Fique à vontade!
          </p>
        </div>
        <div className="footer-company-business-info">
          <div>
            <div className="main-company-info">
              <div className="first-row"></div>
              <div className="second-row"></div>
            </div>
            <div className="secondary-company-info"></div>
          </div>
        </div>
      </div>
      <nav></nav>
    </footer>
  );
};

export default Footer;
