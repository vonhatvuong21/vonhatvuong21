import Book from "./book";
export default class library {
    private books: Book[] = []
    addBook(book: Book): void {
        this.books.push(book);
    }

    ShowAllBooks(): void {
        this.books.forEach ((book) => {
            console.log(`Show all books: "${book.title}" by "${book.author}"`);
        })
    }
    findBookByTitle(title: string): Book | undefined {
        return this.books.find((book) => book.title.toLowerCase() === title.toLowerCase());

    }

    
} 