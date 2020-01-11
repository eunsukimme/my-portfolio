const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4000;

app.use("/", express.static("client/build"));

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// heroku dyno를 5분 주기로 계속 깨우는 Interval 설정
setInterval(function() {
  http.get("https://eunsu-portfolio.herokuapp.com");
}, 1000 * 60 * 5);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
