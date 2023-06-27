import React from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderContainerRight,
  HeaderContainerLeft,
  HeaderSubHeader,
  HeaderMainHeader,
  HeaderMainHeaderSpan,
  HeaderLeftTitle,
  HeaderSearch,
  HeaderOrangeCircle,
  HeaderSearchInput,
} from "./Header.elements";

import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import CountUp from "react-countup";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderContainerLeft>
          <HeaderLeftTitle>
            <HeaderOrangeCircle />
            <HeaderMainHeader>
              اشعر بالراحة من خلال
              <br /> قوة الفيتامينات{" "}
              <HeaderMainHeaderSpan>الافضل للصحة</HeaderMainHeaderSpan>
            </HeaderMainHeader>
          </HeaderLeftTitle>
        </HeaderContainerLeft>
        <HeaderContainerRight>
          <HeaderSubHeader>
            تبدأ زيارتك المجانية عبر الإنترنت هنا. أخبرنا <br /> بما يمكننا
            مساعدتك فيه.
          </HeaderSubHeader>
          <HeaderSearch>
            <YoutubeSearchedForIcon style={{ color: "white", fontSize: 25 }} />
            <HeaderSearchInput>ابحث عن الفيتامينات</HeaderSearchInput>
          </HeaderSearch>
        </HeaderContainerRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
