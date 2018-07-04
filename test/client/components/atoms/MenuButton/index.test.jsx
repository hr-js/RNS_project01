import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import MenuButton from "@components/atoms/MenuButton";

describe("MenuButton.jsxのテスト", () => {
  const func = () => {};
  describe("スナップショット", () => {
    it("renders corecctly", () => {
      const tree = renderer
        .create(
          <MenuButton selected="selected" onButtonClick={func}>
            メニュー
          </MenuButton>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe("コンポーネントのテスト", () => {
    describe("子要素に「入退室処理」を指定して、ボタンをクリックした時", () => {
      const onButtonClick = jest.fn();
      const button = shallow(
        <MenuButton onButtonClick={onButtonClick}>入退室処理</MenuButton>
      );
      button.find("button").simulate("click");
      it("子要素は「入退室処理」である", () => {
        expect(button.text()).toBe("入退室処理");
      });
      it("onButtonClickがコールされた", () => {
        expect(onButtonClick).toHaveBeenCalled();
      });
    });
    describe("selected属性を使用しない場合", () => {
      const button = shallow(
        <MenuButton onButtonClick={() => {}}>入退室処理</MenuButton>
      );
      it("classNameは「button」である", () => {
        expect(button.props().className).toBe("button");
      });
    });
    describe("selected属性を使用した場合", () => {
      const button = shallow(
        <MenuButton selected="selected" onButtonClick={() => {}}>
          入退室処理
        </MenuButton>
      );
      it("classNameは「button selected」である", () => {
        expect(button.props().className).toBe("button selected");
      });
    });
  });
});
