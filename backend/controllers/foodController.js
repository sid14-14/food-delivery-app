import foodModel from "../models/foodModel.js";
import fs from 'fs'


// add food item
const addFood = async (req, res) => {

  let image_filname = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filname
  })
  try {
    await food.save();
    res.json({ success: true, message: "image added successfully" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" })
  }
}

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" })
  }
}

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id); //finding the specific img by id
    fs.unlink(`uploads/${food.image}`, () => { }); //we can delete the img from the folder
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" })
  }
}

export { addFood, listFood, removeFood }