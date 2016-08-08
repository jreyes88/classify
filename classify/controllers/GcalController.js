console.log("loading " + module.id);

var mysql = require("mysql");
var cody = require("cody");

function GcalController(context) {
    var self = this;
    console.log("GcalController.constructor -> page(" + context.page.itemId + ") = " + context.page.title + ", request = " + context.request);
    self.CalendarView = "GcalPage.ejs";

    self.sqlGetCalendarByPage = "SELECT * FROM calendar WHERE pageid = ?";
    self.sqlInsertNewCalHref = "INSERT INTO calendar (user, href, pageid, time) VALUES (?,?,?,?);";
    // init inherited controller
    cody.Controller.call(self, context);
}
GcalController.prototype = Object.create(cody.Controller.prototype);
module.exports = GcalController;


GcalController.prototype.doRequest = function(finish) {
    var self = this;
    var pageId = self.context.page.itemId;
    console.log("request : " + self.isRequest(""));
    if (self.isRequest("")) {
        self.doList([pageId], function(calendar) { finish(self.CalendarView, { calendar: calendar })});
    } else if (self.isRequest("submit")) {
        // comment is submitted
        var user = self.getParam("uName");
        var href = self.getParam("GcalHref");
        console.log(user + " wants to insert the following ifram href for his/her Google Calendar: " + href);
        var date = self.getCurrentDateTime();
        var param = [user, href, pageId, date];
        self.AddNewCalHref(param, function() {
            self.doList([pageId], function(calendar) { finish(self.CalendarView, { calendar: calendar }) })
        });
    } else {
        self.doList([pageId], function(calendar) { finish(self.CalendarView, { calendar: calendar }) });
    }
};

GcalController.prototype.getCurrentDateTime = function() {
    var date = new Date();
    var curdateTime = "";
    curdateTime += date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " ";
    curdateTime += date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return curdateTime;
};

GcalController.prototype.AddNewCalHref = function(param, finish) {
    var self = this;
    self.query(self.sqlInsertNewCalHref, param, function(err) {
        if (err) console.log(err);
        finish();
    });
};

GcalController.prototype.doList = function(param, finish) {
    var self = this;
    self.context.calendar = [];
    self.query(self.sqlGetCalendarByPage, param, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            self.context.calendar = res;
            console.log(JSON.stringify(self.context.calendar, null, 2));
        }
        finish(self.context.calendar);
    });
};
