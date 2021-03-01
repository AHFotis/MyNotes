
//maybe try this on the server page to start/make sure its working, THEN move to alternate files.
// var dbPath = "../db/db.json";

const fs = require('fs');
var path = require("path");
const dbPath = path.join(__dirname, "../db/db.json");
const { v4: uuidv4 } = require('uuid')

module.exports = function (app) {

    //copied from web for reference
    app.get("/api/notes", function (req, res) {
        fs.readFile(dbPath, 'utf8', (err, data) => {
            if (err) throw err;
            var notesResponse = JSON.parse(data)
            res.json(notesResponse);
        })
    });

    //posts new note data to note array
    app.post("/api/notes", function (req, res) {
        //most likely fs.appendfile
        fs.readFile(dbPath, 'utf8', (err, data) => {
            if (err) throw err;

            let savedNotes;

            if (data) {
                savedNotes = JSON.parse(data)
            }

            let newNote = req.body

            newNote.id = uuidv4()

            if (savedNotes) {
                savedNotes.push(newNote);
            } else {
                savedNotes = [newNote];
            }

            fs.writeFile(dbPath, JSON.stringify(savedNotes), (err, data) => {
                if (err) throw err;
                res.json(newNote);
            })

        })
    })

    //deletes note
    app.delete("/api/notes/:id", function (req, res) {

        let deleteId = req.params.id

        fs.readFile(dbPath, 'utf8', (err, data) => {
            if (err) throw err;

            let noteArray = JSON.parse(data);
            console.log(noteArray)

            for (let i = 0; i < noteArray.length; i++) {
                if (deleteId == noteArray[i].id) {
                    noteArray.splice(i, 1)
                }
            }

            fs.writeFile(dbPath, JSON.stringify(noteArray), (err, data) => {
                if (err) throw err;
                res.send();
               
            })
        })

    })
}