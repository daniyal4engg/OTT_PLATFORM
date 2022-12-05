import express, { Express, Request, Response } from "express";
const {
  getUser,
  addUser,
  searchText,
} = require("../../controllers/userQueries");

const router = express.Router();
// GET
router.get("/get", async (req: Request, res: Response) => {
  try {
    // console.log(req.query);
    const user = await getUser();
    return res.status(200).send({ message: "all users", data: user });
  } catch (error) {
    return res.status(400).send({ message: "Incorrect Url" });
  }
});
router.post("/post", async (req: Request, res: Response) => {
  try {
    const user = await addUser(req.body);
    return res.status(200).send({ message: "User registered", user: user });
  } catch (error) {}
});
// search

router.get("/search/:key", async (req: Request, res: Response) => {
  try {
    let { key } = req.params;
    const data = await searchText(key);
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(400).send({ message: "Invalid Route" });
  }
});

module.exports = router;
