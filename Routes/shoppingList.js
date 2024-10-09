import express from 'express';
const router = express.Router();

const listItems = [
  {
    listItem: 'cucumber',
  }
];

router.get('/', (req, res) => {
    res.send(listItems);
})

export default router