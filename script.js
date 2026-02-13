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

// const { createElement } = require("react");


// const theHobbit = new Books('The Hobbit', 'by J.R.R Tolkien', '295 pages', 'not read yet')

// console.log(theHobbit.info());

const addButton = document.getElementById('add-button');
const dialog = document.getElementById('prompt-input');
const closeButton = document.getElementById('close-button');
const submitButton = document.getElementById("submit-button");
const outputValue = document.getElementById('prompt-output');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const cardContainer = document.querySelector('.card-container');


const myLibrary = [];

function Books(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
 // the constructor...
}

function addBookToLibrary(title, author, pages) {
  Books.call(this, title, author, pages);

  const newBook = {
    title: title,
    author: author,
    pages: pages
  };
  myLibrary.push(newBook);
}

function displayBooks() {

  for (let i = 0; i < myLibrary.length; i++){
    const card = document.createElement('div');
    const deleteButton = document.createElement('button');
    const bookInfo = myLibrary[i];

    card.innerHTML = `
    <ul>
        <li>"${bookInfo.title}"</li>
        <li>${bookInfo.author}</li>
        <li>${bookInfo.pages} pages</li>
    </ul>
    `;

    deleteButton.textContent = `Delete`;
    deleteButton.addEventListener("click", function(){
      card.remove();
    });

    card.appendChild(deleteButton);
    cardContainer.appendChild(card);
  }
};


// EVENT LISTENERS 

addButton.addEventListener("click", function(){
  dialog.showModal();
});

submitButton.addEventListener("click", function(e){
  e.preventDefault;

  const resultTitle = bookTitle.value;
  const resultAuthor = bookAuthor.value;
  const resultPages = bookPages.value;

  addBookToLibrary(resultTitle, resultAuthor, resultPages);
  displayBooks();
});

closeButton.addEventListener("click", function(){
  dialog.close();
});



 // const deleteButton = document.createElement("button");

  // deleteButton.addEventListener("click", function(){
    // someList.remove();
  // });