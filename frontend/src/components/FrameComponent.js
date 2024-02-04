import {  useState, } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const FrameChild = styled.div`
  width: 583px;
  height: 908px;
  position: relative;
  border-radius: var(--br-xl);
  background-color: var(--color-slategray);
  display: none;
  max-width: 100%;
`;
const LogIn = styled.h1`
  margin: 0;
  height: 88px;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  white-space: nowrap;
  z-index: 2;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-37xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-23xl);
  }
`;
const LogInWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-6xs);
`;
const EmailTextbox = styled.div`
  align-self: stretch;
  width: 454px;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const UserIcon = styled.img`
  height: 71px;
  width: 50px;
  position: relative;
  object-fit: contain;
  z-index: 7;
`;
const EmailLine = styled.div`
  height: 75px;
  width: 1px;
  position: relative;
  background-color: var(--color-white);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  transform: rotate(180deg);
  z-index: 7;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 1px;
  }
`;
const EmailInput = styled.input`

  border: none;
  outline: none;
  background-color: transparent;
  height: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-10xs);
  box-sizing: border-box;
  font-family: var(--font-urbanist);
  font-weight: 500;
  font-size: var(--font-size-11xl);
  color: var(--color-silver);
`;
const EmailTextboxParent = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs);
  gap: var(--gap-6xs);
  max-width: 100%;
  z-index: 6;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const LockIcon = styled.img`
  height: 71px;
  width: 54px;
  position: relative;
  object-fit: contain;
  z-index: 5;
`;
const PasswordLine = styled.div`
  height: 75px;
  width: 1px;
  position: relative;
  background-color: var(--color-white);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  z-index: 5;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 1px;
  }
`;
const Password = styled.div`
  height: 36px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  z-index: 5;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const InputPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-2xl);
`;
const PasswordLineFrame = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs);
  gap: var(--gap-6xs);
  max-width: 100%;
  z-index: 4;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

const Button = styled.div`

color:white;
cursor: pointer;
border: none;
padding: 0;
align-items: center;
padding-top:20px;
padding-bottom: 20px;
padding-left: 120px;
padding-right: 120px;
  position: relative;
  border-radius: var(--br-41xl);
  background: linear-gradient(90deg, #fffa27, #a9e048 33.39%, #44c16e);
  max-width: 100%;
  z-index: 2;
  
 `;

const InnerRectangle = styled.div`
  align-self: stretch;
  width: 321px;
  position: relative;
  border-radius: var(--br-41xl);
  background: linear-gradient(90deg, #fffa27, #a9e048 33.39%, #44c16e);
  max-width: 100%;
  cursor: pointer;
  z-index: 2;
`;
const Login = styled.b`
  position: relative;
  font-size: var(--font-size-31xl);
  line-height: 101%;
  display: inline-block;
  font-family: var(--font-dosis);
  color: var(--color-white);
  text-align: left;
  z-index: 3;
  margin-left: -222px;
`;
const LoginButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
`;
const BackgroundRectangle = styled.div`
  width: 348px;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-8xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const LockIconFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-54xl);
  max-width: 100%;
  font-size: var(--font-size-11xl);
  color: var(--color-silver);
  font-family: var(--font-urbanist);
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: 72px;
  left: 626px;
  border-radius: var(--br-xl);
  background-color: var(--color-slategray);
  width: 583px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-104xl) var(--padding-59xl) var(--padding-192xl)
    var(--padding-32xl);
  box-sizing: border-box;
  gap: var(--gap-71xl);
  max-width: 100%;
  z-index: 1;
  text-align: left;
  font-size: var(--font-size-51xl);
  color: var(--color-white);
  font-family: var(--font-dosis);
`;

const FrameComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:3000/login/ngo', {
          email: email,
          password: password,
        });

        if (response.data.success) {
            // If the login was successful, redirect to another page
            navigate('/');
        } else {
            // Handle error (e.g. show a message to the user)
        }
    } catch (error) {
        console.error('Login failed', error);
        // Handle error (e.g. show a message to the user)
    }
};

  return (
    <RectangleParentRoot>
      <FrameChild />
      <LogInWrapper>
        <LogIn>Log In</LogIn>
      </LogInWrapper>
      
      <EmailTextboxParent>
        <UserIcon alt="" src="/user@2x.png" />
        <EmailLine />
        <EmailInput placeholder="Email" type="text" onChange={e => setEmail(e.target.value)} />
      </EmailTextboxParent>
      <LockIconFrame>
        <PasswordLineFrame>
          <LockIcon loading="eager" alt="" src="/lock@2x.png" />
          <PasswordLine />
          <InputPassword>
            {/* this is password input */}
            <EmailInput placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)}  />
          </InputPassword>
        </PasswordLineFrame>
        <BackgroundRectangle>
         <Button onClick={handleLogin}>Login</Button>
        </BackgroundRectangle>
      </LockIconFrame>
    </RectangleParentRoot>
  );
};

export default FrameComponent;