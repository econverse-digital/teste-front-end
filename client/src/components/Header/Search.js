import styles from "./Search.module.css";
import { BsSearch } from "react-icons/bs";

const Search = (props) => {
  return (
    <div className={styles.div}>
      <div className={styles.ico}>
        <span>
          <BsSearch />
        </span>
      </div>
      <input className={styles.search} defaultValue={props.children}></input>
    </div>
  );
};

export default Search;
