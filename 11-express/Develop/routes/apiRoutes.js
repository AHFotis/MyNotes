
//maybe try this on the server page to start/make sure its working, THEN move to alternate files.
var noteData = require("../db/db.json");
const fs = require('fs');

module.exports = function (app) {

    //copied from web for reference
    app.get("/api/notes", function (req, res) {
        //fs.readfile of some kind
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