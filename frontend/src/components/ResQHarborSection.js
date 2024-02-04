import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MaskGroupIcon = styled.img`
  height: 121px;
  width: 91px;
  position: relative;
  object-fit: contain;
`;
const Resqharbor = styled.h2`
  margin: 0;
  height: 69px;
  position: relative;
  font-size: inherit;
  line-height: 101%;
  font-weight: 400;
  font-family: inherit;
  background: linear-gradient(180deg, #00ff6d, rgba(0, 255, 109, 0.47));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  white-space: nowrap;
`;
const ContainerFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
`;
const AboutUs = styled.b`
  height: 48px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
`;
const AboutUsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xl) 0px 0px;
`;
const WantToDonate = styled.b`
  height: 58px;
  flex: 1;
  position: relative;
  display: inline-block;
  font-family: var(--font-istok-web);
  white-space: nowrap;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const NeedDonations = styled.b`
  height: 48px;
  flex: 1;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
`;
const ThirdLevelFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  @media screen and (max-width: 1650px) {
    display: none;
  }
`;
const ParentFrame = styled.div`
  width: 979px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-21xl);
  font-family: var(--font-inter);
  @media screen and (max-width: 1650px) {
    width: 0px;
  }
`;
const ContainerFrameParent = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-60xl);
  color: var(--color-black);
  font-family: var(--font-germania-one);
`;
const LandingInnerRoot = styled.div`
  width: 1794px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-base);
  box-sizing: border-box;
  max-width: 100%;
`;

const ResQHarborSection = () => {
  const navigate = useNavigate();

  const onAboutUsClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onWantToDonateClick = useCallback(() => {
    navigate("/donor-register");
  }, [navigate]);

  const onNeedDonationsTextClick = useCallback(() => {
    // Please sync "Frame 81" to the project
  }, []);

  return (
    <LandingInnerRoot>
      <ContainerFrameParent>
        <ContainerFrame>
          <MaskGroupIcon loading="eager" alt="" src="/mask-group@2x.png" />
          <Resqharbor>ResQHarbor</Resqharbor>
        </ContainerFrame>
        <ParentFrame>
          <ThirdLevelFrame>
            <AboutUsText>
            <AboutUs onClick={onAboutUsClick}>About us</AboutUs>
            </AboutUsText>
            <WantToDonate
              onClick={onWantToDonateClick}
            >{`Want to Donate `}</WantToDonate>
            <NeedDonations onClick={onNeedDonationsTextClick}>
              Need Donations
            </NeedDonations>
          </ThirdLevelFrame>
        </ParentFrame>
      </ContainerFrameParent>
    </LandingInnerRoot>
  );
};

export default ResQHarborSection;
