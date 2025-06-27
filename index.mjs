import express from "express";
import "dotenv/config";
import cors from "cors"
import { dbconn } from "./db/dbconn.mjs";
import { apirouter } from "./Routes/apiRoutes.mjs";
const app = express();
const PORT = process.env.PORT;
const mongourl = process.env.MONGO_URI;

dbconn(mongourl);


app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

app.use("/api", apirouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error("❌Server failed to start:", err);
  } else {
    console.log(`✅ Server is running on ${PORT}`);
  }
});
