import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.section`
  padding: 4rem;
  background: ${(props) => props.primary ? 'black' : 'lightgray'};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: firebrick;
  font-family: helvetica;
`;

const PurpleTitle = Title.extend`
  color: purple;
`;

const MyInput = styled.input``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate} 2s linear infinite;
  display: inline-block;
`;


function StyledComponents() {
  return (
    <Wrapper primary={true}>
      <PurpleTitle>Hello World</PurpleTitle>
      <Title>Hello Jason</Title>
      <MyInput placeholder="Type here"></MyInput>
      <Spinner>Goof!</Spinner>
    </Wrapper>
  )

}
export default StyledComponents;
