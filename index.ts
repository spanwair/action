// import { script } from "./sharing-finance";
import { script } from "./sharing-finance.prod";
import { createConnection } from "typeorm";

(async () => {
  createConnection()
    .then(async () => {
      console.log("START");
      await script();
      console.log("FINISH");
      process.exit(1);
    })
    .catch((error) => console.log(error));
})();
