import React from "react";
import Keypad from "./Keypad";
import { Card, Input } from "semantic-ui-react";
import { Concat } from "./MathFac";

class App extends React.Component {
  state = {
    first: null,
    operator: "",
    second: null,
    display: "0",
    result: null
  };
  handleNumber = e => {
    if (this.state.operator !== "") {
      this.setState({ first: Concat(this.state.first, e.target.value) });
    } else {
      this.setState({ second: Concat(this.state.second, e.target.value) });
    }
  };
  handleOperator = e => {
    this.setState({ operator: e.target.value });
  };

  handleDisplay = () => {
    if (
      this.state.first !== null &&
      this.state.operator === "" &&
      this.state.operator === null
    ) {
      this.setState({ display: `${this.state.first}` });
    } else if (
      this.state.first !== null &&
      this.state.operator !== "" &&
      this.state.operator === null
    ) {
      this.setState({ display: `${this.state.first} ${this.state.operator}` });
    } else if (
      this.state.first !== null &&
      this.state.operator !== "" &&
      this.state.operator !== null
    ) {
      this.setState({
        display: `${this.state.first} ${this.state.operator} ${this.state.second}`
      });
    }
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <Input size="big" value={this.state.display} />
        </Card.Content>
        <Card.Content>
          <Keypad
            handleNumber={this.handleNumber}
            handleOperator={this.handleOperator}
          />
        </Card.Content>
      </Card>
    );
  }
}

export default App;
