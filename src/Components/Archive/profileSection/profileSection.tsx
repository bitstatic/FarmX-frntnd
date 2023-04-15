import React from "react";
import styled from "styled-components";
import ProfImg from "/profileimg.svg";

const Container = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: start;
  align-items: center;
  // max-height: 90%;
  > img {
    margin-bottom: 4rem;
  }
  h1 {
    font-size: 2rem;
  }
  p {
    // margin : .5rem;
  }
  > .text-container {
    width: 80%;
    font-size: 1.5rem;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 1rem;
  }
`;


interface props {
  userid: number;
  name: string;
  email: string;
  phone: number;
  address: string;
  dob: string;
  pinCode: number;
}

const ProfileSection = ({ userid, name, email, phone, dob, address, pinCode}: props) => {
  return (
    <Container>
      <img src={ProfImg} width={180} />
      <h1> Account Details </h1>
      <div className="text-container">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>User Id : {userid}</p>
        <p>Phone No : {phone}</p>
        <p>Date of Birth : {dob}</p>
        <p>address : {address}</p>
        <p>Pin Code : {pinCode}</p>
      </div>
    </Container>
  );
};

export default ProfileSection;

// Usage:
//   const user = {name : "Dev Jaiswal", email : "jaiswaldev@gmail.com", userid : 102 ,  phone : 9160003354 ,  dob : '22-01-2003'  , pinCode : 473001 ,address: "Jhumri talaiya" };
// <ProfileSection {...user} />