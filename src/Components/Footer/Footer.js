import React from "react";
import * as Style from "./styled";
import facebook from "../../Assets/img/footer/facebook.png";
import instagram from "../../Assets/img/footer/instagram.png";
import youtube from "../../Assets/img/footer/youtube.png";
import card from "../../Assets/img/footer/credit-card.png";
import seguranca from "../../Assets/img/footer/seguranca.png";
import econverse from "../../Assets/img/footer/econverse.PNG";

const Footer = () => {
  return (
    <Style.MainContainer>
      <Style.RedesContainer>
        <Style.BoxRedes>
          <span>Nos siga nas nossas redes sociais</span>
          <div>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
          </div>
        </Style.BoxRedes>
        <Style.BoxCao>
          <span>Sobre o Cãoselheiro</span>
          <p>
            Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de
            uma empresa que nasceu para contribuir para uma melhor qualidade de
            vida dos cães e seus familiares humanos. Seus sócios são
            profissionais de educação canina que trabalham seguindo metodologias
            positivas de treinamento animal, encorajando e recompensando os
            acertos de nossos amigos em seus processos de adestramento. Aqui
            você encontrará apenas itens de qualidade comprovada e utilizados
            pessoalmente por seus idealizadores. Fique à vontade!
          </p>
        </Style.BoxCao>
      </Style.RedesContainer>
      <Style.InfoContainer>
        <Style.BoxInfo>
          <div>
            <span>ASSINATURA</span>
            <p>PARCEIROS </p>
          </div>
          <Style.Institucional>
            <span>INSTITUCIONAL</span>
            <p>Quem somos</p>
            <p>Política de privacidade</p>
            <p>Política comercial</p>
            <p>Política de devolução</p>
            <p>Regras de frete</p>
          </Style.Institucional>
          <Style.Atendimento>
            <span>ATENDIMENTO</span>
            <p>Fale conosco</p>
            <p>(11) 97212-1314</p>
            <p>ocaoselheiro@ocaoselheiro.com.br</p>
            <p>Trabalhe conosco</p>
          </Style.Atendimento>
        </Style.BoxInfo>
        <Style.BoxPagamento>
          <Style.PagamentoDiv>
            <h5>FORMAS DE PAGAMENTO</h5>
            <span className="box">
              <div>
                <img src={card} alt="forma de pagamento" />
              </div>
              <div>
                <img src={card} alt="forma de pagamento" />
              </div>
              <div>
                <img src={card} alt="forma de pagamento" />
              </div>
              <div>
                <img src={card} alt="forma de pagamento" />
              </div>
              <div>
                <img src={card} alt="forma de pagamento" />
              </div>
              <div>
                <img src={card} alt="forma de pagamento" />
              </div>
            </span>
          </Style.PagamentoDiv>
          <Style.Seguranca>
            <span>SEGURANÇA</span>
            <img src={seguranca} alt="seguranca" />
          </Style.Seguranca>
        </Style.BoxPagamento>
        <Style.BoxEndereco>
          <span>
            O Cãoselheiro Comércio LTDA CNPJ: 30.324.633/0001-16 © Todos os
            direitos reservados. 2021
          </span>
          <img src={econverse} alt="logo econverse" />
        </Style.BoxEndereco>
      </Style.InfoContainer>
    </Style.MainContainer>
  );
};

export default Footer;
