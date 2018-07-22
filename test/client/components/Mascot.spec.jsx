import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Mascot from "@components/Mascot";

describe("Mascot.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<Mascot />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const mascot = shallow(<Mascot />);
    const children = mascot.children();
    it("cssクラス: mascotをもつ", () => {
      expect(mascot.hasClass("mascot")).toBeTruthy();
    });

    it("子要素imgのcssクラス: imgをもつ", () => {
      expect(children.hasClass("img")).toBeTruthy();
    });

    it("子要素imgのaltの値は、マスコット", () => {
      expect(children.prop("alt")).toBe("マスコット");
    });

    it("子要素imgのsrcの値は、test-file-stub", () => {
      expect(children.prop("src")).toBe("test-file-stub");
    });
  });
});
