import * as dotenv from "dotenv";
import express from "express";
import { createConnection } from "typeorm";
import { pagination } from "typeorm-pagination";
// import { script } from "./sharing-finance";
import { script } from "./sharing-finance.prod";
dotenv.config();
const PORT = process.env.PORT || 9000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(pagination);
app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "You are on node-typescript-boilerplate.",
  });
});
createConnection()
  .then(async () => {
    app.listen(PORT, async () => {
      console.log(`CONNECTED TO DB AND SERVER START ON ${PORT}`);
      await script();
    });
  })
  .catch((error) => console.log(error));
