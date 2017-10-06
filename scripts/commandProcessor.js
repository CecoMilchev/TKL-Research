const commandProcessorFunction = (commands) => {

    const createProcess = () => {
        let bookData = {
            title: $("#formCreateBook input[name=title]").val(),
            author: $("#formCreateBook input[name=author]").val(),
            description: $("#formCreateBook textarea[name=descr]").val()
        };

        commands.createBook(bookData.title, bookData.author, bookData.description);
        $("#formCreateBook").trigger("reset");
    }
    const listBooksCommand = function () {
        commands.listBooks();
    }

    return {
        x: console.log('commandProcessor'),
        createProcess: createProcess,
        listBooksCommand: listBooksCommand
    }
};