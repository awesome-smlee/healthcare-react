import React, { useState } from "react";
import API from "_utils/API";
import formatExpiryTime from "_utils/formatExpiryTime";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("http://localhost:8082/auth/login", {
        id: id,
        password: password,
      });

      const { token, expiresIn } = response.data;

      // 로컬스토리지에 토큰 저장
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiry", formatExpiryTime(expiresIn));

      // 로그인 성공 후 홈 화면으로
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="content">
        <div className="login-area">
          <form onSubmit={handleLogin}>
            <h2>로그인</h2>
            <div>
              <label htmlFor="id">ID</label>
              <input
                type="text"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button>로그인</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
