import { ContainterBar, InputSearch } from "./styled";

function SearchBar() {
  return (
    <ContainterBar>
      <h1>Ninja Som</h1>
      <InputSearch placeholder="Busque Aqui..." />
      <div>icone (11) 9999-9999</div>
      <div>
        <p> Olá, visitante</p>
        <p> Minha Conta</p>
      </div>
      <div>
        <p>Seu carrinho</p>
        <p>0 item(s)</p>
      </div>
    </ContainterBar>
  );
}

export default SearchBar;
