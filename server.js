//IMPORTING REQUIRED MODULES
const express = require('express')
 
//CREATE EXPRESS APP OBJECT
const app = express()
 

//CONFIGURE EXPRESS APPS (app.set)
//Start Config
 
 
//End Config
 
//MOUNT MIDDLEWEAR (app.use)
//Start Middlewear
 
 
//End Middlewear
 
//MOUNT ROUTES
//Start Routes


app.get('/', (req, res) => {
   res.send(`<h1>99 Bottles of beer on the wall<\h1>
                <a href="http://localhost:3001/98/">take one down, pass it around</a>
            `)
})

//greeting
app.get('/:number_of_bottles', (req, res) => {
    let decrease = parseInt(req.params.number_of_bottles) - 1
    if(decrease === -1){
        res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall<\h1>
        <a href="http://localhost:3001/">Start over</a>
        `)
    }
    else{
        res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall<\h1>
        <a href="http://localhost:3001/${decrease}">take one down, pass it around</a>
        `)
    }
})

//End Routes
 
 
 
//TELL APP WHICH PORT TO LISTEN TOS
app.listen(3001, () => {
   console.log("listening on port 3001")
})
