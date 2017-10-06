$(function() {
    //Clear user auth data
    sessionStorage.clear();
    $("#viewHome").show();

    // Bind the navigation menu links
    $('#linkHome').click(showHomeView);
    $('#linkListBooks').click(showListBooksView);
    $('#linkCreateBook').click(showCreateBookView);
    $('#linkSearch').click(showSearch);

    function showView(viewName) {
        //hide all viewvs and show the selected view only
        $("main > section").hide();
        $("#" + viewName).show();
    }

    function showHomeView() {
        showView("viewHome");
    }
  
    function showListBooksView() {
        showView("viewListBooks");
        
    }
    $('#viewListBooks').click(()=>{
        controller.commandProcessor.listBooksCommand();
        showListBooksView();
    })

    function showCreateBookView() {
        showView("viewCreateBook");
        $("#formCreateBook").trigger("reset");
    }

    function showEditBookView() {
        showView("viewEditBook");
    }

    function showSearch() {
        showView("search");
    }

    //Bind the form submit Buttons
   // $("#formLogin").submit(loginUser);
   // $("#formRegister").submit(registerUser);
    $("#buttonCreateBook").click(()=>{
        x: console.log('clicked');
         controller.commandProcessor.createProcess();

    //      let bookData = {
    //         title: $("#formCreateBook input[name=title]").val(),
    //         author: $("#formCreateBook input[name=author]").val(),
    //         description: $("#formCreateBook textarea[name=descr]").val()
    //     };

    //    let book = factory.createBook(bookData.title, bookData.author, bookData.description);
    //    databaseFunction.addBook(book);
    //    console.log(database.books);
        });
  //  $("#buttonEditBook").click(editBook);
});