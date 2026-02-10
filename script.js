function Books(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return `${this.title} by ${this.author}, 
        ${this.pages}, ${this.status}`;
    }
}

const theHobbit = new Books('The Hobbit', 'by J.R.R Tolkien', '295 pages', 'not read yet')

console.log(theHobbit.info());