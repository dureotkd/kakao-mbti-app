import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, useNavigate } from "react-router-dom";

function Main() {
  const navigation = useNavigate();

  return (
    <div className="main-app">
      <img
        src="https://kakaofriendsmbti.netlify.app/static/media/00.88f71908.png"
        alt="메인이미지"
      />
      <button
        className="btn"
        type="button"
        onClick={() => {
          navigation("/on1");
        }}
      >
        시작하기
      </button>
    </div>
  );
}

function On1() {
  return (
    <div className="main-app">
      <div className="progress-bar">
        <div className="percent"></div>
      </div>
      <div className="image-box">
        <img
          src="https://kakaofriendsmbti.netlify.app/images/01-01.png"
          alt="온보딩이미지"
        />
      </div>
      <button className="btn">당연하지 어디서 할지 고민중이야!</button>
      <button className="btn">그냥 맛있는거 먹으로 갈까 생각 중이야!</button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/on1" element={<On1 />} />
    </Routes>
  );
}

export default App;
