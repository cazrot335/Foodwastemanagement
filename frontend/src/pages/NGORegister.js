import styled from "styled-components";
import FormContainer from "../components/FormContainer";

const Image20Icon = styled.img`
  height: 921.1px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
`;
const NameRectangleIcon = styled.img`
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
const FormFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
`;
const WeCanSave = styled.p`
  margin: 0;
`;
const WeCanSaveContainer = styled.b`
  width: 505px;
  height: 393px;
  position: relative;
  line-height: 101%;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-33xl);
    line-height: 79px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-13xl);
    line-height: 53px;
  }
`;
const FormFrameParent = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-232xl) var(--padding-8xs) var(--padding-258xl) 0px;
  box-sizing: border-box;
  min-width: 825.5px;
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 1525px) {
    flex: 1;
    padding-right: 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1225px) {
    padding-top: var(--padding-144xl);
    padding-bottom: var(--padding-161xl);
    box-sizing: border-box;
    min-width: 100%;
  }
  @media screen and (max-width: 850px) {
    padding-top: var(--padding-87xl);
    padding-bottom: var(--padding-98xl);
    box-sizing: border-box;
  }
`;
const NGOInfoFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-mini);
  box-sizing: border-box;
  min-width: 612px;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    min-width: 100%;
  }
`;
const NgoRegisterRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-44xl) var(--padding-20xl) var(--padding-39xl)
    var(--padding-50xl);
  box-sizing: border-box;
  gap: var(--gap-25xl);
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-111xl);
  color: var(--color-white);
  font-family: var(--font-dosis);
  @media screen and (max-width: 1525px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1225px) {
    padding-left: var(--padding-15xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-25xl);
  }
`;

const NGORegister = () => {
  return (
    <NgoRegisterRoot>
      <FormFrameParent>
        <FormFrame>
          <Image20Icon alt="" src="/image-20@2x.png" />
          <NameRectangleIcon alt="" src="/rectangle-frame@2x.png" />
        </FormFrame>
        <NGOInfoFrame>
       
       <FormContainer />
     </NGOInfoFrame>
       
      </FormFrameParent>
     
    </NgoRegisterRoot>
  );
};

export default NGORegister;
