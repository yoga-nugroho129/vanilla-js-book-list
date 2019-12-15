class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
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

    showAlert(msg, className) {
        // create div for alert
        const div = document.createElement('div');
        // add classes to the div
        div.className = `alert ${className}`;
        // add text to the div
        div.appendChild(document.createTextNode(msg));
        // get parent 
        const container = document.querySelector('.container');
        // get form
        const form = document.querySelector('.book-form');
        // insert alert to the div
        container.insertBefore(div, form);

        // timeout after 2 second
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearField() {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }
}

// ---------------------------------- //
// Events Listener for add book
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
        // alert because of incomplete data
        ui.showAlert('Please Complete the Data Fields', 'error');
    } else {
        // add book to a list then go up on UI constructor to make prototype
        ui.addBookToList(book);

        // clear fields after submit
        ui.clearField();

        // alert success 
        ui.showAlert('Book Added', 'success');
    }

    e.preventDefault();
});

// event listener for delete book 
document.querySelector('#book-list').addEventListener('click', function(e) {

    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert('Book Deleted!', 'success');

    e.preventDefault();
})