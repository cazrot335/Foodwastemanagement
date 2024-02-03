import { useCallback } from "react";
import ResQHarborSection from "../components/ResQHarborSection";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FourthLevelFrameChild = styled.img`
  width: 1920px;
  position: relative;
  max-height: 100%;
  object-fit: cover;
  display: none;
  max-width: 100%;
`;
const Image18Icon = styled.img`
  height: 562px;
  width: 166px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const Your = styled.span``;
const Support = styled.span`
  background: linear-gradient(180deg, #fff44b, #00ff6d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const YourSupportCanContainer = styled.h1`
  margin: 0;
  width: 859px;
  height: 212px;
  position: relative;
  font-size: inherit;
  line-height: 105.6px;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  padding-right: var(--padding-xl);
  z-index: 1;
  @media screen and (max-width: 900px) {
    font-size: var(--font-size-31xl);
    line-height: 63px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-11xl);
    line-height: 42px;
  }
`;
const ThisHelpIs = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-21xl);
  line-height: 96%;
  font-weight: 600;
  z-index: 1;
  @media screen and (max-width: 900px) {
    font-size: var(--font-size-13xl);
    line-height: 31px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
    line-height: 23px;
  }
`;
const PoorAndNeedyText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-15xl);
  max-width: 100%;
  @media screen and (max-width: 900px) {
    gap: var(--gap-15xl);
  }
`;
const LoginButton = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-41xl);
  background: linear-gradient(90deg, #fffa27, #a9e048 33.39%, #44c16e);
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`;
const Login = styled.b`
  position: absolute;
  top: 14px;
  left: 111px;
  line-height: 101%;
  z-index: 2;
`;
const ButtonLabel = styled.div`
  width: 321px;
  height: 76px;
  position: relative;
  max-width: 100%;
  white-space: nowrap;
  font-size: var(--font-size-26xl);
`;
const YourSupportText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-123xl);
  max-width: 100%;
  @media screen and (max-width: 1300px) {
    gap: var(--gap-123xl);
  }
  @media screen and (max-width: 900px) {
    gap: var(--gap-123xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-123xl);
  }
`;
const YourSupportTextWrapper = styled.section`
  width: 1503px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 84px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: 100px;
  color: var(--color-white);
  font-family: var(--font-dosis);
  @media screen and (max-width: 900px) {
    padding-top: 55px;
    box-sizing: border-box;
  }
`;
const FourthLevelFrame = styled.main`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 142px 0px 165px;
  box-sizing: border-box;
  gap: var(--gap-57xl);
  background-image: url("/rectangle-59@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  max-width: 100%;
  @media screen and (max-width: 1650px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1300px) {
    padding-top: 92px;
    padding-bottom: 107px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 900px) {
    gap: var(--gap-57xl);
    padding-top: 60px;
    padding-bottom: 70px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-57xl);
  }
`;
const LandingRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 21px;
  letter-spacing: normal;
`;

const MacBookAir1 = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <LandingRoot>
      <ResQHarborSection />
      <FourthLevelFrame>
        <FourthLevelFrameChild alt="" src="/rectangle-59@2x.png" />
        <Image18Icon loading="eager" alt="" src="/image-18@2x.png" />
        <YourSupportTextWrapper>
          <YourSupportText>
            <PoorAndNeedyText>
              <YourSupportCanContainer>
                <Your>{`Your `}</Your>
                <Support>support</Support>
                <Your> can help us a lot</Your>
              </YourSupportCanContainer>
              <ThisHelpIs>
                This help is focussed towards the poor and the needy who live
                among us within our society and endeavours to bring about a
                change in their life.
              </ThisHelpIs>
            </PoorAndNeedyText>
            <ButtonLabel>
              <LoginButton onClick={onLoginButtonClick} />
              <Login>{`Login `}</Login>
            </ButtonLabel>
          </YourSupportText>
        </YourSupportTextWrapper>
      </FourthLevelFrame>
    </LandingRoot>
  );
};

export default MacBookAir1;
