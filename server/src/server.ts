import routes from "./routes";
import dotenv from "dotenv";
import express from "express";
import "@database";

dotenv.config();

const app = express();
app.use(express.json());
app.use(routes);
app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 3001, () => {
  console.log("📦 Server running");
});

app.get("/", (req, res) => {
  res.send("API is live");
});
