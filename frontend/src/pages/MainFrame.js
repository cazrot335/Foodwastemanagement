import styled from "styled-components";
import FrameComponent from "../components/FrameComponent";

const Image18Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const LoginChild = styled.div`
  position: absolute;
  top: 380px;
  left: 677px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray);
  width: 454px;
  height: 75px;
  display: none;
  z-index: 2;
`;
const Email = styled.div`
  position: absolute;
  top: 398px;
  left: 701px;
  line-height: 101%;
  font-weight: 500;
  display: none;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-13xl);
    line-height: 32px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
    line-height: 24px;
  }
`;
const LoginItem = styled.div`
  position: absolute;
  top: 545px;
  left: 677px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray);
  width: 454px;
  height: 75px;
  display: none;
  z-index: 2;
`;
const Password = styled.div`
  position: absolute;
  top: 563px;
  left: 701px;
  line-height: 101%;
  font-weight: 500;
  display: none;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-13xl);
    line-height: 32px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
    line-height: 24px;
  }
`;
const LoginRoot = styled.div`
  width: 100%;
  height: 1073px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--color-black);
  font-family: var(--font-dosis);
  @media screen and (max-width: 450px) {
    height: auto;
    min-height: 1073;
  }
`;

const MainFrame = () => {
  return (
    <LoginRoot>
      <Image18Icon alt="" src="/image-181@2x.png" />
      <LoginChild />
      <Email>EMAIL</Email>
      <Email>EMAIL</Email>
      <Email>EMAIL</Email>
      <LoginItem />
      <Password>PASSWORD</Password>
      <FrameComponent />
    </LoginRoot>
  );
};

export default MainFrame;
