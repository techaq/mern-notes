require("dotenv").config();
require("./database.cjs");
const Note = require("../models/note.cjs");

// sample data to be seeded
const sampleNotes = [
  {
    title: "Sample Note 1",
    content: "This is the content of the first sample note.",
    userId: "65188b73d67b3f8b1c041e91",
  },
  {
    title: "Sample Note 2",
    content: "This is the content of the second sample note.",
    userId: "65188b73d67b3f8b1c041e91",
  },
];

// Function to seed the database with sample notes
async function seedDatabase() {
  try {
    // Clear existing notes (optional)
    await Note.deleteMany({});

    // Insert the sample notes into the database
    await Note.insertMany(sampleNotes);

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Optionally, add any cleanup or closing logic here if needed
  }
}

// Call the seedDatabase function to start the seeding process
seedDatabase();
