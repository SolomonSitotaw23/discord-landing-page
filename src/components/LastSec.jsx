import React from "react";
import styled from "styled-components";
import justChi from "../assets/justChilin.svg";

const LastSec = () => {
  return (
    <Wrap>
      <Text>
        <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
        <p>
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
      </Text>
      <Image>
        <Img src={justChi} alt="" />
      </Image>
    </Wrap>
  );
};

export default LastSec;

const Wrap = styled.div`
  background: #f6f6f6;
  padding: 5rem 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Text = styled.div`
  max-width: 980px;

  p {
    color: #23272a;
    margin: 24px 0 0 0;
  }
  h1 {
    font-size: 40px;
    font-family: "Ultra", serif;
  }
`;
const Image = styled.div``;
const Img = styled.img`
  height: 715.15px;
  width: 1080px;
`;
