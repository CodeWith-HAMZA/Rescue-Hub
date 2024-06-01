const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Application = require("../models/applications"); // Import the Application model
const Media = require("../models/medias"); // Import the Application model

// POST create application
router.post("/", auth, async (req, res) => {
  try {
    // Extract application data from the request body
    const {
      description,
      status,
      city,
      country,
      contactName,
      contactPhone,
      contactEmail,
    } = req.body;

    // Create the application, getting auth-user id by req.user.id
    const application = await Application.create({
      userId: req.user.id,
      description,
      status,
      city,
      country,
      contactName,
      contactPhone,
      contactEmail,
    });

    // Return the created application
    return res.json(application);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// GET applications for current user
router.get("/", auth, async (req, res) => {
  try {
    // Fetch applications for the authenticated user
    const applications = await Application.findAll({
      where: { userId: req.user.id },
    });

    // Return the applications
   return res.json(applications);
  } catch (err) {
    console.error(err.message);
   return res.status(500).send("Server Error");
  }
});

// POST create media for application
router.post("/:applicationId/media", auth, async (req, res) => {
  const { applicationId } = req.params;
  const { filename, url } = req.body;

  try {
    // Check if the application exists
    const application = await Application.findByPk(applicationId);
    if (!application) {
      return res.status(404).json({ msg: "Application not found" });
    }

    // Create the media file
    const media = await Media.create({
      applicationId,
      filename,
      url,
    });

    // Return the created media file
    res.json(media);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// GET media for application
router.get("/applications/:applicationId/media", auth, async (req, res) => {
  const { applicationId } = req.params;

  try {
    // Fetch media files for the specified application
    const media = await Media.findAll({
      where: { applicationId },
    });

    // Return the media files
    res.json(media);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
