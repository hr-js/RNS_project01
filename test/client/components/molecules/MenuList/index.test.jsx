import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import MenuList from "@components/molecules/MenuList";
import MenuButton from "@components/atoms/MenuButton";

describe("MenuList.jsxのテスト", () => {
  const func = () => {};

  describe("スナップショット", () => {
    it("renders corecctly", () => {
      const tree = renderer
        .create(<MenuList current="入退室処理" onButtonClick={func} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("MenuButtonが3つある", () => {
      const list = shallow(
        <MenuList current="入退室処理" onButtonClick={func} />
      );
      expect(list.find(MenuButton)).toHaveLength(3);
      expect(list.find(MenuButton).get(0).props.children).toBe("入退室処理");
      expect(list.find(MenuButton).get(1).props.children).toBe("ユーザ登録");
      expect(list.find(MenuButton).get(2).props.children).toBe("利用者一覧");
    });

    describe("currentに「入退室処理」を指定する", () => {
      it("「入退室処理」ボタンにselected属性がある", () => {
        const list = shallow(
          <MenuList current="入退室処理" onButtonClick={func} />
        );
        expect(list.find(MenuButton).get(0).props.selected).toBe("selected");
        expect(list.find(MenuButton).get(1).props.selected).toBeUndefined();
        expect(list.find(MenuButton).get(2).props.selected).toBeUndefined();
      });
    });

    describe("currentに「ユーザ登録」を指定する", () => {
      it("「ユーザ登録」ボタンにselected属性がある", () => {});
      const list = shallow(
        <MenuList current="ユーザ登録" onButtonClick={func} />
      );
      expect(list.find(MenuButton).get(0).props.selected).toBeUndefined();
      expect(list.find(MenuButton).get(1).props.selected).toBe("selected");
      expect(list.find(MenuButton).get(2).props.selected).toBeUndefined();
    });

    describe("currentに「利用者一覧」を指定する", () => {
      it("「利用者一覧」ボタンにselected属性がある", () => {
        const list = shallow(
          <MenuList current="利用者一覧" onButtonClick={func} />
        );
        expect(list.find(MenuButton).get(0).props.selected).toBeUndefined();
        expect(list.find(MenuButton).get(1).props.selected).toBeUndefined();
        expect(list.find(MenuButton).get(2).props.selected).toBe("selected");
      });
    });

    describe("MenuButtonをクリック", () => {
      const onButtonClick = jest.fn();
      beforeEach(() => {
        onButtonClick.mockReset();
      });

      describe("「入退室処理」をクリックする", () => {
        it("引数に'入退室処理'が渡される", () => {
          const list = mount(
            <MenuList current="" onButtonClick={onButtonClick} />
          );
          list
            .find(MenuButton)
            .at(0)
            .simulate("click");
          expect(onButtonClick.mock.calls[0][0]).toBe("入退室処理");
        });
      });

      describe("「ユーザ登録」をクリックする", () => {
        it("引数に'ユーザ登録'が渡される", () => {
          const list = mount(
            <MenuList current="" onButtonClick={onButtonClick} />
          );
          list
            .find(MenuButton)
            .at(1)
            .simulate("click");
          expect(onButtonClick.mock.calls[0][0]).toBe("ユーザ登録");
        });
      });

      describe("「利用者一覧」をクリックする", () => {
        it("引数に'利用者一覧'が渡される", () => {
          const list = mount(
            <MenuList current="" onButtonClick={onButtonClick} />
          );
          list
            .find(MenuButton)
            .at(2)
            .simulate("click");
          expect(onButtonClick.mock.calls[0][0]).toBe("利用者一覧");
        });
      });
    });
  });
});
