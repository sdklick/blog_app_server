import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT;


app.get("/", (req, res) => {
  res.send("hello sumanta");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("❌Server failed to start:", err);
  } else {
    console.log(`✅ Server is running on ${PORT}`);
  }
});
