import React from "react";
import {
  BannerPictureContainer,
  BannerWrapper,
  BannerPicture,
  BannerPara,
} from "./Banner.elements";
import HardMints from "../../assets/HardMints.png";
const Banner = () => {
  return (
    <BannerWrapper>
      <BannerPictureContainer>
        <BannerPicture src={HardMints} />
      </BannerPictureContainer>
      <BannerPara>اختبر نفسك واعرف مستواك الحالي</BannerPara>
    </BannerWrapper>
  );
};

export default Banner;
