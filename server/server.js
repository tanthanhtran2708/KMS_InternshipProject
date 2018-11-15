const app = require('./app');

const server = require('http').createServer(app);

const port = process.env.PORT || 3000;

server.listen(port,function(){
    console.log('Express is listening to port:',port);
});