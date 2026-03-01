const bookLibrary = [];
const divLibrary = document.getElementById('library');

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
}

function displayLibrary() {
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
        divBook.appendChild(divTitle);
        divBook.appendChild(divAuthor);
        divBook.appendChild(divPages);
        divBook.appendChild(divRead);
    });
}

addBookToLibrary('Sorcerers Stone', 'JKR', 300, true);
addBookToLibrary('Deathly Hollows', 'JKR', 750, true);
addBookToLibrary('Cien años de soledad', 'García Márquez', false, false);

displayLibrary();