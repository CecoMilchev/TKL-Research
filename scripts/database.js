// TODO fix listing so it works for html

const databaseFunction = function() {
    let books = [];
    let recipes = [];
    let comments = [];

    const returnBooks = function() {

        return books;
    }
    const returnRecipes = function() {

        return recipes;
    }

    const addBook = function(obj) {
        books.push(obj);
    };

    const addRecipe = function(obj) {
        recipes.push(obj);
    };
    const addComment = function(obj) {
        comments.push(obj);
    }
    const listBooks = function() {
        console.log(books);
    };

    const listRecipes = function() {
        console.log(recipes);
    };

    return {
        x: console.log('data'),
        books: books,
        recipes: recipes,
        addBook: addBook,
        listBooks: listBooks,
        addRecipe: addRecipe,
        addComment: addComment,
        listRecipes: listRecipes,
        returnBooks: returnBooks,
        returnRecipes: returnRecipes
    }
};

// database.addBook({name:'book1'});
// database.listBooks();