import Book from "./book";
import Library from "./library";

const library = new Library()

const book1 = new Book("demo book 1", "Author 1")
const book2 = new Book("demo book 2", "Author 2")

library.addBook(book1)
// library.addBook(book2)

// library.ShowAllBooks()

const found = library.findBookByTitle("Demo book 1")
console.log("Found book: ", found)