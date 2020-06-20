const express = require("express");

const router = express.Router();
const ItemModel = require("../model/Item");

//Router to fetch all items
router.get("/", (req, res) => {
  ItemModel.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

//Router to add an item
router.post("/", (req, res) => {
  const ItemObj = new ItemModel({
    name: req.body.name,
  });

  ItemObj.save()
    .then((item) => res.send(item))
    .catch((err) => res.status(400).send());
});

module.exports = router;
