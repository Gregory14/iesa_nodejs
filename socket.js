/**
 * Created by gregoryjoly on 07/06/2016.
 */

var config = require('config');

var app = {
    root : __dirname,
    config : config
};

app.server = require('./drivers/server')(app);
app.route = require('./drivers/route')(app);
app.socketio = require('./drivers/socketio')(app);
app.messenger = require('./services/messenger')(app);
app.server.create();

console.log(app.config);




/*

var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');

    // receive message
    socket.on('send', function(msg){
        io.emit('receive',msg);
    });

    // user disconnected
    socket.on('disconnect', function(){
        console.log('User disconnected');
    });

});

*/