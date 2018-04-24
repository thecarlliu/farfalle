const router = require("express").Router();
const endorsementRoute = require("./endorsement");


//Routes
router.use("/endorsements", endorsementRoute);

module.exports = router;
