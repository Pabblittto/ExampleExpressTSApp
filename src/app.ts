import { authRouter } from "./routes/auth/index";
import Express, { urlencoded, json } from "express";
import "reflect-metadata";

export const app = Express();

app.use(urlencoded());
app.use(json());

app.use("/auth", authRouter);

const port = 3000;

app.get("/", async (req, res) => {
  res.send({ mesage: "Hello main get", additiona: 12 });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
