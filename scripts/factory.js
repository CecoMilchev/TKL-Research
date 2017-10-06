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
    return {
        x: console.log("factroy"),
        createBook: createBook
    }
};

// let x = [];

// x.push(factory.createBook('author', 'title', 'alala'));

// console.log(x);