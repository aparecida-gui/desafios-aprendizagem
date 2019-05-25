import React from 'react';
import styled from 'styled-components';

const ButtonDetail = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 0 auto;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 5px;
  font-size: 1.5em;
  &:hover {
    background-color: black;
  }
  width: 168px;
  height: 16px;
  display: block;
  padding-top: 10px;
`;

const Button = props => <ButtonDetail>{props.text}</ButtonDetail>;

export default Button;
