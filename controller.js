var app = require('./index');

module.exports = {
    getPlanes: function(){
        var db = app.get('db');

        app.get('/planes', function(req, res) {
          db.get_planes([25],function(err, planes){
            res.status(200).send(planes)
          })
        });
    }
}
