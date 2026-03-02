const bookLibrary = [];
const divLibrary = document.getElementById('library');
const btnAddBook = document.getElementById('add-new');
const dialog = document.getElementById('modal');
const btnCancel = document.getElementById('cancel');
const form = document.getElementById('form');

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    bookLibrary.push(newBook);
    displayLibrary();
}

function displayLibrary() {
    const divLib = document.getElementById('library');
    divLib.innerHTML = '';
        
    bookLibrary.map(book => {
        const divBook = document.createElement('div');
        divBook.id = book.id;
        divBook.className = 'book';

        const divTitle = document.createElement('div');
        divTitle.className = 'book-title';
        divTitle.innerText = book.title;

        const divAuthor = document.createElement('div');
        divAuthor.className = 'book-author';
        divAuthor.innerHTML = `by <span class="author">${book.author}</span>`;

        const divPages = document.createElement('div');
        divPages.className = 'book-pages';
        divPages.innerText = book.pages ? `${book.pages} pages` : '';
        
        const divRead = document.createElement('div');
        divRead.className = 'book-read';
        divRead.innerText = `Read: ${book.read ? 'Yes': 'No'}`;

        divLibrary.appendChild(divBook);
        divBook.append(divTitle, divAuthor, divPages, divRead);
    });
}

function handleSubmit(e) {
    const title = e.target[1].value;
    const author = e.target[2].value;
    const pages = e.target[3].value;
    const read = e.target[4].checked;
    addBookToLibrary(title, author, pages, read);
}

addBookToLibrary('Sorcerers Stone', 'JKR', 300, true);
addBookToLibrary('Deathly Hollows', 'JKR', 750, true);
addBookToLibrary('Cien años de soledad', 'García Márquez', false, false);

btnAddBook.addEventListener('click', () => modal.showModal());
btnCancel.addEventListener('click', () => modal.close());
form.addEventListener('submit', e => {
    e.preventDefault();
    handleSubmit(e);
    modal.close();
});