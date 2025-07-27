import Book from "./book";
import Library from "./library";

const library1 = new Library();
const library2 = new Library();

// Create books in library1
library1.createBook("The Great Gatsby", "F. Scott Fitzgerald");
library1.createBook("1984", "George Orwell");

// Create books in library2
library2.createBook("To Kill a Mockingbird", "Harper Lee");
library2.createBook("Brave New World", "Aldous Huxley");

//Find books in library1
console.log("Finding '1984' in Library 1: ");
library1.listBooks;
console.log(library1.findBookByName("1984"));

// Delete books from library 2 by Name
console.log("Show all books from library 2: ");
library2.listBooks();
console.log("Deleteing 'Brave New World' from Library 2");
library2.deleteBookByName("Brave New World");
console.log("Books in Library 2 after deletion: ");
library2.listBooks();

// Delete books from library 2 by Author
console.log("Books in Library 2: ");
library1.listBooks();
console.log("Deleting book of Aldous Huxley from Library 2");
library1.deleteBookByAuthor("Aldous Huxley");
console.log("Books in Library 2 after deletion: ");
library1.listBooks();



// Edit author of a book in library 1
console.log("Books in Library 1: ");
library1.listBooks();
console.log("Editing author of '1984' to 'Nhat Vuong'");
library1.editAuthor("1984", "Nhat Vuong");
console.log("Books in Library 1 after editing: ");
library1.listBooks();