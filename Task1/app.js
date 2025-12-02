const express = require("express");
const basicRoutes = require('./routes/basic');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.get('/status', (req, res) => {
  const status = {
    status: "Сервер работает",
    time: new Date().toISOString()
  };
  res.status(200).json(status);
});
app.use('/basic', basicRoutes);
app.listen(3000, () => {
  console.log('Express server running on port 3000');
});