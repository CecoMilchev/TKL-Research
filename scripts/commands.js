const commandsFunc = (factory, database) => {
    function createBook(title, author, description) {
        let bookData = {
            title: $("#formCreateBook input[name=title]").val(),
            author: $("#formCreateBook input[name=author]").val(),
            description: $("#formCreateBook textarea[name=descr]").val()
        };

        let book = factory.createBook(bookData.title, bookData.author, bookData.description);
        database.addBook(book);
        console.log(database.books);
    }

    function listBooks (){
        $('#books').empty();
        let books = database.returnBooks();
        let booksList = $('#books');
        let booksTable = $('<table>');
        for (var book of books) {
           let tableRow = $('<tr>').append(
               $('<td>').text(book.title),
               $('<td>').text(book.author),
               $('<td>').text(book.description)
           );
           booksTable.append(tableRow);
        }
        booksList.append(booksTable);
    }

    return {
        createBook: createBook,
        listBooks: listBooks
    }
}