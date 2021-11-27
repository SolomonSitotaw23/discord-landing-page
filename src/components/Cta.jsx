import React from "react";
import styled from "styled-components";
import download from "../assets/download copy.svg";
import spark from "../assets/sparkles.svg";

const Cta = () => {
  return (
    <Wrap>
      <Spark src={spark} alt="" />
      <h1>Ready to start your journey?</h1>
      <Download>
        <img src={download} alt="" />
        <p>Download For Windows</p>
      </Download>
    </Wrap>
  );
};

export default Cta;

const Spark = styled.img``;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 284px;
  width: 100%;

  background: #f6f6f6;
  h1 {
    font-weight: 600;
    margin-bottom: 1rem;
  }
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
