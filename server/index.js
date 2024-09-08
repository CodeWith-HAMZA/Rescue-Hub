const express = require("express");
const jwt = require("jsonwebtoken");

const { sequelize } = require("./config/db");
const User = require("./models/user");
const Application = require("./models/applications");
const Media = require("./models/medias");
const userRoutes = require("./routes/user");
const contentRoutes = require("./routes/content");

const applicationRoutes = require("./routes/application");
const app = express();
const cors = require("cors");
const port = 4000;
const path = require("path");
const Content = require("./models/content");
const upload = require("./config/multer");
// app.get('/', (req, res) => {
//   return res.send('h')
// })

app.use(cors());

app.use(express.static((__dirname, path.join(__dirname, "public"))));

(async () => {
  await User.hasMany(Application, { foreignKey: "userId", as: "applications" });
  // await Content.sync({ force: true });
  // await User.sync({ force: true });
  // await Application.sync({ force: true });
  // await Media.sync({ force: true });
})();

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/auth/:email", async (req, res) => {
  // const { email } = req.query;
  const { email } = req.params;

  console.log(email, "hey");
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.json({ message: "User not found" });
  }
  const payload = {
    user: {
      id: user.id,
      ...user,
    },
  };

  jwt.sign(
    payload,
    "process.env.JWT_SECRET",
    //   { expiresIn: "1h" }, // You can adjust the expiration time as needed
    (err, token) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
      }
      return res.json({ token, user });
    }
  );
});
app.post("/upload", upload.array("files"), (req, res) => {
  const files = req.files;

  if (!files || files.length === 0) {
    return res.status(400).json({ message: "No files were uploaded." });
  }

  // Upload the files to the server
  const fileUrls = files.map((file) => {
    return `http://localhost:${port}/uploads/${file.filename}`;
  });

  // Respond with the URLs of the uploaded files
  return res.json({ fileUrls });
});

// routes
app.use("/user", userRoutes);
app.use("/applications", applicationRoutes);
app.use("/content", contentRoutes);
app.get("/test", async (req, res) => {
  // get the applications
  const applications = await Application.findAll({
    include: [{ model: Media, as: "medias" }],
  });

  res.json({ applications });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
