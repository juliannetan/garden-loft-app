import React from "react";
import styled from "styled-components";

const PageTitle = ({ title }) => {
  const TitleContainer = styled.div`
    text-align: center;
    margin-top: 20px;
    color: #333; // Dark grey color
    font-weight: 600;
    font-size: 50px;
  `;

  return <TitleContainer>{title}</TitleContainer>;
};

export default PageTitle;
