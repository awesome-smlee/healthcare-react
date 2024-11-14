import API from "_utils/API";
import { Link } from "react-router-dom";

function Aside() {
  const handleLogout = async (e) => {
    try {
      const response = await API.post(
        "http://localhost:8082/auth/logout",
        {},
        { withCredentials: true }
      );

      // 로컬스토리지에서 토큰 삭제
      localStorage.setItem("token");
      localStorage.setItem("tokenExpiry");

      // 홈 화면으로 리다이렉션
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <aside>
        <Link to="/" className="logo">
          healthcare
        </Link>
        <nav>
          <ul>
            <li className="active">
              <Link to="#">
                <div className="icon">
                  <i className="xi-home"></i>
                </div>
                <span>menu</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="icon">
                  <i className="xi-home"></i>
                </div>
                <span>menu</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="icon">
                  <i className="xi-home"></i>
                </div>
                <span>menu</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="icon">
                  <i className="xi-home"></i>
                </div>
                <span>menu</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="aside-bottom">
          <div>날씨 넣을까???</div>
          <button type="button" className="logout">
            <i className="xi-home"></i> LOGOUT
          </button>
        </div>
      </aside>
    </>
  );
}

export default Aside;
