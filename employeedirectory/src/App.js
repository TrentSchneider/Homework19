import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FilterForm from "./components/FilterForm";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title></Title>
        <FilterForm></FilterForm>
        <Cards></Cards>
      </Wrapper>
    );
  }
}

export default App;
