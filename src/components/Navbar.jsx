import React from "react";
import styled from "styled-components";
import discord from "../assets/discord.svg";
const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src={discord} alt="" />
      </Logo>
      <Links>
        <ul>
          <li>Download</li>
          <li>Nitro</li>
          <li>Safety</li>
          <li>Support</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </Links>
      <Login>Login</Login>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`

  font-weight: 600;
  height: 80px;
  width: 100%;
  background: #404eed;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.div`
  img {
    fill: #fff;
    color: #fff;
  }
`;
const Links = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    font-size: 16px;
    line-height: 22.4px;
    text-align: center;
    color: #ffffff;
    li {
      margin: 0 10px;
      cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
    }
    
  }
`;
const Login = styled.button`
  padding: 7px 16px;
  border-radius: 40px;
  border: none;
  color: #23272a;
  background-color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
cursor: pointer;
`;
