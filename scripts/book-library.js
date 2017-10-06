$(function() {
    //Clear user auth data
    sessionStorage.clear();
    $("#viewHome").show();

    // Bind the navigation menu links
    $('#linkHome').click(showHomeView);
    $('#linkListBooks').click(showListBooksView);
    $('#linkListRecipes').click(showListRecipesView);
    $('#linkCreateBook').click(showCreateBookView);
    $('#linkCreateRecipe').click(showCreateRecipeView);

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

    function showListRecipesView() {
        showView("viewListRecipes");

    }

    function showCommentsView() {
        showView("viewComments")
    }


    $('#linkListBooks').click(() => {
        controller.commandProcessor.listBooksCommand();
        console.log('list call');
        showListBooksView();
    })
    $('#linkListRecipes').click(() => {
        controller.commandProcessor.listRecipesCommand();
        showListRecipesView();
    })

    function showCreateBookView() {
        showView("viewCreateBook");
        $("#formCreateBook").trigger("reset");
    }

    function showCreateRecipeView() {
        showView("viewCreateRecipe");
        $("#formCreateRecipe").trigger("reset");
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
    $("#buttonCreateBook").click(() => {
        x: console.log('clicked');
        controller.commandProcessor.createProcess();

    });
    $("#buttonCreateRecipe").click(() => {
        x: console.log('clicked');
        controller.commandProcessor.createRecipeProcess();
    });
});