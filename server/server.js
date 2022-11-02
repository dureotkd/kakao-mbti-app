const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const characters = [
  {
    name: "콘",
    content: "https://kakaofriendsmbti.netlify.app/images/ENFJ.png",
    mbti: "ESFJ", // for , for of [구글 에서 검색]
  },
  {
    name: "빠냐",
    content: "https://kakaofriendsmbti.netlify.app/images/ESTJ.png",
    mbti: "ESTJ",
  },
  {
    name: "앙몬드",
    content: "https://kakaofriendsmbti.netlify.app/images/INFP.png",
    mbti: "INFP",
  },
  {
    name: "어피치",
    content: "https://kakaofriendsmbti.netlify.app/images/ENTP.png",
    mbti: "ENTP",
  },
  {
    name: "죠르디",
    content: "https://kakaofriendsmbti.netlify.app/images/ISFJ.png",
    mbti: "ISFJ",
  },
];

app.use(cors());

app.get("/", (req, res) => {
  res.send("안녕하세요~!");
});

app.get("/mbti", (req, res) => {
  let result = "";
  const mbti = req.query;

  /**
   * for in
   * for
   */

  /**
   * 1. 난이도 높은 (코드가 훨씬 깔끔하고 빠름)
   * 2. 난이도 낮은데 (노가다해야됨)
   */
  for (let key in mbti) {
    const 객체 = mbti[key];

    // Destructring
    const [왼쪽mbti, 오른쪽mbti] = Object.keys(객체);
    const [왼쪽값, 오른쪽값] = Object.values(객체);

    if (왼쪽값 >= 오른쪽값) {
      result += 왼쪽mbti;
    } else {
      result += 오른쪽mbti;
    }
  }

  const [캐릭터결과] = characters.filter((item) => {
    return item.mbti === result;
  });

  /**
   * MBTI 값이 동일한 객체를 뽑아주세요 !!
   * (만약 아예없으면 그냥 안나오게... )
   */

  res.send(캐릭터결과);
});

app.listen(port, () => {
  console.log("서버가 실행되었습니다.");
});
