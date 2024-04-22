// Footer.tsx
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.secondaryColor};
  color: #fff;
  padding: 16px;
  text-align: center;
`;

interface Props {
  children: React.ReactNode;
}

const Footer: React.FC<Props> = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;