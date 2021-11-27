import React from "react";
import styled from "styled-components";
import download from "../assets/download.svg";
import left from "../assets/forgroundleft.svg";
import right from "../assets/foregroundRight.svg";
import bg from "../assets/bg.svg";

const Header = () => {
  return (
    <Hero>
      <BgLeft src={left} alt="" />
      <Bg src={bg} />
      <Imagine>
        <Text>
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </Text>

        <CTA>
          <Download>
            <img src={download} alt="" />
            <p>Download For Windows</p>
          </Download>
          <Open>
            <p>Open Discord In Your Browser</p>
          </Open>
        </CTA>
      </Imagine>
      <BgRight src={right} alt="" />
    </Hero>
  );
};

export default Header;

const BgLeft = styled.img`
  margin: 0 0 -185px -1400px;
  z-index: 2;
  position: absolute;
`;
const BgRight = styled.img`
  margin: 0 0 -180px 1400px;
  z-index: 2;
  position: absolute;
`;
const Bg = styled.img`
  width: 100%;
  height: 70vh;
  position: absolute;
  z-index: 1;
  margin: 0 0 -145px 0;
`;
const Hero = styled.div`
  width: 100%;
  background: #404eed;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  h1 {
    font-family: "Ultra", serif;
    color: #fff;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 56px;
  }
  p {
    font-size: 16px;
    line-height: 2;
    width: 780px;
    height: 96px;
    margin: 40px 0 0 0;
  }
`;
const Imagine = styled.div`
  z-index: 2;
  width: 780px;
  height: 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Open = styled.button`
  display: flex;
  border: none;
  border-radius: 40px;
  padding: 16px 32px;
  color: #fff;
  background: #000;
  font-size: 20px;
  margin: 24px 24px 0 0;
  font-weight: 500;
`;
const Download = styled(Open)`
  display: flex;
  background: #fff;
  color: #000;
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
