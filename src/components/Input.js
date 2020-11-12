import React from "react";
import styled from "styled-components";
export const Campo = styled.input`
    outline: 0;
    border-width: 0 0 2px;
    
    font-size:16px;
    border-color: #929292;
    background-color: #fff;
    &:focus{
      border-color:#DE7231
    }
}
  `;
export const Pesquisa = styled.input`
    outline: 0;
    border-width: 0 0 1px;
    border-color: blue;
    color:white;
    border-color: white;
    background-color: transparent;
    font-size:14px;
}
  `;
export const Input = (props) => {
  return (
    <>
      <Campo {...props} />
    </>
  );
};
