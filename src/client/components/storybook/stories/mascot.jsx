import React from "react";
import { storiesOf } from "@storybook/react";
import MainFlame from "@components/MainFlame";
import Mascot from "@components/Mascot";
import DummyContainer from "../DummyContainer";

storiesOf("Mascot", module).add("マスコット", () => (
  <DummyContainer>
    <MainFlame type="default">
      <Mascot />
    </MainFlame>
  </DummyContainer>
));
