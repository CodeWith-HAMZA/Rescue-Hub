const express = require("express");
const { sequelize } = require("./config/db");
const User = require("./models/user");
const Application = require("./models/applications");
const Media = require("./models/medias");
const userRoutes = require("./routes/user");

const applicationRoutes = require("./routes/application");
const app = express();
const cors = require("cors");
const port = 4000;
const path = require("path");
// app.get('/', (req, res) => {
//   return res.send('h')
// })

app.use(cors());

app.use(express.static((__dirname, path.join(__dirname, "public"))));

(async () => {
  await User.hasMany(Application, { foreignKey: "userId", as: "applications" });
  // await User.sync({ force: true });
  // await Application.sync({ force: true });
  // await Media.sync({ force: true });
})();

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/user", userRoutes);
app.use("/applications", applicationRoutes);
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
