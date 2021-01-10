const express = require('express');
const path = require('path');
const rootDirectory = require('./utilities/path');
const adminRouter = require('./routes/admin');
const homePage = require('./routes/homePage');
const { response } = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use('/admin', adminRouter);///admin - this is a filter
app.use(homePage);

app.use((req, res) =>{
    res.status(404).sendFile(path.join(rootDirectory, 'views', '404.html'));
});


app.listen(3000,()=>{
    console.log('Server is runing on Port 3000');
});