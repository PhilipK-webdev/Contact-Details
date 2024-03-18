const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userRoutes);

db.sequelize
  .sync()
  .then(function () {
    app.listen(PORT, function () {
      console.log(`App listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
