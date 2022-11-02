const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("안녕하세요~!");
});

app.get("/mbti", (req, res) => {
  const mbti = req.query;

  let result = "";

  for (let key in mbti) {
    const 객체 = mbti[key];

    const [one, two] = Object.keys(객체);
    const [oneVal, twoVal] = Object.values(객체);

    if (oneVal >= twoVal) {
      result += one;
    } else {
      result += two;
    }

    // if (value["I"] > value["E"]) {
    //   result += "I";
    // } else {
    //   result += "E";
    // }
  }

  console.log(result);

  // console.log(mbti.for);
  // mbti.forEach((item) => {
  //   console.log(item);
  // });

  // console.log(req.query);

  // ESFJ

  res.send("여기는 MBTI 결과값을 리턴해야합니다.");
});

app.listen(port, () => {
  console.log("서버가 실행되었습니다.");
});
