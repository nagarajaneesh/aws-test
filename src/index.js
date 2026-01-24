import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (_req, res) => {
  res.send("in prod branch");
});

app.listen(3000, (err) => {
  if (err) console.log("error starting sevrer");
  else console.log("started server on 3000");
});
