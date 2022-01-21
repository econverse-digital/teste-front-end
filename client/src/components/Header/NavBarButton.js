import styles from "./NavBarButton.module.css";

const NavBarButton = (props) => {
  return (
    <div className={styles.div}>
      <a>{props.children}</a>
    </div>
  );
};

export default NavBarButton;
