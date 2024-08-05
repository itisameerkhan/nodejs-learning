import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/mongoose.js";
import { dataUri, multerUploads } from "./config/multer.js";
import { cloudinaryConfig, uploader } from "./config/cloudinary.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("SERVER LISTENING TO PORT: ", process.env.PORT);
});

connectDB();

app.use("*", cloudinaryConfig);

app.post("/api/upload", multerUploads, async (req, res) => {
  try {
    if (req.file) {
      const file = dataUri(req).content;
      const response = await uploader.upload(file);
      res.json({
        success: true,
        message: "Image upload successfull",
        data: response.url,
      });
    }
  } catch (error) {
    console.log(error);
  }
});
