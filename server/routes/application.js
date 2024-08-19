const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Application = require("../models/applications"); // Import the Application model
const User = require("../models/user"); // Import the Application model
const Media = require("../models/medias"); // Import the Application model
const { Op } = require("sequelize");
const sequelize = require("sequelize");
// POST create application
router.post("/", auth, async (req, res) => {
  try {
    // Extract application data from the request body
    const {
      description,
      status,
      magnitude,
      floodSeverity,
      floodLocation,
      earthquakeDate,
      earthquakeLocation,
      floodDate,
      city,
      country,
      contactName,
      contactPhone,
      contactEmail,

      mediaFiles,
    } = req.body;
    if (req.user?.onBoarded == "-1") {
      return res.status(401).json({ msg: "User Is Suspended" });
    }

    // Create the application, getting auth-user id by req.user.id

    const application = await Application.create({
      userId: req.user.id,
      description,
      magnitude,
      floodSeverity,
      floodLocation,
      earthquakeDate,
      earthquakeLocation,
      floodDate,
      status,
      city,
      country,
      contactName,
      contactPhone,
      contactEmail,
    });

    if (mediaFiles) {
      mediaFiles.forEach(async (mediaItem) => {
        await Media.create({
          applicationId: application?.id,
          filename: "application?.name",
          url: mediaItem,
        });
      });
    }
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
//
router.get("/all", async (req, res) => {
  let whereCondition = {};

  const searchQuery = req.query.search || "";

  if (searchQuery) {
    whereCondition = {
      [Op.or]: [
        { contactName: { [Op.like]: `%${searchQuery}%` } },
        { contactEmail: { [Op.like]: `%${searchQuery}%` } },
      ],
    };
  }

  try {
    // Fetch applications for the authenticated user
    const applications = await Application.findAll({
      where: whereCondition,
      order: [["created_at", "DESC"]],
      // include: [
      //   {
      //     model: User,
      //     attributes: ["id", "name", "email"], // Specify the user attributes you want to include
      //   },
      // ],
    });
    // const postsWithUsers = await sequelize.query(
    //   `SELECT posts.*, users
    //    FROM applications
    //    JOIN users ON applications.userId = users.id`,
    //   {
    //     type: QueryTypes.SELECT,
    //   }
    // );

    // Return the applications
    return res.json(applications);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// change the application status
router.put("/:applicationId", async (req, res) => {
  const { applicationId } = req.params;
  const { status } = req.body;
  const { myStatus } = req.query;

  try {
    // Check if the application exists
    const application = await Application.findByPk(applicationId);
    if (!application) {
      return res.status(404).json({ msg: "Application not found" });
    }

    // Update the application status
    application.status = myStatus;

    await application.save();

    // Return the updated application
    return res.json(application);
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
router.get("/:applicationId/media", auth, async (req, res) => {
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

// router to get application details
router.get("/:applicationId", async (req, res) => {
  const { applicationId } = req.params;

  try {
    // Fetch media files for the specified application
    const application = await Application.findByPk(applicationId, {
      include: [
        {
          model: User,
          attributes: ["id", "username", "email"], // Specify the user attributes you want to include
          as: "user",
        },
        {
          model: Media,
          attributes: ["id", "filename", "url"], // Specify the user attributes you want to include
          as: "mediaFiles",
        },
      ],
    });

    // Return the media files
    return res.json(application);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// router to fetch admin's dashboard data
router.get("/admin/dashboard", async (req, res) => {
  try {
    // "pending", "processing", "eligible", "not_eligible", find the counts
    const pendingCount = await Application.count({
      where: { status: "pending" },
    });
    const processingCount = await Application.count({
      where: { status: "processing" },
    });
    const eligibleCount = await Application.count({
      where: { status: "eligible" },
    });
    const notEligibleCount = await Application.count({
      where: { status: "not_eligible" },
    });
    const allApplicationsCount = await Application.count();

    const allUsersCount = await User.count();

    // calculate percentages of the statuses count of the applications
    const percentage = {
      pending: (pendingCount / allApplicationsCount) * 100,
      processing: (processingCount / allApplicationsCount) * 100,
      eligible: (eligibleCount / allApplicationsCount) * 100,
      not_eligible: (notEligibleCount / allApplicationsCount) * 100,
    };

    // user with most applications
    // const userWithMostApplications = await User.findOne({
    //   attributes: [
    //     "id",
    //     "username",
    //     [
    //       sequelize.fn("COUNT", sequelize.col("applications.id")),

    //       "applicationCount",
    //     ],
    //   ],
    //   include: [
    //     {
    //       as: 'applications',
    //       model: Application,
    //       attributes: [],
    //     },
    //   ],
    //   group: ["user.id"],
    //   order: [
    //     [sequelize.fn("COUNT", sequelize.col("Applications.id")), "DESC"],
    //   ],
    //   limit: 1,
    // });

    return res.json({
      percentage,
      allUsersCount,
      pendingCount,
      processingCount,
      eligibleCount,
      notEligibleCount,
      allApplicationsCount,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
