const express = require('express');
const marked = require('marked');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/convert', (req, res) => {
  const { markdown } = req.body;
  if (!markdown) {
    return res.status(400).json({ error: 'No markdown provided' });
  }

  const html = marked.parse(markdown);
  res.json({ html });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
