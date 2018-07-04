// @flow
import * as React from "react";
import MenuButton from "@components/atoms/MenuButton";
import styles from "./style.css";

type PropType = {
  current: string,
  onButtonClick: (current: string) => void
};

const items: Array<string> = ["入退室処理", "ユーザ登録", "利用者一覧"];

function MenuList(props: PropType): React.Node {
  const { current, onButtonClick } = props;

  const listItems: Array<React.Node> = items.map((item: string): React.Node => {
    const menuButton: React.Node =
      item === current ? (
        <MenuButton
          selected="selected"
          onButtonClick={() => {
            onButtonClick(item);
          }}
        >
          {item}
        </MenuButton>
      ) : (
        <MenuButton
          onButtonClick={() => {
            onButtonClick(item);
          }}
        >
          {item}
        </MenuButton>
      );
    return <li key={item}>{menuButton}</li>;
  });

  return <ul className={styles.menuList}>{listItems}</ul>;
}
export default MenuList;
