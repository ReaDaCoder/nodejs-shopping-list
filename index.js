const express = require('express');
const itemsRoutes = require('./Routes/shoppingList.js');


const app = express();
const PORT = 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/listItems', itemsRoutes);

app.get('/', (req, res) => res.send('Shopping list Items'))



app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('Shopping List');
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))