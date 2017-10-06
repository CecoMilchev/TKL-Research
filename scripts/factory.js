const factory = function () {

    function IDgen() {
        let id = 0;
        return id++;
    }

    function createBook(title, author, description) {
        return {
            id: IDgen(),
            title: title,
            author: author,
            description: description
        }
    }
    function createRecipe(title, ingredients, directions) {
        return {
            id: IDgen(),
            title: title,
            ingredients: ingredients,
            directions: directions
        }
    }
    return {
        x: console.log("factroy"),
        createBook: createBook,
        createRecipe: createRecipe
    }
};

// let x = [];

// x.push(factory.createBook('author', 'title', 'alala'));

// console.log(x);