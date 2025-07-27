import Book from "./book";
export default class library {
    private books: Book[] = []

    createBook(name: string, author: string): void {
        const book = new Book (name, author);
        this.books.push(book);
    }

    findBookByName(name: string): Book | undefined {
        return this.books.find(book => book.title.toLocaleLowerCase() === name.toLocaleLowerCase());
    }
    
    editAuthor(name: string, newAuthor: string): void {
        const book = this.books.find(book => book.title === name);
        if (book) {
            book.author = newAuthor
        } else {
            console.log(`Book with title "${name}" not found.`);
        }
    }

    listBooks(): void {
        this.books.forEach((book) => {
            console.log(book.getDetails());
        });
    }

    deleteBookByName(name: string): void {
        this.books = this.books.filter(book => book.title !== name);
    }
    deleteBookByAuthor(author: string): void {
        this.books = this.books.filter(book => book.author !== author);
    }
        }