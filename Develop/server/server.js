const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 2007;

const staticFilesPath = path.join(__dirname, '../client/dist');

app.use(express.static(staticFilesPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});