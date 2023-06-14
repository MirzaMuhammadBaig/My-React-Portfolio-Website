import express from "express";
import cors from "cors";
import userroutes from "./src/routes/userroutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(userroutes);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('⚡️[server]: Server is running');
});
        