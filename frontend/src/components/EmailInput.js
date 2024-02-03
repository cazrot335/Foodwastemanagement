import styled from "styled-components";

const PasswordInputChild = styled.div`
  height: 75px;
  width: 383px;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const NgoName = styled.div`
  height: 36px;
  width: 194px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
  width: ${(p) => p.propWidth};
`;
const PasswordInput = styled.div`
  width: 383px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-5xl) var(--padding-2xl);
  max-width: 100%;
  white-space: nowrap;
  padding: ${(p) => p.propPadding};
`;
const City = styled.div`
  position: relative;
  font-weight: 500;
  z-index: 1;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
  height: ${(p) => p.propHeight};
`;
const CityPasswordGroup = styled.div`
  width: 383px;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-9xl) var(--padding-2xl);
  max-width: 100%;
  padding: ${(p) => p.propPadding1};
`;
const EmailInputRoot = styled.div`
  width: 863px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 91px;
  gap: var(--gap-xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-11xl);
  color: var(--color-silver);
  font-family: var(--font-urbanist);
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
`;

const EmailInput = ({
  nGOName,
  city,
  propPadding,
  propWidth,
  propPadding1,
  propHeight,
}) => {
  return (
    <EmailInputRoot>
      <PasswordInput propPadding={propPadding}>
        <PasswordInputChild />
        <NgoName propWidth={propWidth}>{nGOName}</NgoName>
      </PasswordInput>
      <CityPasswordGroup propPadding1={propPadding1}>
        <PasswordInputChild />
        <City propHeight={propHeight}>{city}</City>
      </CityPasswordGroup>
    </EmailInputRoot>
  );
};

export default EmailInput;
