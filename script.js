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
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');


const myLibrary = [];

function Books(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
 // the constructor...
}

Books.prototype.toggleStatus = function(){
  this.status = !this.status; 
}

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Books(this, title, author, pages, status);
  myLibrary.push(newBook);
}

function displayBooks(arr) {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = "";

  for (let i = 0; i < arr.length; i++){
    const bookInfo = arr[i];
    const card = document.createElement('div');

    const listTitle = document.createElement('span');
    const listAuthor = document.createElement('span');
    const listPages = document.createElement('span');
    const deleteButton = document.createElement('button');
    const statusButton = document.createElement('button');

    listTitle.textContent = `"${bookInfo.title}"`;
    listAuthor.textContent = bookInfo.author;
    listPages.textContent = `${bookInfo.pages} pages`;

    submitButton.textContent = bookInfo.status ? 'Not Read' : 'Read';
    submitButton.addEventListener("click", function(){
      bookInfo.status
    })

    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener("click", function(){
      card.remove();
    });

  
    card.appendChild(listTitle);
    card.appendChild(listAuthor);
    card.appendChild(listPages);
    card.appendChild(statusButton);
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

  // addBookToLibrary(resultTitle, resultAuthor, resultPages, false);
  displayBooks(myLibrary);
});

closeButton.addEventListener("click", function(){
  dialog.close();
});



 // const deleteButton = document.createElement("button");

  // deleteButton.addEventListener("click", function(){
    // someList.remove();
  // });