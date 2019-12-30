console.log("Using ES6 classes");
class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}
class Display {
  //Adding a book
  add(book) {
    console.log("Adding to UI");
    let tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                          <td>${book.name}</td>
                          <td>${book.author}</td>
                          <td>${book.type}</td>
                          <td>delete book</td>
                         </tr> `;
    tableBody.innerHTML += uiString;
  }
  //Clearing form data
  clear() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }

  //Implementing the validate function
  validate(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }
  show(type, message) {
    let msg = document.getElementById("message");
    let boldText;
    if(type==='success'){
        boldText='Success';
    }else{
        boldText='Error'
    }
    msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
          <strong>${boldText}:</strong> ${message}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`;
    setTimeout(function() {
      msg.innerHTML = "";
    }, 2000);
  }
}

//Add submit event listner to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
  console.log("You have submitted the library form.");
  let name = document.getElementById("bookname").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success",'Your book has successfully been added');
  } else {
    //Show error to the user
    display.show("danger",'Sorry you cannot add this book');
  }
  e.preventDefault();
}
//Todos
/*
1. store data to local storage
2. give another column as an option to delete book
3. add a scroll bar to the view
*/
