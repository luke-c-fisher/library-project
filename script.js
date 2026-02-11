// function Books(title, author, pages, status) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.status = status;
//     this.info = function() {
//         return `${this.title} by ${this.author}, 
//         ${this.pages}, ${this.status}`;
//     }
// }

// const theHobbit = new Books('The Hobbit', 'by J.R.R Tolkien', '295 pages', 'not read yet')

// console.log(theHobbit.info());

const addButton = document.getElementById('add-button');

addButton.addEventListener("click", function(){

  const deleteButton = document.createElement("button");

  deleteButton.addEventListener("click", function(){
    // someList.remove();
  });
})

const myLibrary = [];

function Books() {
 // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}