import React, { useState } from "react";
import styles from "./ShopItem.module.css";
import QuickView from "./QuickView";

const ShopItem = (props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const isHoverOn = () => setIsMouseOver(true);
  const isHoverOff = () => setIsMouseOver(false);
  return (
    <div
      className={styles.div}
      onMouseEnter={() => isHoverOn()}
      onMouseLeave={() => isHoverOff()}
      onClick={() => isHoverOff() + props.setItemData(props.item)}
    >
      <img
        className={styles.image}
        src={props.item.photo}
        alt={props.item.productName}
      />
      {isMouseOver === true ? <QuickView instrument={props.item} /> : ""}
      <p className={styles.title}>{props.item.productName}</p>
      <p className={styles.description}>{props.item.descriptionShort}</p>
      <p className={styles.value}>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props.item.price)}
      </p>
    </div>
  );
};

export default ShopItem;
