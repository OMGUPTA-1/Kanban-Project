import React from "react";
import styled from "styled-components";

const AvatarImage = styled.img`
  width: 38px;
  height: 38px;
`;

const Avatar = (props) => {
  return (
    <AvatarImage {...props} className={`${props.className} rounded-full`} />
  );
};

export default Avatar;
