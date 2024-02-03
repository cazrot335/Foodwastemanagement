import styled from "styled-components";
import PasswordFrame from "../components/PasswordFrame";

const Image20Icon = styled.img`
  height: 921.1px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
`;
const RectangleFrameIcon = styled.img`
  height: 632.1px;
  width: 571.3px;
  position: absolute;
  margin: 0 !important;
  right: 284.5px;
  bottom: 394.4px;
  border-radius: var(--br-7xl);
  object-fit: cover;
  z-index: 1;
`;
const FirstLastNameFrame = styled.div`
  width: 826px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 106%;
  flex-shrink: 0;
`;
const WeCanSave = styled.p`
  margin: 0;
`;
const WeCanSaveContainer = styled.h1`
  margin: 0;
  width: 505px;
  height: 393px;
  position: relative;
  font-size: inherit;
  line-height: 101%;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 900px) {
    font-size: var(--font-size-33xl);
    line-height: 79px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-13xl);
    line-height: 53px;
  }
`;
const FirstLastNameFrameParent = styled.div`
  width: 1147px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-232xl) 25px var(--padding-258xl) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1325px) {
    padding-top: var(--padding-144xl);
    padding-bottom: var(--padding-161xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 900px) {
    padding-top: var(--padding-87xl);
    padding-bottom: var(--padding-98xl);
    box-sizing: border-box;
  }
`;
const InputFrame = styled.div`
  width: 1147px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 31px 0px 0px;
  box-sizing: border-box;
  min-height: 1873px;
  max-width: calc(100% - 986px);
  flex-shrink: 0;
  @media screen and (max-width: 1725px) {
    display: none;
    max-width: 100%;
  }
`;
const PleaseFillThe = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 101%;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 900px) {
    font-size: var(--font-size-29xl);
    line-height: 48px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
    line-height: 36px;
  }
`;
const AlignRightIcon = styled.img`
  height: 50px;
  width: 58px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const FillDetailsLabel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const AddressTextChild = styled.div`
  height: 198px;
  width: 863px;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const Address = styled.div`
  height: 36px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  z-index: 1;
  @media screen and (max-width: 900px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const AddressText = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-5xl) 157px;
  max-width: 100%;
`;
const DonationFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-74xl);
  min-height: 402px;
  max-width: 100%;
  @media screen and (max-width: 900px) {
    gap: var(--gap-74xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-74xl);
  }
`;
const DetailsFrameChild = styled.div`
  height: 76px;
  width: 486px;
  position: relative;
  border-radius: var(--br-41xl);
  background: linear-gradient(90deg, #fffa27, #a9e048 33.39%, #44c16e);
  display: none;
  max-width: 100%;
`;
const DonateNow = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 101%;
  font-weight: 700;
  font-family: inherit;
  z-index: 1;
`;
const DetailsFrame = styled.div`
  width: 486px;
  border-radius: var(--br-41xl);
  background: linear-gradient(90deg, #fffa27, #a9e048 33.39%, #44c16e);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px var(--padding-mini);
  box-sizing: border-box;
  max-width: 100%;
  white-space: nowrap;
`;
const DonateFrame = styled.div`
  width: 583px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  max-width: 100%;
  font-size: var(--font-size-41xl);
  color: var(--color-white);
  font-family: var(--font-dosis);
`;
const EmailFrame = styled.div`
  width: 863px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-74xl);
  max-width: 100%;
  font-size: var(--font-size-11xl);
  color: var(--color-silver);
  font-family: var(--font-urbanist);
  @media screen and (max-width: 900px) {
    gap: var(--gap-74xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-74xl);
  }
`;
const DetailsFrame1 = styled.div`
  width: 921px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-97xl);
  max-width: calc(100% - 1212px);
  flex-shrink: 0;
  font-size: var(--font-size-41xl);
  color: var(--color-black);
  @media screen and (max-width: 1725px) {
    display: none;
    max-width: 100%;
  }
  @media screen and (max-width: 1325px) {
    gap: var(--gap-97xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-97xl);
  }
`;
const DonorRegisterRoot = styled.div`
  width: 100%;
  height: 1073px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-44xl) var(--padding-20xl) var(--padding-39xl)
    var(--padding-50xl);
  box-sizing: border-box;
  gap: var(--gap-46xl);
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-111xl);
  color: var(--color-white);
  font-family: var(--font-dosis);
  @media screen and (max-width: 1325px) {
    padding-left: var(--padding-15xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 900px) {
    height: auto;
    gap: var(--gap-46xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-46xl);
  }
`;

const MainFrame1 = () => {
  return (
    <DonorRegisterRoot>
      <InputFrame>
        <FirstLastNameFrameParent>
          <FirstLastNameFrame>
            <Image20Icon loading="eager" alt="" src="/image-20@2x.png" />
            <RectangleFrameIcon alt="" src="/rectangle-frame@2x.png" />
          </FirstLastNameFrame>
          <WeCanSaveContainer>
            <WeCanSave>{`We Can  Save The `}</WeCanSave>
            <WeCanSave>Future</WeCanSave>
          </WeCanSaveContainer>
        </FirstLastNameFrameParent>
      </InputFrame>
      <DetailsFrame1>
        <FillDetailsLabel>
          <PleaseFillThe>Please fill the details</PleaseFillThe>
          <AlignRightIcon loading="eager" alt="" src="/alignright.svg" />
        </FillDetailsLabel>
        <EmailFrame>
          <PasswordFrame firstNamePlaceholder="Shop Name" lastName="City" />
          <DonationFrame>
            <PasswordFrame
              firstNamePlaceholder="Email"
              lastName="Contact No"
              propPadding="var(--padding-3xl) var(--padding-5xl) var(--padding-mid)"
              propWidth="68px"
              propPadding1="var(--padding-3xl) var(--padding-9xl) var(--padding-mid)"
            />
            <AddressText>
              <AddressTextChild />
              <Address>Address</Address>
            </AddressText>
          </DonationFrame>
          <DonateFrame>
            <DetailsFrame>
              <DetailsFrameChild />
              <DonateNow>Donate Now</DonateNow>
            </DetailsFrame>
          </DonateFrame>
        </EmailFrame>
      </DetailsFrame1>
    </DonorRegisterRoot>
  );
};

export default MainFrame1;
