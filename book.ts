import book from "./interface";
export default class Book implements book {
constructor(
    public title: string,
    public author: string,
) {
    this.title = title;
    this.author = author;
}
    getDetails(): string {
        return `Title: ${this.title} by ${this.author}`;
}
}