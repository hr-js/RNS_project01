// @flow
import * as React from "react";
import styles from "./style.css";
// TODO: 画像ができたら差し替えする
import image from "../../images/test.png";

function Mascot(): React.Node {
  const { mascot, img } = styles;
  return (
    <div className={mascot}>
      <img src={image} alt="マスコット" className={img} />
    </div>
  );
}
export default Mascot;
