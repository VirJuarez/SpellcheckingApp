const express = require('express');
const bodyParser = require('body-parser');
const spellcheckRouter = require('./src/routers/spellcheckRouter.js');
const cors = require('cors');

const app = express();
const port = 31337;

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/spellcheck', spellcheckRouter);

// app.use((err, req, res) => {
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
