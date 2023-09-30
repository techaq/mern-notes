// // utilities/notes-service.js

// // Simulated notes data (you can replace this with actual API calls)
// const notesData = [
//   { id: 1, title: "Note 1", content: "Content for Note 1" },
//   { id: 2, title: "Note 2", content: "Content for Note 2" },
//   // Add more notes as needed
// ];

// // Function to fetch all notes
// export function fetchNotes() {
//   return Promise.resolve(notesData);
// }

// // Function to fetch a note by ID
// export function fetchNoteById(id) {
//   const note = notesData.find((note) => note.id === parseInt(id, 10));
//   return Promise.resolve(note);
// }

// // Function to create a new note
// export function createNote(newNote) {
//   // Generate a unique ID for the new note (replace with your logic)
//   const uniqueId = notesData.length + 1;
//   const noteWithId = { id: uniqueId, ...newNote };
//   notesData.push(noteWithId);
//   return Promise.resolve(noteWithId);
// }

// // Function to update an existing note
// export function updateNote(updatedNote) {
//   const index = notesData.findIndex((note) => note.id === updatedNote.id);
//   if (index !== -1) {
//     notesData[index] = updatedNote;
//   }
//   return Promise.resolve(updatedNote);
// }

// // Function to delete a note by ID
// export function deleteNoteById(id) {
//   const index = notesData.findIndex((note) => note.id === parseInt(id, 10));
//   if (index !== -1) {
//     notesData.splice(index, 1);
//   }
//   return Promise.resolve();
// }
