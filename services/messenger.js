/**
 * Created by gregoryjoly on 07/06/2016.
 */

module.exports = function(app){
    return {
        send : function(msg){
            app.socketio.io.emit('receive',msg);
        }
    }
}