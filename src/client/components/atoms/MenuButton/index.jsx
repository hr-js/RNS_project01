// @flow
import * as React from "react";
import styles from "./style.css";

type PropsType = {
  children: string,
  // flowのtype定義なのにreactのルールが適用されているので無効化
  // eslint-disable-next-line react/require-default-props
  selected?: string,
  onButtonClick: () => void
};

function MenuButton(props: PropsType): React.Node {
  const { selected } = props;
  const className: string =
    selected === "selected"
      ? `${styles.button} ${styles.selected}`
      : styles.button;
  return (
    <button className={className} onClick={props.onButtonClick}>
      {props.children}
    </button>
  );
}
export default MenuButton;
