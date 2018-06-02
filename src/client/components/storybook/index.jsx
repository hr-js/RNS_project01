import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MenuButton from "../atoms/MenuButton";

storiesOf("Atoms/MenuButton", module)
  .add("通常", () => (
    <MenuButton onButtonClick={action("clicked")}>メニュー</MenuButton>
  ))
  .add("選択時", () => (
    <MenuButton selected="selected" onButtonClick={action("clicked")}>
      メニュー
    </MenuButton>
  ));
