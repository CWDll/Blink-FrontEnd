import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const AdrSearchContainer = styled.div`
  position: fixed;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%);
  z-index: 1000; /* Higher z-index to ensure it's above other elements */
  background-color: white; /* Set the background color */
  padding: 20px; /* Add padding for spacing */
  border: 2px solid black; /* Add a border */
  border-radius: 10px; /* Rounded corners */
`;

export default function AddressSearch({ onUpdateAddress }) {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');

  const handleComplete = (data) => {
    setPostcode(data.zonecode);
    setAddress(data.roadAddress || data.jibunAddress);
    setDetailAddress('');
    setExtraAddress(data.userSelectedType === 'R' ? data.bname || data.buildingName : '');

    // Call the callback to update the parent component's state
    onUpdateAddress({
      postcode: data.zonecode,
      address: data.roadAddress || data.jibunAddress,
      // ... other fields
    });
  };

  return (
    <AdrSearchContainer>
      <DaumPostcode onComplete={handleComplete} />

      <input type="text" value={postcode} placeholder="postcode" readOnly />
      <input type="text" value={address} placeholder="address" readOnly />
      <input
        type="text"
        value={detailAddress}
        placeholder="detail address"
        onChange={(e) => setDetailAddress(e.target.value)}
      />
      <input type="text" value={extraAddress} placeholder="Notes" readOnly />
    </AdrSearchContainer>
  );
}



