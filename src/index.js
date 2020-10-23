import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton modifiers="small">Hello World!</PrimaryButton>
    <SecondaryButton modifiers={["large"]}>Hey World!</SecondaryButton>
    <TertiaryButton disabled>Oh no, World!</TertiaryButton>
    <GlobalStyle></GlobalStyle>
  </div>
);

ReactDOM.render(<App></App>, document.querySelector("#root"));
