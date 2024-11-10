import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <main>
        <div className="head-area">
          <h1 className="heading1">
            <span className="user-name">인코</span>님, 안녕하세요!
          </h1>
          <div className="util">
            <button className="btn-style2">add custom widget</button>
          </div>
        </div>
        <div className="main-area">
          <div className="box box1">
            <span className="box-tit">오늘의 주요 건강 지표</span>
            <ul>
              <li>체중</li>
              <li>혈압</li>
              <li>심박수</li>
            </ul>
          </div>
          <div className="box-wrap">
            <div className="box box2">
              <span className="box-tit">최근 체중변화</span>
              <div className="graph">그래프영역</div>
            </div>
            <div className="box box3">
              <span className="box-tit">혈압 추세</span>
              <div className="graph">그래프영역</div>
            </div>
          </div>
          <div className="box box4">
            <span className="box-tit">건강 목표 진행도</span>
            <div className="graph">그래프영역</div>
          </div>
          <div className="box box4">
            <span className="box-tit">최신 건강 정보</span>
            <div>최신 건강 정보</div>
          </div>
        </div>
      </main>
    </>
  );
}
