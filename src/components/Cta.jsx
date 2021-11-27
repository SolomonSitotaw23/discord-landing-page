import React from "react";
import styled from "styled-components";
import download from "../assets/download copy.svg";

const Cta = () => {
  return (
    <Wrap>
      <h1>Ready to start your journey?</h1>
      <Download>
        <img src={download} alt="" />
        <p>Download For Windows</p>
      </Download>
    </Wrap>
  );
};

export default Cta;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 284px;
  width: 100%;
  font-weight: 300px;
`;
const Download = styled.button`
  display: flex;
  background: #5865f2;
  border: none;
  border-radius: 40px;
  padding: 16px 32px;
  color: #fff;
  font-size: 20px;
  margin: 24px 24px 0 0;
  font-weight: 500;
  img {
    fill: #fff;
  }
`;
