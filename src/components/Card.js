import React from "react";
import styled from "styled-components";
const RecipeContainer = styled.div`
  background-color: #fff;

    margin-left: 10px;
    border-radius: 20px;
    margin-top: 20px;
    overflow: hidden;

    flex: 1;
}
`;

export const Card = ({ children }) => {
  return <RecipeContainer>{children}</RecipeContainer>;
};
