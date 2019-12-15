// ################################## //
// ############### ES5 ############## //
// ################################## //

// ---------------------------------- //
// BOOK CONSTRUCTOR
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// ---------------------------------- //
// UI CONSTRUCTOR
function UI() {}

// Add book to list object prototype
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // create element
    const row = document.createElement('tr');
    // insert form data to 'row'
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete">X<a></td>
    `;

    list.appendChild(row);
}

// ui clear field
UI.prototype.clearField = function() {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
};

// ---------------------------------- //
// Events Listener
document.querySelector('.book-form').addEventListener('submit', function(e) {
    // get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    //instantiate book from inserted form values as an OBJECT/JSON Format
    const book = new Book(title, author, isbn);

    // instantiate UI
    const ui = new UI();

    // validate form value
    if (title === '' || author === '' || isbn === '') {
        alert('Complete the value');
    } else {
        // add book to a list then go up on UI constructor to make prototype
        ui.addBookToList(book);

        // clear fields after submit
        ui.clearField();
    }

    e.preventDefault();
});