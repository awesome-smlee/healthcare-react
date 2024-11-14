import React, { useState } from "react";
import axios from "axios";
import API from "_utils/API";

const SignupForm = () => {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("http://localhost:8082/signup", user);
      console.log("회원가입 성공:", response.data);
      alert("회원가입 성공!");
    } catch (err) {
      console.error("회원가입 오류:", err);
      setError("회원가입에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="login-area">
      <h2>회원가입</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디</label>
          <input
            type="text"
            name="id"
            value={user.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignupForm;
