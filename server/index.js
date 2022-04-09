import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://user_123:dmSKsSlhr6NexKaE@cluster0.zoiqe.mongodb.net/myFirstDatabase";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));
