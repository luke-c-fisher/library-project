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

const cardContainer = document.querySelector('.card-container');
const cardInputs = document.querySelectorAll('.inputs');

const myLibrary = [];


function Books(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = crypto.randomUUID();
}

Books.prototype.toggleStatus = function(){
  this.status = !this.status; 
}

function addBookToLibrary(title, author, pages, status) {
  const newBook = new Books(title, author, pages, status);
  myLibrary.push(newBook);
}



function displayBooks(arr) {
  cardContainer.innerHTML = '';

  for (let i = 0; i < arr.length; i++){
    const bookInfo = arr[i];
    const card = document.createElement('div');
    // unique id for each div, combining DOM with id of book objects
    card.setAttribute('data-id',  bookInfo.id);

    const listTitle = document.createElement('span');
    const listAuthor = document.createElement('span');
    const listPages = document.createElement('span');
    const statusButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    listTitle.textContent = `"${bookInfo.title}"`;
    listAuthor.textContent = bookInfo.author;
    listPages.textContent = `${bookInfo.pages} pages`;

    statusButton.textContent = 'Not read';
    statusButton.addEventListener("click", function(){
      statusButton.textContent = bookInfo.status ? 'Not read' : 'Read';
      if (bookInfo.status) {
        bookInfo.toggleStatus();
        statusButton.style.backgroundColor = 'salmon';
      } else {
        bookInfo.toggleStatus();
        statusButton.style.backgroundColor = '#A5D6A7';
      }
    });
  
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener("click", function(e){
      const bookId = e.target.closest('[data-id]');
      console.log(bookId); 
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('card-button-container');
    buttonContainer.appendChild(statusButton);
    buttonContainer.appendChild(deleteButton);

    card.appendChild(listTitle);
    card.appendChild(listAuthor);
    card.appendChild(listPages);
    card.appendChild(buttonContainer);

    cardContainer.appendChild(card);
  }
};


// EVENT LISTENERS 

addButton.addEventListener("click", function(){
  dialog.showModal();
});

submitButton.addEventListener("click", function(e){
  e.preventDefault;
  const titleBook = bookTitle.value;
  const authorBook = bookAuthor.value;
  const pagesBook = bookPages.value;
  
  addBookToLibrary(titleBook, authorBook, pagesBook, false);
  displayBooks(myLibrary);
  console.log(myLibrary);
});

closeButton.addEventListener("click", function(){
  dialog.close();
});



 // const deleteButton = document.createElement("button");

  // deleteButton.addEventListener("click", function(){
    // someList.remove();
  // });