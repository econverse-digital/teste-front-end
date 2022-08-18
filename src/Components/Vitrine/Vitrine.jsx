import React, { useEffect, useState } from "react";
import * as Style from "./styled";
import heart from "../../Assets/img/header/heart.png";
import { GetData } from "../../Services/Request";

const Vitrine = ({ setProduto }) => {
  const [data, setData] = useState([]);
  const [array, setArray] = useState(4);

  useEffect(() => {
    GetData({
      request: setData,
    });
  }, []);

  return (
    <Style.MainContainer>
      <Style.BoxMenu>
        <h2>Meu Cachorro...</h2>
        <Style.MenuNav>
          <span>ᐸ</span>
          <button className="select">É AGITADO</button>
          <button>MORDE</button>
          <button>LATE MUITO</button>
          <button>É ANSIOSO</button>
          <button>É ESTRESSADO</button>
          <span>ᐳ</span>
        </Style.MenuNav>
      </Style.BoxMenu>
      <Style.BoxProduto>
        {data &&
          data
            .filter((p, index) => {
              return index < array;
            })
            .map((produto, index) => {
              return (
                <Style.CardProdutos
                  key={index}
                  onClick={() => setProduto(produto)}
                >
                  <Style.OFF>
                    <div>40% OFF</div>
                    <img src={heart} alt="curtir" />
                  </Style.OFF>
                  <Style.InfoProdutos>
                    <img src={produto.photo} alt="Foto brinquedo" />
                    <Style.ProductName>{produto.productName}</Style.ProductName>
                    <Style.PrecoOriginal>
                      De R$ {produto.price.toLocaleString("pt-BR")}
                    </Style.PrecoOriginal>
                    <Style.PrecoAtual>
                      Por R$
                      {(
                        produto.price -
                        (produto.price * 40) / 100
                      ).toLocaleString("pt-BR")}
                    </Style.PrecoAtual>
                    <Style.PrecoAssinante>
                      R$
                      {(
                        produto.price -
                        (produto.price * 50) / 100
                      ).toLocaleString("pt-BR")}
                    </Style.PrecoAssinante>
                    <Style.Assinante>Para assinantes</Style.Assinante>
                    <Style.ButtonAdicionar>Adicionar</Style.ButtonAdicionar>
                  </Style.InfoProdutos>
                </Style.CardProdutos>
              );
            })}
      </Style.BoxProduto>
      <Style.ButtonTodos onClick={() => setArray(array + 4)}>
        Ver todos
      </Style.ButtonTodos>
    </Style.MainContainer>
  );
};

export default Vitrine;
