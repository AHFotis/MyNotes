
//maybe try this on the server page to start/make sure its working, THEN move to alternate files.
// var dbPath = "../db/db.json";

const fs = require('fs');
var path = require("path");
const dbPath = path.join(__dirname, "../db/db.json");

module.exports = function (app) {

    //copied from web for reference
    app.get("/api/notes", function (req, res) {
        fs.readFile(dbPath, 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
            var notesResponse = JSON.parse(data)
            res.json(notesResponse);
        })
    });

    //posts new note data to note array
    app.post("api/notes", function (req, res) {
        //most likely fs.appendfile
        
    })

    //deletes note
    app.delete("api/notes", function (req, res) {
        //maybe read, splice, and rewrite?
        
    })
}