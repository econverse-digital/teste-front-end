import "../../css/components/layout/header.css";
import { headerInfos, menuIcons, navButtons } from "../../helpers/header";
import HeaderNavButton from "../buttons/HeaderNavButton";
import HeaderIcon from "../HeaderIcon";
import HeaderInfo from "../HeaderInfo";

const Header = () => {
  const mappedHeaderInfos = headerInfos.map((headerInfo) => {
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

  const mappedMenuIcons = menuIcons.map((icon) => {
    return (
      <HeaderIcon icon={icon.icon} iconDescription={icon.iconDescription} key={icon.id} />
    );
  });

  const mappedHeaderNavButtons = navButtons.map((button) => {
    return (
      <HeaderNavButton
        buttonName={button.buttonName}
        buttonColor={button.buttonColor}
        icon={button.icon}
        key={button.id}
      />
    );
  });

  return (
    <header>
      <div className="header-info-container">{mappedHeaderInfos}</div>
      <div className="header-search-bar-container">
        <img
          width={178}
          height={46}
          src="./assets/logos/Caoselheiro.png"
          alt="Logo da 'O Cãoselheiro' "
        />
        <input
          className="header-search-bar-input"
          placeholder="O que você está buscando?"
        />
        <div className="icons-container">{mappedMenuIcons}</div>
      </div>
      <nav>{mappedHeaderNavButtons}</nav>
    </header>
  );
};

export default Header;
