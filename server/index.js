import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postsRoute from "./routes/posts.js";

dotenv.config();

const app = express();

app.use("/posts", postsRoute);

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.MONGODB_URI;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    app.listen(PORT, () =>
      console.log(
        `Server running on port: ${PORT} and connected to the database: ${x.connection.name}`
      )
    );
  })
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
