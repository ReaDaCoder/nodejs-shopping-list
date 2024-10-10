import express from 'express';
const router = express.Router();

// function addItem()
// {
//     console.log('submitForm booting')
    
//     var shoppingItem=document.getElementById("item").value;
    
//     console.log(shoppingItem)

// }

const listItems = [
    {
      listItem: '',
    }
  ];

router.post('/', (req, res) => {
    const items = req.body;
  
    listItems.push({ ...items, id: uuidv4() });
  
    res.send(`${items} has been added to the shopping list`);
  })