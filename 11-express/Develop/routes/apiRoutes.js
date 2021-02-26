var noteData = require("../db/db.json");

module.exports = function (app) {
    app.get("/api/stores", function (req, res) {
        res.json(noteData)
    })
}