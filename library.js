const bookLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    bookLibrary.push(newBook);
}

addBookToLibrary('Sorcerers Stone', 'JKR', 300, true);
addBookToLibrary('Deathly Hollows', 'JKR', 750, true);
addBookToLibrary('Cien años de soledad', 'García Márquez', 900, false);

console.table(bookLibrary);