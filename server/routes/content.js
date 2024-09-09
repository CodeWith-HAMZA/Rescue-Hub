// routes/keyValue.js
const express = require("express");
const router = express.Router();
const Content = require("../models/content"); // Adjust the path to your model

// Update or create key-value pairs
router.post("/update-or-create", async (req, res) => {
  const keyValuePairs = req.body; // Assuming an array of key-value objects is sent in the body

  if (!Array.isArray(keyValuePairs)) {
    return res
      .status(400)
      .json({ error: "Input data should be an array of key-value pairs." });
  }

  try {
    const existingContent = await Content.findOne({
      where: { key: keyValuePairs.at(0).key },
    });

    if (existingContent) {
      existingContent.value = keyValuePairs.at(0).value;
      await existingContent.save();
      return res.status(200).json({ message: "Content updated successfully." });
    }
    const content = await Content.create({
      key: keyValuePairs.at(0).key,
      value: keyValuePairs.at(0).value,
      page: "test",
      description: "test",
    });
    // Use Sequelize's upsert method to update existing records or create new ones
    // const results = await Promise.all(
    //   keyValuePairs.map(async (pair) => {
    //     const [record, created] = await Content.upsert({
    //       key: pair.key,
    //       value: pair.value,
    //       page: pair.page || "test",
    //       description: pair.description || "test ", // Optional field
    //     });
    //     return { record, created };
    //   })
    // );

    return res.status(200).json({
      message: "Key-value pairs have been successfully processed.",
      content,
    });
  } catch (error) {
    console.error("Error processing key-value pairs:", error.message);
    res.status(500).json({ error: "Server Error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const contents = await Content.findAll();

    const results = contents.reduce((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {});

    console.log(contents);
    return res.json(results);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
