import "../../css/components/layout/header.css";
import { headerInfos } from "../../helpers/headerInfo";
import HeaderInfo from "../HeaderInfo";

const Header = () => {
  const mappingHeaderInfos = headerInfos.map((headerInfo) => {
    return (
      <HeaderInfo
        icon={headerInfo.icon}
        iconDescription={headerInfo.iconDescription}
        text={headerInfo.text}
        key={headerInfo.id}
        textStart={headerInfo.textStart}
        textStartStyle={headerInfo.textStartStyle}
        textEnd={headerInfo.textEnd}
        textEndStyle={headerInfo.textEndStyle}
      />
    );
  });

  return (
    <header>
      <div className="header-info-container">{mappingHeaderInfos}</div>
      <div className="header-search-bar-container">
        <img
          className="logo-spacing"
          width={178}
          height={46}
          src="./assets/images/Logo.png"
          alt="Logo da 'O Cãoselheiro' "
        />
        <input className="header-search-bar-input"
        placeholder="O que você está buscando?" />
        <div>icones</div>
      </div>
      <nav>barra de navegação</nav>
    </header>
  );
};

export default Header;
