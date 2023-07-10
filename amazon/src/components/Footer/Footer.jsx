import React from "react";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon,
} from "./Footer.elements";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubText>
          انضم لايميلنا الخاص واحصل على افضل المنتجات
        </FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="اكتب ايميلك" />
          <Button fontBig>سجل</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>من محن</FooterLinkTitle>
            <FooterLink to="/sign-up">كيف يعمل</FooterLink>
            <FooterLink to="/">شهادة</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>تواصل معنا</FooterLinkTitle>
            <FooterLink to="/sign-up">كيف يعمل</FooterLink>
            <FooterLink to="/">شهادة</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>الفيديوات</FooterLinkTitle>
            <FooterLink to="/sign-up">كيف يعمل</FooterLink>
            <FooterLink to="/">شهادة</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>وسائل التواصل</FooterLinkTitle>
            <FooterLink to="/sign-up">كيف يعمل</FooterLink>
            <FooterLink to="/">شهادة</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            هاي / فيتامينز
          </SocialLogo>
          <WebsiteRights>ULTRA @ 2023</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.youtube.com/@dralsallum"}
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Tiktok">
              <FaTiktok />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.twitter.com/@dralsallum"}
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
