const express = require('express');
const bodyParser = require('body-parser');
const spellcheckRouter = require('./routers/spellcheckRouter');

const app = express();
const port = 31337;

app.use(bodyParser.json());
app.use('/spellcheck', spellcheckRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
