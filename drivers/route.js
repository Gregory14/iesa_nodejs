/**
 * Created by gregoryjoly on 07/06/2016.
 */

module.exports = function(app){
    return {
        create : function(express){
            express.get('/', function(req, res){
                res.sendFile(app.root + '/views/index.html')
            });
        }
    }
}