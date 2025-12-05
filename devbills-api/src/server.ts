import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = Number(process.env.PORT);

const startServer = async () => {
  try {
    await app
      .listen({ port: PORT })
      .then(() => console.log(`Server is running on port 3000`));
  } catch (err) {
    console.log(err);
  }
};

startServer();
