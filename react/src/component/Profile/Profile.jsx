import React from "react";
import myimg from "../../assets/IMG_7104.JPG";
import "./Profile.css";

export default function Profile(props) {
  const { name, age, department, residence, email, hobby } = props.data;
  return (
    <div className="profile">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-about">
        <div className="profileimg-box">
          <img className="profile-img" src={myimg} alt="김동영 사진" />
        </div>
        <div className="profile-desc">
          <h2>About me</h2>
          <dl className="profile-box">
            <div className="profile-text">
              <dt> 이름</dt>
              <dd>{name}</dd>
            </div>
            <div className="profile-text">
              <dt> 나이</dt>
              <dd>{age}</dd>
            </div>
            <div className="profile-text">
              <dt> 학교</dt>
              <dd>{department}</dd>
            </div>
            <div className="profile-text">
              <dt> 거주지</dt>
              <dd>{residence}</dd>
            </div>
            <div className="profile-text">
              <dt> email</dt>
              <dd>{email}</dd>
            </div>
            <div className="profile-text">
              <dt> 취미</dt>
              <dd>{hobby}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
