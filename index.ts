import Book from "./book";
import Library from "./library";

const library1 = new Library();
const library2 = new Library();
library1.createBook("The Great Gatsby", "F. Scott Fitzgerald");
library1.createBook("1984", "George Orwell");

library2.createBook("To Kill a Mockingbird", "Harper Lee");
library2.createBook("Brave New World", "Aldous Huxley");
console.log("Books in Library 1: ");
library1.listBooks();
console.log("Deleteing '1984' from Library 1");
library1.deleteBookByName("1984");
console.log("Books in Library 1 after deletion: ");
library1.listBooks();

console.log("Books in Library 2: ");
library2.listBooks();
console.log("Deleting book of Aldous Huxley from Library 2");
library2.deleteBookByAuthor("Aldous Huxley");
console.log("Books in Library 2 after deletion: ");
library2.listBooks();


console.log("Books in Library 2: ");
library2.listBooks();

console.log("Books in Library 1: ");
library1.listBooks();
console.log("Editing author of '1984' to 'Nhat Vuong'");
library1.editAuthor("1984", "Nhat Vuong");
console.log("Books in Library 1 after editing: ");
library1.listBooks();