import Express from "express";
import "reflect-metadata";

export const app = Express();

const port = 3000;

app.get("/", async (req, res) => {
  res.send({ mesage: "Hello main get", additiona: 12 });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
