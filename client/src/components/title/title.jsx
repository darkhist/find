import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
  margin: 0.5em 0;
  text-align: center;
`;

const Title = ({ text }) => <TitleStyle> {text} </TitleStyle>;

export default Title;
