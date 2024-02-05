import styled from "styled-components";

const ShopNameFrameChild = styled.div`
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
const ShopName = styled.input`
  width: 194px;
  border: none;
  outline: none;
  font-weight: 500;
  font-family: var(--font-urbanist);
  font-size: var(--font-size-11xl);
  background-color: transparent;
  height: 36px;
  position: relative;
  color: var(--color-silver);
  text-align: left;
  display: inline-block;
  z-index: 1;
  @media screen and (max-width: 900px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
  width: ${(p) => p.propWidth};
`;
const ShopNameFrame = styled.div`
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
  padding: ${(p) => p.propPadding};
`;
const City = styled.div`
  position: relative;
  font-weight: 500;
  z-index: 1;
  @media screen and (max-width: 900px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const ShopNameFrame1 = styled.div`
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
const PasswordFrameRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-11xl);
  color: var(--color-silver);
  font-family: var(--font-urbanist);
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const PasswordFrame = ({
  firstNamePlaceholder,
  lastName,
  propPadding,
  propWidth,
  propPadding1,
}) => {
  return (
    <PasswordFrameRoot>
      <ShopNameFrame propPadding={propPadding}>
        <ShopNameFrameChild />
        <ShopName
          placeholder={firstNamePlaceholder}
          type="text"
          propWidth={propWidth}
        />
      </ShopNameFrame>
      <ShopNameFrame1 propPadding1={propPadding1}>
        <ShopNameFrameChild />
        <City>{lastName}</City>
      </ShopNameFrame1>
    </PasswordFrameRoot>
  );
};

export default PasswordFrame;
