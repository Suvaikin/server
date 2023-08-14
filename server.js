const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send({data:[{
    "userId": 1,
    "it": 1,
    "title": "are or do repels provide blacked out except option criticizes",
    "body": "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the troubles so that the whole\nof our things are but they are the matter will happen to the architect"
  },
  {
    "userId": 1,
    "it": 2,
    "title": "who is being",
    "body": "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of pleasure, or any trouble to reject them; we shall not open to them; we shall not be able to do anything but nothing."
  },
  {
    "userId": 1,
    "it": 3,
    "title": "she repels troubles as if she were training, whoever she is",
    "body": "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared\nhis pains further by his hatred and labor and wants or"
  }]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})