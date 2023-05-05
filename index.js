const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const users =[
    {id: 1, name: 'Jhankar', email: 'jhankar@gmail.com'},
    {id: 2, name: 'Mahubu', email: 'mahubu@gmail.com'},
    {id: 3, name: 'Kamrul', email: 'kamrul@gmail.com'},
    {id: 4, name: 'Hasan', email: 'hasna@gmail.com'}
]

// middleware
app.use(cors());
app.use(express.json());


app.get('/',(req,res) => {
    res.send("User Management server is running")
})

app.get('/users', (req,res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})


app.listen(port, () => {
    console.log(`Server is running PORT : ${port}`);
})