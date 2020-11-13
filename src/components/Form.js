import React, { useState } from "react";

import styled from "styled-components";

const FormContainer = styled.div`
  background-color: #fff;
  display: flex;
  min-height: 500px;
  flex: 3;
  border-radius: 20px;
  margin-top: 20px;
  overflow: hidden;
`;

export const Form = ({ children }) => {
  return <FormContainer>{children}</FormContainer>;
};
