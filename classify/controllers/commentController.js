console.log("loading " + module.id);

var mysql = require("mysql");
var cody = require("../../node_modules/cody/index.js");

function CommentController(context) {
    this.CommentView = "../views/Commentablepage.ejs";
    // init inherited controller
    cody.Controller.call(this, context);
}

CommentController.prototype = Object.create(cody.Controller.prototype);
module.exports = CommentController;

CommentController.prototype.doRequest = function(finish) {
    var self = this;
    if (self.isRequest("")) {
        // ordinary request
        // do stuff
        finish(self.CommentView);
    } else if (self.isRequest("SUBMIT")) {
        // comment is submitted
        var user = self.getParam('uName');
        var comment = self.getParam('comment');
        console.log(user + " said: " + comment);
        // do stuff
        finish(self.CommentView);
    }
}
