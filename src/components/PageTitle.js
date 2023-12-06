import React from "react";
import styled from "styled-components";

const PageTitle = ({ title }) => {
  const TitleContainer = styled.div`
    text-align: center;
    margin-top: 20px;
    color: #2D3E5F; // Dark grey color
    font-weight: 600;
    font-size: 50px;
    display: flex;
    position: absolute;
    margin-left: 44%;
    margin-top: 2%;
  `;

  return <TitleContainer>{title}</TitleContainer>;
};

export default PageTitle;
