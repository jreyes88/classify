console.log("loading " + module.id);

var mysql = require("mysql");
var cody = require("cody");

function CommentController(context) {
    var self = this;
    console.log("CommentController.constructor -> page(" + context.page.itemId + ") = " + context.page.title + ", request = " + context.request);
    self.CommentView = "Commentablepage.ejs";

    self.sqlGetCommentByPage = "SELECT * FROM comment WHERE pageid = ?";
    self.sqlInsertNewComment = "INSERT INTO comment (user, comment, pageid, time) VALUES (?,?,?,?);";
    // init inherited controller
    cody.Controller.call(self, context);
}
CommentController.prototype = Object.create( cody.Controller.prototype);
module.exports = CommentController;


CommentController.prototype.doRequest = function(finish) {
    var self = this;
    var pageId = self.context.page.itemId;
    // check comment in terminal
    console.log("request : " + self.isRequest(""));
    // /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
    if (self.isRequest("")) {
        console.log('eat a dick, node.');
        self.doList([pageId], function(comments) {finish(self.CommentView, {comments: comments})});
    } else if (self.isRequest("submit")) {
        // comment is submitted
        var user = self.getParam("uName");
        var comment = self.getParam("comment");
        console.log(user + " said: " + comment);
        var date = self.getCurrentDateTime();
        var param = [user,comment,pageId,date];
        self.AddNewComment(param, function() {
            self.doList([pageId], function(comments) {finish(self.CommentView, {comments: comments})})});
    } else {
        finish(self.CommentView);
    }
};

CommentController.prototype.getCurrentDateTime = function() {
    var date = new Date();
    var curdateTime = "";
    curdateTime += date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " ";
    curdateTime += date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return curdateTime;
};

CommentController.prototype.AddNewComment = function(param, finish) {
    var self = this;
    self.query(self.sqlInsertNewComment, param, function(err) {
        if (err) console.log(err);
        finish();
    });
};

CommentController.prototype.getComments = function(param, finish) {
    var self = this;
    self.query(self.sqlGetCommentByPage, param, function(err) {
        if (err) console.log(err);
        finish();
    });
};

CommentController.prototype.doList = function(param, finish) {
    var self = this;
    self.context.comments = [];
    self.query(self.sqlGetCommentByPage, param, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            self.context.comments = res;
            for(var i = 0; i < self.context.comments.length; i ++){
                console.log(self.context.comments[i]);
            }
        }
        finish(self.context.comments);
    });
};