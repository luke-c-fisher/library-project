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
const output = document.getElementById('prompt-output');


const myLibrary = [];

function Books(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
 // the constructor...

}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

addButton.addEventListener("click", function(){
  dialog.showModal();
});

closeButton.addEventListener("click", function(){
  dialog.close();
});


 // const deleteButton = document.createElement("button");

  // deleteButton.addEventListener("click", function(){
    // someList.remove();
  // });