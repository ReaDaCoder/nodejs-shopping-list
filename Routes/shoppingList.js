import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

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
  const items = req.body;

  listItems.push({ ...items, id: uuidv4() });

  res.send(`${items} has been added to the shopping list`);
})

router.put('/', (req, res)=>{
  res.send()
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id)

  res.send(`${id} deleted successfully from database`);
});

export default router