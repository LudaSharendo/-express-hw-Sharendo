
const express = require("express");
const bookRoutes = require('./routes/basic'); 
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.use('/books', bookRoutes);
app.listen(3000, () => {
  console.log('Express server running on port 3000');
});