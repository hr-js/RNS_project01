import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// actions
import MenuButton from "@components/atoms/MenuButton";
// molecules
import MenuList from "@components/molecules/MenuList";
// organisms
import Menu from "@components/organisms/Menu";

// #region atoms
storiesOf("Atoms/MenuButton", module)
  .add("通常", () => (
    <MenuButton onButtonClick={action("clicked")}>メニュー</MenuButton>
  ))
  .add("選択時", () => (
    <MenuButton selected="selected" onButtonClick={action("clicked")}>
      メニュー
    </MenuButton>
  ));
// #endregion atoms

// #region molecules
storiesOf("Molecules/MenuList", module)
  .add("入退室処理 選択時", () => (
    <MenuList current="入退室処理" onButtonClick={action("clicked")} />
  ))
  .add("ユーザ登録 選択時", () => (
    <MenuList current="ユーザ登録" onButtonClick={action("clicked")} />
  ))
  .add("利用者一覧 選択時", () => (
    <MenuList current="利用者一覧" onButtonClick={action("clicked")} />
  ));
// #endregion molecules

// #region organisms
storiesOf("Organisms/Menu", module).add("メニュー", () => (
  <Menu current="入退室処理" onCuttonClick={action("clicked")} />
));
// #endreigon organisms
