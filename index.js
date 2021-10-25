fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(function(notesArr) {
        console.log(notesArr)
    })