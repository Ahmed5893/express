const express = require('express');
const app = express();
const port = 5000;


app.use('/', logger);
function logger(req, res, next){
    let date= new Date();
    if(date.getDay()>=1 && date.getDay()<6 && date.getHours()>=9 && date.getHours()<=17){
    next();
    } else{
        res.send('data is not available now')
    }
}

app.use(express.static(__dirname + '/public'))

app.listen(port,logger,()=>{console.log('Server is running on port:',port)});

