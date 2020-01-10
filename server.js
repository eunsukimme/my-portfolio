const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4000;

app.use("/", express.static("client/build"));

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
