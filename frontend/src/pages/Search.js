import axios from 'axios';
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Searchbar from '../components/Searchbar';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  flex: 1;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SearchDonor = () => {
  const [donor, setDonor] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:3000/donors");
        setDonor(response.data.donors);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="main">
      <Searchbar />
      <CardContainer>
        {donor &&
          donor.map((donor) => (

            <Card key={donor._id} className="donor-card">
              <p><strong>Shop Name:</strong> {donor.shopname}</p>
              <p><strong>Contact No:</strong> {donor.contactno}</p>
              <p><strong>Email:</strong> {donor.email}</p>
              <p><strong>Address:</strong> {donor.address}</p>
              <p><strong>City:</strong> {donor.city}</p>
              <p><strong>Time:</strong> {donor.time}</p>
            </Card>
          ))}
      </CardContainer>
    </div>
  );
};

export default SearchDonor;


