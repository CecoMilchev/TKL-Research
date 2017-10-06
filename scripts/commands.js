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

    function listBooks() {
        $('#books').empty();
        let books = database.returnBooks();
        let booksList = $('#books');
        if (books.length === 0) {
            let p = $('<p>').append('No books yet.');
            booksList.append(p);
        } else {
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

    }

    function createRecipe(title, ingredients, directions) {
        let recipeData = {
            title: $("#formCreateRecipe input[name=title]").val(),
            ingredients: $("#formCreateRecipe input[name=ingredients]").val(),
            directions: $("#formCreateBook textarea[name=directions]").val()
        };

        let recipe = factory.createRecipe(recipeData.title, recipeData.ingredients, recipeData.directions);
        database.addRecipe(recipe);
        console.log(database.recipe);
    }

    function listRecipes() {
        $('#recipes').empty();
        let recipes = database.returnRecipes();
        let recipeList = $('#recipes');
        if (recipes.length === 0) {
            let p = $('<p>').append('No recipes yet.');
            recipeList.append(p);
        } else {
            let recipeTable = $('<table>');
            for (var recipe of recipes) {
                let tableRow = $('<tr>').append(
                    $('<td>').text(recipe.title),
                    $('<td>').text(recipe.ingredients),
                    $('<td>').text(recipe.directions)
                );
                recipeTable.append(tableRow);
            }
            recipesList.append(booksTable);
        }

    }

    return {
        createBook: createBook,
        createRecipe: createRecipe,
        listRecipes: listRecipes,
        listBooks: listBooks
    }
}