"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute = require("../src/config/routes/userRoute");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8001;
app.use(express_1.default.json());
app.use("/user", userRoute);
// app.get("/", (req: Request, res: Response) => {
//   res.send("hello NODE");
// });
app.listen(PORT, () => {
    console.log(`server Running on PORT ${PORT}`);
});
