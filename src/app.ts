import { DatabaseConnection } from "./data/connection";
import { groupRouter } from "./routes/groups/index";
import { restaurantRouter } from "./routes/restaurants/index";
import { authRouter } from "./routes/auth/index";
import Express, { urlencoded, json } from "express";
import "reflect-metadata";

export const app = Express();

app.use(urlencoded());
app.use(json());

app.use("/auth", authRouter);
app.use("/restaurant", restaurantRouter);
app.use("/group", groupRouter);

const port = 3000;

app.get("/", async (req, res) => {
  res.send({ mesage: "Hello main get", additiona: 12 });
});

DatabaseConnection.getConnection(); //Creates basic connection with database

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
