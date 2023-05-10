import React, { useState } from "react";
import "./Login.css";

const Login = ({ data }) => {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
  });

  const handleChange = (event) => {
    if (event.target.id === "loginID") {
      let id = event.target.value;
      setLoginInfo({ ...loginInfo, id });
      console.log(loginInfo);
    } else {
      let password = event.target.value;
      setLoginInfo({ ...loginInfo, password });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const item = JSON.parse(localStorage.getItem("UserInfo"));
    const { id: i, password: p } = item;
    if (i === loginInfo.id && p === loginInfo.password) {
      data((prev) => !prev);
    } else {
      alert("다시");
    }
  };
  return (
    <div className="wrapper_box">
      <h2>LOG IN</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="login_input"
          placeholder="ID"
          onChange={handleChange}
          id="loginID"
        />
        <input
          placeholder="Password"
          type="Password"
          className="login_input"
          id="loginPwd"
          onChange={handleChange}
        />
        {/* {pwdManager ? (
          ""
        ) : (
          <p className="pwerror">비밀번호는 10자리가 넘을 수 없습니다!</p>
        )} */}
        <p
          className={
            loginInfo.password.length < 10 ? "pw_none_text" : "pw_error"
          }
        >
          비밀번호는 10자리가 넘을 수 없습니다!
        </p>
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
