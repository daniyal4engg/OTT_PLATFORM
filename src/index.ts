import express, { Express, Request, Response, Application } from "express";
const userRoute = require("../src/config/routes/userRoute");
const app: Application = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());
app.use("/user", userRoute);
// app.get("/", (req: Request, res: Response) => {
//   res.send("hello NODE");
// });

app.listen(PORT, (): void => {
  console.log(`server Running on PORT ${PORT}`);
});
