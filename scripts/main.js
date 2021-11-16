const main = document.querySelector(".main");
const pinned = document.getElementById("pinned");
let createdNote = document.createElement("div");
const newNoteButton = document.querySelector(".add-new-note");
newNoteButton.addEventListener("click", function () {
  pinned.innerHTML += noteHTML;
});

// create elements
let noteHTML =
  '<div class="memo"><div class="memo-top"><h3><textarea rows="1" placeholder="Title"></textarea></h3><button class="pin"><i class="fas fa-map-pin"></i></button></div><div class="content"><textarea class="input-text-area" rows="8" cols="30" placeholder="..."></textarea></div><div class="tags"><button class="tag"># Passwords</button><button class="tag"># Websites</button></div><ul class="icon-container icon-active"><button class="change-color"><i class="fas fa-paint-brush"></i></button></button><button class="add-tags"><i class="fas fa-hashtag"></i></button><button class="archive"><i class="fas fa-folder"></i></button><button class="delete"><i class="fas fa-trash-alt"></i></button></ul></div>';

// fetch ("http://localhost:3000/notes")
// .then(response => response.json())
// .then(function(notesArray) {
//     console.log(notesArray)
// })

//json-server --watch db.json --port 3000

//!edit note, need to create variables for each property and form
// fetch (`http://localhost:3000/notes/${noteId}`, {
//   method: "PATCH",
//   headers: {
//     "content-type": "application/json"
//   },
//   body: JSON.stringify({
//     color: newColor,
//     category: newCategory,
//     author: newAuthor

//   })
// })