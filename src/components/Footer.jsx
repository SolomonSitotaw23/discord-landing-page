import React from "react";
import styled from "styled-components";
import logo from "../assets/discord.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <Wrap>
      <Top>
        <Socials>
          <h2>IMAGINE A PLACE</h2>
          <select>
            <option value="English">English,USA</option>
          </select>
          <div>
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
          </div>
        </Socials>
        <Product className="links">
          <h4>Product</h4>
          <p>Download</p>
          <p>Nitro</p>
          <p>Status</p>
        </Product>
        <Company className="links">
          <h4>Company</h4>
          <p>About</p>
          <p>Jobs</p>
          <p>Branding</p>
          <p>Newsroom</p>
        </Company>
        <Resources className="links">
          <h4>Resources</h4>
          <p>College</p>
          <p>Support</p>
          <p>Safety</p>
          <p>Blog</p>
          <p>Feedback</p>
          <p>Developers</p>
          <p>StreamKit</p>
        </Resources>
        <Policies className="links">
          <h4>Policies</h4>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookie Settings</p>
          <p>Guidelines</p>
          <p>Acknowledgements</p>
          <p>Licenses</p>
          <p>Moderation</p>
        </Policies>
      </Top>
      <Cta>
        <Logo src={logo} alt="logo" />
        <SignUp>Sign Up</SignUp>
      </Cta>
    </Wrap>
  );
};

export default Footer;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 10rem;
  height: 70vh;
  background: #23272a;
`;

const Product = styled.div``;
const Company = styled.div``;
const Resources = styled.div``;
const Policies = styled.div``;
const Cta = styled.div`
  padding: 0 10rem;
  border-top: 1px solid #5865f2;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  .links {
    margin-left: 8rem;
  }
  div {
    h4 {
      color: #5865f2;
      font-weight: 300;
    }
    p {
      color: #fff;
    }
  }
`;
const Socials = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  h2 {
    font-family: "Ultra", serif;
    color: #5865f2;
    font-size: 32px;
  }
  select {
    background-color: transparent;
    border: none;
    color: #fff;
  }
  div {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      cursor: pointer;
  }
`;
const Logo = styled.img``;
const SignUp = styled.button`
  height: 38px;
  width: 74px;
  border: none;
  border-radius: 40px;
  background: #5865f2;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`;
// const Soc = styled.div`
//
// `;
