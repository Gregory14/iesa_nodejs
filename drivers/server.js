/**
 * Created by gregoryjoly on 07/06/2016.
 */
var express = require('express')(),
    http = require('http');

module.exports = function(app){
    return {
        instance : null,

        create : function(){
            //create server
            this.instance = http.Server(express);
            app.route.create(express);

            if(app.config.socket) app.socketio.init();
            this.listen();

            /*for (var i=0; i<_routes.length; i++){

                (function(_r){

                    express.get(_routes[i].path, function(req, res){
                        res.sendFile(app.root + '/views/' + _routes[i].view + '.html')
                    });

                })(_routes[i])
            }*/
            //app.route.create(express);
            //this.listen();
        },

        listen : function(){
            this.instance.listen(3000, function(){
                console.log('server Listening on *:3000');
            })
        }
    }
};