var express = require("express");
const router = express.Router();
const app = express();

app.use("/", express.static("html"))

router.get("/", function (req, res) {
    res.render("index");
});
  


module.exports = router;