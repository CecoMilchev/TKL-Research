// TODO fix listing so it works for html

const databaseFunction = function () {
    let books = [];
    let recepies = [];

    const returnBooks = function () {
    
        return this.books;
    }

    const addBook = function (obj) {
        books.push(obj);
    };

    const addRecepie = function (obj) {
        recepies.push(obj);
    };

    const listBooks = function () {
        console.log(books);
    };

    const listRecepies = function () {
        console.log(recepies);
    };

    return {
        x: console.log('data'),
        books:books,
        addBook: addBook,
        listBooks: listBooks,
        addRecepie: addRecepie,
        listRecepies: listRecepies,
        returnBooks: returnBooks
    }
};

// database.addBook({name:'book1'});
// database.listBooks();