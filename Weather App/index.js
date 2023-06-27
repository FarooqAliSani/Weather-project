// require important modules
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');


const web = path.join(__dirname, '/public');
app.use(express.static(web));

// To set Templtae engines
app.set('view engine', 'hbs');
app.set('views','view');


// To register partial
const partail_path = path.join(__dirname, '/partial');
console.log(partail_path);
hbs.registerPartials(partail_path);


// Routing is here
app.get('/', (req, res) => {

    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});

 app.get('/weather',(req,res)=>{
    res.render('weather');
    
  })






// Listen the server
app.listen(7000, () => {
    console.log('Server is running');
})