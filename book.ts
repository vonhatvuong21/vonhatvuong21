import book from "./interface";
export default class Book implements book {
constructor(
    public title: string,
    public author: string,
) {}
    getDetails(): string {
        return `Title: ${this.title} by ${this.author}`;
}
}