const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require("uuid");
const fs = require("fs");

const listItems = [
  {
    listItem: 'cucumber',
  }
];

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const handleItem = listItems.find((listItems) => listItems.id === id)

  res.send(handleItem)
});

router.get('/', (req, res) => {
    res.send(listItems);
})

router.post('/', (req, res) => {
  console.log(req.body)
  const {listItem} = req.body;

  listItems.push({ listItem:listItem, id: uuidv4() });


  res.send(`${listItem} has been added to the shopping list`);
})

const result = fs.readFileSync(
  './items.json'
)

fs.writeFile('/items.json', err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

router.put('/', (req, res)=>{
  res.send()
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id)

  res.send(`${id} deleted successfully from database`);
});

module.exports =  router