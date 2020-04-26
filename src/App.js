import React from "react";
import Keypad from "./Keypad";
import { Card, Input } from "semantic-ui-react";
import { concat, mathFactory } from "./MathFactories";

class App extends React.Component {
  state = {
    first: 0,
    operator: "",
    second: 0,
    display: 0,
    result: null,
  };
  handleNumber = (e) => {
    if (this.state.operator === "") {
      if (e.target.value === "+/-") {
        this.setState({ first: this.state.first * -1 });
      } else {
        this.setState({ first: concat(this.state.first, e.target.value) });
      }
    } else {
      if (e.target.value === "+/-") {
        this.setState({ first: this.state.first * -1 });
      } else {
        this.setState({ second: concat(this.state.second, e.target.value) });
      }
    }
  };
  handleOperator = (e) => {
    this.setState({ operator: e.target.value });
  };

  handleCalculation = () => {
    const { first, operator, second } = this.state;
    const result = mathFactory(first, operator, second);
    this.setState({ result });
  };

  handleAllClear = () => {
    this.setState({
      first: 0,
      operator: "",
      second: 0,
      display: 0,
      result: null,
    });
  };

  handleDisplay = () => {
    if (this.state.result !== null) {
      return <Input size="big" value={`${this.state.result}`} />;
    } else if (
      this.state.first !== 0 &&
      this.state.operator === "" &&
      this.state.second === 0
    ) {
      return <Input size="big" value={`${this.state.first}`} />;
    } else if (
      this.state.first !== 0 &&
      this.state.operator !== "" &&
      this.state.second === 0
    ) {
      return (
        <Input
          size="big"
          value={`${this.state.first} ${this.state.operator} `}
        />
      );
    } else if (
      this.state.first !== 0 &&
      this.state.operator !== "" &&
      this.state.second !== 0
    ) {
      return (
        <Input
          size="big"
          value={`${this.state.first} ${this.state.operator} ${this.state.second}`}
        />
      );
    }
  };

  render() {
    const displayBar = this.handleDisplay();
    console.table(this.state);
    return (
      <Card>
        <Card.Content>{displayBar}</Card.Content>
        <Card.Content>
          <Keypad
            handleNumber={this.handleNumber}
            handleOperator={this.handleOperator}
            handleCalculation={this.handleCalculation}
            handleAllClear={this.handleAllClear}
          />
        </Card.Content>
      </Card>
    );
  }
}

export default App;
