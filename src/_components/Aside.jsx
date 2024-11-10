import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <>
      <aside>
        <Link to="/" className="logo">
          healthcare
        </Link>
        <nav>
          <ul>
            <li className="active">
              <a href="#">
                <div className="icon">
                  <i className="xi-home"></i>
                </div>
                <span>menu</span>
              </a>
            </li>
            <li>
              <Link to="/">
                <div className="icon">
                  <i className="xi-home"></i>
                </div>
                <span>menu</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className="icon">
                  <i className="xi-home"></i>
                </div>
                <span>menu</span>
              </Link>
            </li>
            <li>
              <Link to="/">
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
          <button className="logout">
            <i className="xi-home"></i>
            log out
          </button>
        </div>
      </aside>
    </>
  );
}
