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

    return {
        createBook: createBook
    }
}