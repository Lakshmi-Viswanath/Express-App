const express = require('express');
const bodyParser = require('body-parser');

// When we call the function express we create a new express server object
const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.text());

//express middleware are functions which has request , response and next
//function in the request response chain
function m1(req, res,next){
     console.log("Inside the middleware m1");
     next();
}

app.get('/home', m1, (req, res) =>{
    return res.json({msg : "ok"})
});

app.get('/products/:product_id/rating/:rate', (req, res) => {
    // :id is variable and products is static
    // :id is url params and these kind of routes are called as dynammic routes
    console.log(req.params);
    const pid = req.params.product_id;
    return res.json({productId: pid, rating: req.params.rate});
});

app.listen(PORT , ()=>{
    console.log(`Server is up on the port ${PORT}`);
});

/* 3 ways how custom data can be sent
1. URL params
2. query params - key value pairs in the URL
3. request body 
*/