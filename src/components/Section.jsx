import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({ leftImg, title, text, rightImg, bgColor }) => {
  return (
    <Fade bottom>
      <Wrap bgColor={bgColor}>
        <LeftImg>
          <LImg src={leftImg} alt="" />
        </LeftImg>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
        <RightImg>
          <RImg src={rightImg} alt="" />
        </RightImg>
      </Wrap>
    </Fade>
  );
};

export default Section;
const Wrap = styled.div`
  background-color: ${(props) => `${props.bgColor}`};
  width: 100%;
  height: 90vh;
  padding: 10rem;
  display: flex;
  justify-content: space-between;
`;
const LeftImg = styled.div``;
const LImg = styled.img``;
const RImg = styled.img``;
const Text = styled.div`
  padding: 5rem 5rem;
  h1 {
    font-size: 48px;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    line-height: 57.6px;
  }
  p {
    color: #23272a;
    font-size: 20px;
  }
`;
const RightImg = styled.div``;
