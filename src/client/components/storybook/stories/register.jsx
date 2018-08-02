import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MainFlame from "@components/MainFlame";
import Header from "@components/Register/Header";
import RegisterInput from "@components/Register/RegisterInput";
import DummyContainer from "../DummyContainer";
import styles from "./style.css";

const { container } = styles;

storiesOf("Register", module)
  .add("入力画面", () => (
    <DummyContainer>
      <MainFlame type="default">
        <div className={container}>
          <Header current="input" />
          <RegisterInput
            firstNameValue="hr"
            firstNameError=""
            lastNameValue="js"
            lastNameError=""
            emailValue="hr-js"
            emailError=""
            onFirstNameChange={action("onFirstNameChange")}
            onLastNameChange={action("onFirstNameChange")}
            onEmailChange={action("onFirstNameChange")}
            onClickNextButton={() => {}}
            onSubmitForm={e => e.preventDefault()}
          />
        </div>
      </MainFlame>
    </DummyContainer>
  ))
  .add("入力画面(エラー時)", () => (
    <DummyContainer>
      <MainFlame type="default">
        <div className={container}>
          <Header current="input" />
          <RegisterInput
            firstNameValue="hr"
            firstNameError="Error"
            lastNameValue="js"
            lastNameError="コメントは"
            emailValue="hr-js"
            emailError="自分で設定可能です"
            onFirstNameChange={action("onFirstNameChange")}
            onLastNameChange={action("onFirstNameChange")}
            onEmailChange={action("onFirstNameChange")}
            onClickNextButton={() => {}}
            onSubmitForm={e => e.preventDefault()}
          />
        </div>
      </MainFlame>
    </DummyContainer>
  ));