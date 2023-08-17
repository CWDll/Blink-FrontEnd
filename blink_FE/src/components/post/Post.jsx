//post.jsx

<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 215e3d46867f29da66e2e1632f1b92f60e2515b4
import styled from "styled-components";
import AdrSearch from "./AdrSearch";
import { StyledSearchResult, SearchResultInputs } from "./SearchResult";
import FileUpload from "./FileUpload";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import HorizonLine from "./Line";
<<<<<<< HEAD
import GMap from "./GMap";
=======
import Calendartwo from "./DatePicker";
import axios from "../../assets/api/axios";
>>>>>>> 215e3d46867f29da66e2e1632f1b92f60e2515b4

class Question extends React.Component {
  render() {
    return (
      <h3>
        Lets go for a <BiSearchAlt2 />?
      </h3>
    );
  }
}

const Outer = styled.div`
  height: 1080px;
  width: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px;
  border: 1px solid white;
`;

const CheckDisplay = styled.div`
  width: 1150px;
  margin-left: 120px;
  margin-bottom: 20px;
  display: flex;
`;

const Check = styled.div`
  height: 35px;
  width: 164px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 20px;
`;

const Checkbox = styled.input`
  width: 24px; // Set the width
  height: 24px; // Set the height
`;

const AdrSearchContainer = styled.div`
  position: fixed;
  top: 5720px;
  left: 250px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  border-radius: 10px;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const PostContainer = styled.div`
  width: 1030px;
  height: 806px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 20px;
`;

const TopRow = styled.div`
  display: flex;
  width: 958px;
  justify-content: space-between;
`;

const Search = styled.div`
  height: 56px;
  width: 660px;
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  align-items: center;
  font-size: 27px;
`;

const Lsquare = styled.div`
  margin-bottom: 30px;
`;

const SquareBox = styled.div`
  width: 958px;
  height: 371px;
  border-radius: 10px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SquareBox2 = styled(SquareBox)`
  height: 250px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Select = styled.select`
  width: 151px;
  height: 40px;
  padding: 5px;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 21px;
  text-align: center;
`;

const Option = styled.option`
  background-color: gray; /* Set background color */
  color: white; /* Set text color */
  height: 40px; /* Set height */
`;

const TitleInput = styled.input`
  width: 600px;
  height: 50px;
  font-size: 27px;
  font-weight: bold;
  padding: 0 0 0 10px;
  border: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 220px;
  padding: 10px;
  border: none;
  resize: none;
  font-size: 27px;
`;

const Thumbnail = styled.img`
  max-width: 250px;
  max-height: 150px;
  object-fit: contain;
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const CustomCloudUploadIcon = styled(AiOutlineCloudUpload)`
  font-size: 40px;
  margin-left: 40px;
`;

const UploadText = styled.div`
  margin: -40px; /* Adjust the margin as needed */
`;

const RegisterButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1b2130;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  font-size: 28px;
  font-weight: 500;
  box-shadow: 3px 3px 3px gray;
`;

<<<<<<< HEAD
export default function Post({ selectedLocation }) {
  const [selectedLocationState, setSelectedLocationState] = useState(null);
  // const [selectedLocation, setSelectedLocation] = useState(
  //   initialSelectedLocation
  // );

  useEffect(() => {
    setSelectedLocationState(selectedLocation);
  }, [selectedLocation]);

  const handleLocationUpdate = (location) => {
    setSelectedLocation(location); // 클릭한 위치 정보 업데이트
  };
=======
const Search2 = styled(Search)`
  width: 295px;
  height: 56px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  font-size: 27px;
  cursor: pointer;
`;
>>>>>>> 215e3d46867f29da66e2e1632f1b92f60e2515b4


const FloatingCalendarContainer = styled.div`
  position: fixed;
  top: 50%; /* Adjust the vertical position as needed */
  left: 50%; /* Adjust the horizontal position as needed */
  transform: translate(-50%, -50%);
  z-index: 1000; /* Make sure the calendar appears above other content */
  background-color: white;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

export default function Post() {
  const [postReg, setpostReg] = useState({
    title:"",
  })

  const handlePostClick = async() => {
  if (postReg.title === ""){
    alert("제목 입력해라 이잣기아");
    return;
  }

  try {
    // const postData = {
    //   title: postReg.title,

    // };

    // console.log(postData);

    //백에게 보낼 데이터
    const response = await axios.post("/api/mainposts", {
      title: postReg.title,
    });

    if(response.status === 200 ){
      alert("등록되었습니다.");
    } else {
      alert("등록 실패");
    } 
  } catch (error) {
    console.error("등록 오류:", error);
alert("등록 오류")

};
  }
// // Inside your component function
// const handleRegister = async () => {
//   const data = {
//     // Gather all the data you want to send
//     // For example, title, category, content, attachments, etc.
//   };

//   try {
//     const response = await axios.post("/api/mainposts", {
//     title: apititle,
//     });
//     // Handle the response, e.g., show a success message or navigate to a new page
//   } catch (error) {
//     // Handle errors, e.g., show an error message to the user
//   }
// };

  const [showAdrSearch, setShowAdrSearch] = useState(false);
  const [addressInfo, setAddressInfo] = useState({
    postcode: "",
    address: "",
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleAdrSearch = () => {
    setShowAdrSearch(!showAdrSearch);
    setShowDatePicker(false);
  };

  const handleDatePickerSelect = (date) => {
    setSelectedDate(date); // Update the selected date
    setShowDatePicker(false); // Hide the date picker
  };
  

  const handleComplete = (data) => {
    const updatedAddressInfo = {
      postcode: data.zonecode,
      address: data.roadAddress || data.jibunAddress,
      detailAddress: "",
      extraAddress:
        data.userSelectedType === "R" ? data.bname || data.buildingName : "",
    };

    setAddressInfo(updatedAddressInfo);
    setShowAdrSearch(false);
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (files) => {
    if (files.length > 2) {
      alert("You can only upload up to 2 files.");
      return;
    }

    setUploadedFiles(files);
  };

  const handleRemoveThumbnail = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  const [isReportChecked, setIsReportChecked] = useState(true);
  const [isLookForChecked, setIsLookForChecked] = useState(false);

  const handleReportCheckboxChange = () => {
    setIsReportChecked(!isReportChecked);
    setIsLookForChecked(false);
  };

  const handleLookForCheckboxChange = () => {
    setIsLookForChecked(!isLookForChecked);
    setIsReportChecked(false);
  };
  
  const handleDatePickerClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }
  

  ///////// test 1
  // const renderSelectedLocationInfo = () => {
  //   if (selectedLocation) {
  //     return (
  //       <div>
  //         <p>선택한 위치 정보:</p>
  //         <p>위도: {selectedLocation.lat.toFixed(6)}</p>
  //         <p>경도: {selectedLocation.lng.toFixed(6)}</p>
  //       </div>
  //     );
  //   } else {
  //     return <p>선택한 위치가 없습니다.</p>;
  //   }
  // };

  const renderSelectedLocationInfo = (selectedLocation) => {
    if (selectedLocation) {
      console.log(selectedLocation);
      return (
        <div>
          <p>선택한 위치 정보:</p>
          <p>위도: {selectedLocation.lat.toFixed(6)}</p>
          <p>경도: {selectedLocation.lng.toFixed(6)}</p>
        </div>
      );
    } else {
      return <p>선택한 위치가 없습니다.</p>;
    }
  };
  return (
    <Outer>
      <CheckDisplay>
        <Check onClick={handleReportCheckboxChange}>
          제보해요
          <Checkbox type="checkbox" checked={isReportChecked} />
        </Check>
        <Check onClick={handleLookForCheckboxChange}>
          찾아요
          <Checkbox type="checkbox" checked={isLookForChecked} />
        </Check>
        {/* 지도 추가. 위치는 임의로. */}
        {/* <GMap onUpdateLocation={handleLocationUpdate} /> */}
      </CheckDisplay>
      <PostContainer>
<<<<<<< HEAD
        <TopRow>
          <div>
            {/* {selectedLocation && (
              <div>
                <p>선택한 위치 정보:</p>
                <p>위도: {selectedLocation.lat.toFixed(6)}</p>
                <p>경도: {selectedLocation.lng.toFixed(6)}</p>
              </div>
            )} */}
            {/* {renderSelectedLocationInfo()} */}

            {/* selectedLocation 값을 사용하여 위치 정보를 보여줌 */}
            {renderSelectedLocationInfo(selectedLocation)}
            {selectedLocation && (
              <div>
                <p>선택한 위치 정보:</p>
                <p>위도: {selectedLocation.lat.toFixed(6)}</p>
                <p>경도: {selectedLocation.lng.toFixed(6)}</p>
              </div>
            )}
            <div>시발</div>
          </div>

          <Search
            onClick={toggleAdrSearch}
            selectedAddress={addressInfo.address} // Pass the selected address
          >
            {addressInfo.address
              ? addressInfo.address
              : "지역명, 도로명, 주소를 입력해주세요."}
            <BiSearchAlt2 />
          </Search>

          <Search2 onClick={() => setShowDatePicker(!showDatePicker)}>
            {selectedDate
              ? selectedDate.toLocaleDateString()
              : "촬영 or 요청일자"}
=======
      <TopRow>
      <Search onClick={toggleAdrSearch} selectedAddress={addressInfo.address}>
          {addressInfo.address
            ? addressInfo.address
            : "지역명, 도로명, 주소를 입력해주세요."}
          <BiSearchAlt2 />
        </Search>
        <Search2 onClick={handleDatePickerClick}>
            {selectedDate ? formatDate(selectedDate) : "촬영 or 요청 일자"}
>>>>>>> 215e3d46867f29da66e2e1632f1b92f60e2515b4
            <BiSearchAlt2 />
          </Search2>
        </TopRow>


      {showAdrSearch && (
        <AdrSearchContainer show={showAdrSearch}>
          {/* ... (existing code) */}
        </AdrSearchContainer>
      )}

      {/* Render the floating calendar container when showDatePicker is true */}
      {showDatePicker && (
          <FloatingCalendarContainer>
            <Calendartwo user="your_user_here" onSelectDate={handleDatePickerSelect} />
          </FloatingCalendarContainer>
        )}
        <Lsquare>
          <SquareBox>
            <Display>
              <FormRow>
              <TitleInput
        value={postReg.title}
        onChange={(e) => setpostReg({ ...postReg, title: e.target.value })} // 객체의 title 속성 업데이트
        type="text"
        placeholder="제목을 입력해주세요."
      />
              </FormRow>
              <FormRow>
              <Select>
                  <option value="" disabled selected hidden>
                    카테고리
                  </option>
                  <Option value="Traffic Accident">교통사고</Option>
                  <Option value="Theft">도난, 절도</Option>
                  <Option value="Report Missing">실종 신고</Option>
                  <Option value="Other">기타</Option>
                </Select>
              </FormRow>
            </Display>
            <HorizonLine />
            <FormRow>
              <TextArea rows="10" placeholder="내용을 입력해주세요." />
            </FormRow>
          </SquareBox>
        </Lsquare>

        <SquareBox2>
          {uploadedFiles.length === 0 && (
            <>
              <CustomCloudUploadIcon />
              <UploadText>
              .mov, .mp4 .png, .jpg, .jpeg, .pdf 파일을 업로드해주세요.
                <br />
                <br />
                최대 2장까지 업로드할 수 있습니다.
              </UploadText>
            </>
          )}
          {/* Display the FileUpload component */}
          <FileUpload
            onFileUpload={handleFileUpload}
            maxFiles={2}
            ThumbnailComponent={Thumbnail}
            handleRemoveThumbnail={handleRemoveThumbnail}
            uploadedFiles={uploadedFiles}
          />
          <br />
        </SquareBox2>
      </PostContainer>
      <RegisterButton onClick={handlePostClick}>등록하기</RegisterButton>
    </Outer>
  );
          }