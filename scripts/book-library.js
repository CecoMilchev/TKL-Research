function startApp() {
    //Clear user auth data
    sessionStorage.clear();
    $("#viewHome").show();


    // Bind the navigation menu links
    $('#linkHome').click(showHomeView);
    $('#linkListBooks').click(showListBooksView);
    $('#linkCreateBook').click(showCreateBookView);

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
        listBooks();
    }

    function showCreateBookView() {
        showView("viewCreateBook");
        $("#formCreateBook").trigger("reset");
    }

    function showEditBookView() {
        showView("viewEditBook");
    }
}