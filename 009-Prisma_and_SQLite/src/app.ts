import express, { Express } from "express";
import router from "./routes/app.route";

const app: Express = express();
const morgan = require("morgan");
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("combined"));

router(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
