import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Menu from "@components/organisms/Menu";
import MenuList from "@components/molecules/MenuList";

describe("Menu.jsxのテスト", () => {
  const func = () => {};

  describe("スナップショット", () => {
    const tree = renderer
      .create(<Menu current="入退室処理" onButtonClick={func} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("コンポーネントのテスト", () => {
    it("MenuListを1つもつ", () => {
      const menu = shallow(<Menu current="入退室処理" onButtonClick={func} />);
      expect(menu.find(MenuList)).toHaveLength(1);
    });
  });
});
