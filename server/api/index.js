const express = require("express");
const router = express.Router();

router.get("/items", require("./items/"));
router.get("/items/:id", require("./items/[id]"));

module.exports = router;
