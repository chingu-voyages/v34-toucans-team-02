fetch ("http://localhost:3000/notes")
.then(response => response.json())
.then(function(notesArray) {
    console.log(notesArray)
})

//json-server --watch db.json --port 3000