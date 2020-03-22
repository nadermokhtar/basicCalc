import React from "react";
import { Button, Grid } from "semantic-ui-react";

const Keypad = ({ handleNumber, handleOperator }) => {
  return (
    <>
      <Grid columns={4} container>
        <Grid.Row>
          <Grid.Column>
            <Button content="AC" />
          </Grid.Column>
          <Grid.Column>
            <Button content="%" />
          </Grid.Column>
          <Grid.Column>
            <Button content="+/-" />
          </Grid.Column>
          <Grid.Column>
            <Button
              content="/"
              color="yellow"
              value="/"
              onClick={() => handleOperator}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button content="7" value="7" onClick={() => handleNumber} />
          </Grid.Column>
          <Grid.Column>
            <Button content="8" value="8" onClick={() => handleNumber} />
          </Grid.Column>
          <Grid.Column>
            <Button content="9" value="9" onClick={() => handleNumber} />
          </Grid.Column>
          <Grid.Column>
            <Button
              content="x"
              color="yellow"
              value="x"
              onClick={() => handleOperator}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button content="4" value="4" onClick={() => handleNumber} />
          </Grid.Column>
          <Grid.Column>
            <Button content="5" value="5" onClick={() => handleNumber} />
          </Grid.Column>
          <Grid.Column>
            <Button content="6" value="6" onClick={() => handleNumber} />
          </Grid.Column>
          <Grid.Column>
            <Button
              content="-"
              color="yellow"
              value="-"
              onClick={() => handleOperator}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button content="1" value="1" onClick={() => handleNumber} />
          </Grid.Column>
          <Grid.Column>
            <Button content="2" value="2" onClick={() => handleNumber} />
          </Grid.Column>
          <Grid.Column>
            <Button content="3" value="3" onClick={() => handleNumber} />
          </Grid.Column>
          <Grid.Column>
            <Button
              content="+"
              color="yellow"
              value="+"
              onClick={() => handleOperator}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button content="0" />
          </Grid.Column>
          <Grid.Column>
            <Button content="." />
          </Grid.Column>
          <Grid.Column>
            <Button content="=" color="yellow" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Keypad;
