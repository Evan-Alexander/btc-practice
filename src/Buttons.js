import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: grey;
  border-radius: 5px;
  padding: 15px;
  color: tomato;
`;

const BlueButton = Button.extend`
  background-color: skyblue;
  color: crimson;
`;

function Buttons() {
  return (
    <div>
      <Button> Click me!</Button>
      <BlueButton> Click me!</BlueButton>

    </div>
  )

}
export default Buttons;
