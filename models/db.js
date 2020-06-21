const mongoose= require('mongoose');
mongoose.connect('mongodb://Localhost:27017/EcommerceOrders',{useNewUrlParser:true},(err)
=>{

    if (!err) {
        console.log('MongoDB connected');
        
    } else {
        console.log('error'+err);
        
    }


});

require('./order.model');
