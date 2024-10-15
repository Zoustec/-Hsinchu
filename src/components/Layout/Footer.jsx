import React from "react";
import styled from "styled-components";

const CustomFooter = styled.footer`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return <CustomFooter>新竹縣政府稅務局</CustomFooter>;
};

export default Footer;
