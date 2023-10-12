import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "http://localhost";

const app = express();
app.use(cors({origin: [`${HOST}:3000`]}));
app.use(express.json());

app.get("/getWord", (req, res) => {
  res.json({success: true, word: "going to"});
});

app.post("/check", (req, res) => {
  if (!req.body.text) {
    res.status(400).json({message: "No data"});
  }
  res.json({success: true});
});

app.listen(PORT, () => {
  console.log(`Server has been started on ${HOST}:${PORT}`);
});
