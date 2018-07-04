// @flow
import * as React from "react";
import MenuList from "@components/molecules/MenuList";
import styles from "./style.css";

type PropType = {
  current: string,
  onButtonClick: (current: string) => void
};

function Menu(props: PropType): React.Node {
  const { current, onButtonClick } = props;
  return (
    <nav className={styles.menu}>
      <MenuList current={current} onButtonClick={onButtonClick} />
    </nav>
  );
}
export default Menu;
