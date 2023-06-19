import React from "react";
import styled from "styled-components";
import DoubleArrowLeft from "../../Icons/DoubleArrowLeft";

const BrandIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const BrandContainer = styled.div`
  padding: 33px 22px;
`;

const Brand = ({ divider, opener, ...props }) => {
  return (
    <BrandContainer
      {...props}
      className={`${
        props.className
      } flex flex-row items-center justify-between ${
        divider ? "border-b border-b-main-divider" : ""
      }`}
    >
      <div className="flex flex-row items-center">
        <BrandIcon src="/images/brand.png" alt="Kanban Icon" className="mr-2" />
        <h1 className="text-font-primary ml-px text-xl font-semibold">
          Project M.
        </h1>
      </div>
      {opener && <DoubleArrowLeft />}
    </BrandContainer>
  );
};

export default Brand;
