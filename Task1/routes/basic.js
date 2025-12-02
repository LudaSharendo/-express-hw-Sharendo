const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).json({ message: "Hello! I am basic" });
});
module.exports = router;