import { ContainerHeader, ItemHeader } from "./styled";

function Header() {
  return (
    <ContainerHeader>
      <ItemHeader>
        <p>icone</p>
        <p>COMPRA 100%</p>
      </ItemHeader>
      <ItemHeader>
        <p>icone</p>
        <p>TROCA GRATÍS</p>
      </ItemHeader>
      <ItemHeader>
        <p>icone</p>
        <p>5X SEM JUROS</p>
      </ItemHeader>
      <ItemHeader>
        <p>icone</p>
        <p>ENTREGAS EM TODO O BRASIL</p>
      </ItemHeader>
    </ContainerHeader>
  );
}

export default Header;
