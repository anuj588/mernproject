// const mongoose = require('mongoose');

// const DB = process.env.DATABASE;

// mongoose.connect(DB, {
//   console.log
    
// }).then(() => {
//     console.log(`connnection successful`);
// }).catch((err) => console.log(`no connection ${err}`));


const mongoose = require("mongoose")

const DB = process.env.DATABASE;

mongoose.connect("mongodb+srv://anuj:papa2mummy@cluster0.a7m3h.mongodb.net/mernproject?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true }).then(() =>{
    console.log('connection succ...')
}).catch((err)=>{
    console.log(err)
})
