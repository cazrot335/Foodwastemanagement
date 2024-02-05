import axios from 'axios';
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import HeadingHero from '../components/HeadingHero';

const Container = styled.div`
  background-color: #9CB371;
  min-height: 100vh;
  width: 100%;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  flex: 1;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .donor-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    flex: 1;
    background-color: rgba(255, 255, 255, 0.8); // Updated with transparency value

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);

    transition: border-color 0.3s, transform 0.3s; // Added transition for transform property

    &:hover {
      border-color: #ffcc00;
      transform: scale(1.05); // Slightly magnify the card on hover
    }

    &:active {
      animation: clickAnimation 0.3s;
    }
  }

  @keyframes clickAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SearchInput = ({ value, onChange }) => {
  return (
      <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
          style={{ padding: '10px', border: 'none', outline: 'none', borderRadius: '20px 0 0 20px', width: '100%' }}
      />
  );
};

const SearchButton = ({ onClick }) => {
  return (
      <button
          onClick={onClick}
          style={{ padding: '10px', border: 'none', outline: 'none', borderRadius: '0 20px 20px 0', backgroundColor: 'gray', color: 'white' }}
      >
          Search
      </button>
  );
};

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
  };

  const handleButtonClick = () => {
      onSearch(searchTerm);
  };

  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', borderRadius: '20px', overflow: 'hidden', border: '1px solid #ccc', width: '400px' }}>
              <SearchInput value={searchTerm} onChange={handleSearchChange} />
              <SearchButton onClick={handleButtonClick} />
          </div>
      </div>
  );
};


const SearchDonor = () => {
  const [donor, setDonor] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/donors");
        setDonor(response.data.donors);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const arrangeData = (data) => {
    const arrangedData = [];
    for (let i = 0; i < data.length; i += 3) {
      arrangedData.push(data.slice(i, i + 3));
    }
    return arrangedData;
  };

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:3000/donors?time=${searchInput}`);
      setDonor(response.data.donors);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container>
      <div className="main" style={{ backgroundColor: "#9CB371", color: "fff", }}>
        <HeadingHero />
        <Searchbar>
          <SearchInput
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </Searchbar>
        <CardContainer>
          {arrangeData(donor).map((row, index) => (
            <Row key={index}>
              {row.map((donor) => (
                <Card key={donor._id} className="donor-card">
                  <p><strong>Shop Name:</strong> {donor.shopname}</p>
                  <p><strong>Contact No:</strong> {donor.contactno}</p>
                  <p><strong>Email:</strong> {donor.email}</p>
                  <p><strong>Address:</strong> {donor.address}</p>
                  <p><strong>City:</strong> {donor.city}</p>
                  <p><strong>Time:</strong> {donor.time}</p>
                </Card>
              ))}
            </Row>
          ))}
        </CardContainer>
      </div>
    </Container>
  );
};

export default SearchDonor;
