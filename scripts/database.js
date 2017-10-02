// TODO fix listing so it works for html

const database = (function () {
    let books = [];
    let recepies = [];

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
        addBook: addBook,
        listBooks: listBooks,
        addRecepie: addRecepie,
        listRecepies: listRecepies
    }
})();

// database.addBook({name:'book1'});
// database.listBooks();