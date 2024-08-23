import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`) //to make our file-name unique
  }
})

const upload = multer({ storage: storage }) //this is a middleware
foodRouter.post("/add", upload.single("image"), addFood) //to send data to server
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)

export default foodRouter;