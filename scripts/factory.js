const factory = (function () {

    function IDgen() {
        let id = 0;
        return id++;
    }

    function createBook(author, title, descr) {
        return {
            id: IDgen(),
            author: author,
            title: title,
            descr: descr
        }
    }
    return {
        createBook: createBook
    }
})();

let x = [];

x.push(factory.createBook('author','title','alala'));

console.log(x);