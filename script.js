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
const dialog = document.getElementById('prompt-input');
const closeButton = document.getElementById('close-button');
const submitButton = document.getElementById("submit-button");
const outputValue = document.getElementById('prompt-output');
// const bookTitle = document.getElementById('book-title');
// const bookAuthor = document.getElementById('book-author');
// const bookPages = document.getElementById('book-pages');
const cardContainer = document.querySelector('.card-container');


const myLibrary = [];

function Books(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
 // the constructor...
}

function addBookToLibrary(book) {
  Books.call(this, title, author, pages);
  const book = {(title: 'the hobbit', author: 'J.R.R Tolkien', pages: '300')};
  myLibrary.push(book);
  // take params, create a book then store it in the array
}


// EVENT LISTENERS 

// addButton.addEventListener("click", function(){
//   dialog.showModal();
// });

// submitButton.addEventListener("click", function(e){
//   const card = document.createElement('div');
//   e.preventDefault;
  // const bookTitle = title.value;

  // card.textContent = `The title of the book: ${bookTitle}.`
// })

// closeButton.addEventListener("click", function(){
//   dialog.close();
// });



 // const deleteButton = document.createElement("button");

  // deleteButton.addEventListener("click", function(){
    // someList.remove();
  // });