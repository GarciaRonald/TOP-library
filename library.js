const bookLibrary = [];
const divLibrary = document.getElementById('library');
const btnAddBook = document.getElementById('add-new');
const dialog = document.getElementById('modal');
const btnCancel = document.getElementById('cancel');
const btnSubmit = document.getElementById('submit');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const inputRead = document.getElementById('read');

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

function clearFormData() {
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    inputRead.checked = false;
}

function handleSubmit(e) {
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;
    const read = inputRead.checked;
    addBookToLibrary(title, author, pages, read);
}

addBookToLibrary('Sorcerers Stone', 'JKR', 300, true);
addBookToLibrary('Deathly Hollows', 'JKR', 750, true);
addBookToLibrary('Cien años de soledad', 'García Márquez', false, false);

btnAddBook.addEventListener('click', () => modal.showModal());
btnCancel.addEventListener('click', () => {
    modal.close();
    clearFormData();
});
btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    handleSubmit(e);
    modal.close();
    clearFormData();
});