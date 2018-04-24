const router = require("express").Router();
const endorsementController = require("../../controllers/endorsementController");

// Matches with "/api/endorsements"
router.route("/endorsements")
    .get(endorsementController.findAll)
    .post(endorsementController.create);

module.exports = router;