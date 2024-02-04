import {  useState, } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const PleaseFillThe = styled.div`
  position: relative;
  line-height: 101%;
  font-weight: 600;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 850px) {
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
const PleaseFillText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;
const FillDetailsFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-2xl);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-41xl);
  color: var(--color-black);
  font-family: var(--font-dosis);
`;
const TextFrameChild = styled.div`
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
const AddressInput = styled.div`
  align-self: stretch;
  width: 147px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const TextFrame = styled.div`
  height: 75px;
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
`;
const DonationCalltoAction = styled.div`
  height: 75px;
  width: 383px;
  position: relative;
  border-radius: var(--br-3xs);
  background-color: var(--color-gray);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-silver);
  box-sizing: border-box;
  max-width: 100%;
`;
const DonateNowFrame = styled.div`
  width: 863px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 97px;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
`;
const CityFrameChild = styled.div`
  height: 178px;
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
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const CityFrame = styled.div`
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
  padding: var(--padding-smi) var(--padding-5xl) var(--padding-110xl);
  max-width: 100%;
`;
const DonateFrameChild = styled.div`
  height: 76px;
  width: 486px;
  position: relative;
  border-radius: var(--br-41xl);
  background: linear-gradient(90deg, #fffa27, #a9e048 33.39%, #44c16e);
  display: none;
  max-width: 100%;
`;
const DonateNow = styled.b`
  position: relative;
  line-height: 101%;
  z-index: 1;
`;
const DonateFrame = styled.div`
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
const PasswordFrame = styled.div`
  width: 724px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-41xl);
  color: var(--color-white);
  font-family: var(--font-dosis);
`;
const AddressFrame = styled.div`
  width: 863px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-16xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-16xl);
  }
`;
const Button =styled.div`
cursor: pointer;`;

const CityFrameRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-58xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-11xl);
  color: var(--color-silver);
  font-family: var(--font-urbanist);
  @media screen and (max-width: 1225px) {
    gap: var(--gap-58xl);
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-58xl);
  }
`;

const FormContainer = () => {
  const navigate = useNavigate();
  const [ngoName,setNgoName] = useState('');
  const [city,setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact,setContact]= useState('');
  const [id,setId]= useState('');
  const[address,setAddress] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/new/ngo', {
        Ngoname: ngoName,
        city: city,
        email: email,
        password: password,
        address: address,
        Authid: id,
        contactno: contact,
      });

      if (response.data.success) {
        // If the login was successful, redirect to another page or show a success message
        console.log('New user created:', response.data.newUser);
        navigate('/login');
      } else {
        // Handle error (e.g., show a message to the user)
        console.error('Error creating user:', response.data.message);
      }
    } catch (error) {
      console.error('API request failed', error);
      // Handle error (e.g., show a message to the user)
    }
  };



  return (
    <CityFrameRoot>
      <FillDetailsFrame>
        <PleaseFillText>
          <PleaseFillThe>Please fill the details</PleaseFillThe>
          <AlignRightIcon alt="" src="/alignright.svg" />
        </PleaseFillText>
      </FillDetailsFrame>

      {/* First additional container with two inputs */}
      <div >
        <input 
       
        style={{
              
                border:"1px solid #c1b9b9",
                borderRadius: "10px",
                outline: "none",
                fontWeight: "500",
                fontFamily: "Urbanist",
                fontSize: "30px",
                backgroundColor:"rgba(255, 255, 255, 0.5)" ,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                height: "60px",
                position: "relative",
                color: "#c1b9b9",
                textAlign: "left",
                display: "inline-block",
                marginRight: '15px',
             
                zIndex: "1",}}  type="text" placeholder="NGO Name" onChange={e => setNgoName(e.target.value)} />
        <input
        style={{
          border:"1px solid #c1b9b9",
          borderRadius: "10px",
          outline: "none",
          fontWeight: "500",
          fontFamily: "Urbanist",
          fontSize: "30px",
          backgroundColor:"rgba(255, 255, 255, 0.5)" ,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          height: "60px",
          position: "relative",
          color: "#c1b9b9",
          textAlign: "left",
          display: "inline-block",
         }}
        type="text" placeholder="City" onChange={e => setCity(e.target.value)} />
      </div>

      {/* Second additional container with two inputs */}
      <div >
      <input
  style={{
    border: "1px solid #c1b9b9",
    borderRadius: "10px",
    outline: "none",
    fontWeight: "500",
    fontFamily: "Urbanist",
    fontSize: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    height: "60px",
    position: "relative",
    color: "#c1b9b9",
    textAlign: "left",
    display: "inline-block",
    marginRight: '15px', // Corrected the syntax here
  }}
  type="text"
  placeholder="Email" onChange={e => setEmail(e.target.value)}
/>

        <input  style={{
              
              border:"1px solid #c1b9b9",
              borderRadius: "10px",
              outline: "none",
              fontWeight: "500",
              fontFamily: "Urbanist",
              fontSize: "30px",
              backgroundColor:"rgba(255, 255, 255, 0.5)" ,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              height: "60px",
              position: "relative",
              color: "#c1b9b9",
              textAlign: "left",
              display: "inline-block",
              marginRight:'10 px' ,}} type="text" placeholder="Password"  onChange={e => setPassword(e.target.value)} />
      </div>

      {/* Third additional container with two inputs */}
      <div>
        <input  style={{
              
              border:"1px solid #c1b9b9",
              borderRadius: "10px",
              outline: "none",
              fontWeight: "500",
              fontFamily: "Urbanist",
              fontSize: "30px",
              backgroundColor:"rgba(255, 255, 255, 0.5)" ,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              height: "60px",
              position: "relative",
              color: "#c1b9b9",
              textAlign: "left",
              display: "inline-block",
              marginRight: '15px' ,}} type="text" placeholder="Contact.NO"onChange={e => setContact(e.target.value)} />
        <input  style={{
              
              border:"1px solid #c1b9b9",
              borderRadius: "10px",
              outline: "none", 
              fontWeight: "500",
              fontFamily: "Urbanist",
              fontSize: "30px",
              backgroundColor:"rgba(255, 255, 255, 0.5)" ,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              height: "60px",
              position: "relative",
              color: "#c1b9b9",
              textAlign: "left",
              display: "inline-block",
              marginRight:'10 px' ,}} type="text" placeholder="Auth_id"  onChange={e => setId(e.target.value)} />
      </div>
      <div>

        
      </div>
      <div>
      <textarea
          style={{
            border: "1px solid #c1b9b9",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            height: "178px",
            width: "auto",
            outline: "none",
            alignSelf: "stretch",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "13px 24px",
            fontFamily: "Urbanist",
            fontWeight: "500",
            fontSize: "30px",
            color: "#c1b9b9",
          }}

          placeholder="Address"
          onChange={e => setAddress(e.target.value)}
          rows={9}
          cols={43}
        />

<DonateNowFrame />
      <AddressFrame>
        <PasswordFrame>
          <DonateFrame>
            <Button onClick={handleLogin}>Proceed</Button>
          </DonateFrame>
        </PasswordFrame>
      </AddressFrame>

      </div>

     
    </CityFrameRoot>
  );
};

export default FormContainer;
