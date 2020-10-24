import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => {
  return (
    <CloseIconWrapper aria-hidden="true">
      <path d="M-496.6-203l16.7,16.7c1.2,1.2,1.2,3.2,0,4.4c-1.2,1.2-3.2,1.2-4.4,0l-16.7-16.7l-16.7,16.7   c-1.2,1.2-3.2,1.2-4.4,0c-1.2-1.2-1.2-3.2,0-4.4l16.7-16.7l-16.7-16.7c-1.2-1.2-1.2-3.2,0-4.4c1.2-1.2,3.2-1.2,4.4,0l16.7,16.7   l16.7-16.7c1.2-1.2,3.2-1.2,4.4,0s1.2,3.2,0,4.4L-496.6-203z" />
    </CloseIconWrapper>
  );
};
