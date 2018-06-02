// @flow
import * as React from "react";
import styles from "./style.css";

type PropsType = {
  children: string,
  selected?: string,
  onButtonClick: () => void
};

function MenuButton(props: PropsType): React.Node {
  const className: string =
    props.selected === "selected"
      ? `${styles.button} ${styles.selected}`
      : styles.button;
  return (
    <button className={className} onClick={props.onButtonClick}>
      {props.children}
    </button>
  );
}
export default MenuButton;
