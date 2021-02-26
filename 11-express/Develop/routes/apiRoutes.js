var noteData = require("../db/db.json");
const fs = require('fs');

module.exports = function (app) {

    //gets data in note array to post
    app.get("/api/notes", function (req, res) {
        let savedNotes = [];

        fs.readFile(__dirname + noteData, 'utf8', (err,data) => {
            if(err) {
                console.error(err);
                res.json({"status": 404, "message": "db.json not found"});
            } else {
                savedNotes = JSON.parse(data);
            }
            res.join(savedNotes);
        })
    });

    //posts new note data to note array
    app.post("api/stores", function (req, res) {

        
    })

    //deletes note
    app.delete("api/stores", function (req, res) {

        
    })
}