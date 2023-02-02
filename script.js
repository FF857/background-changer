
var button = document.getElementById("button");
var dark_theme = false;

function change_background(){

    if (dark_theme == false){

        dark_theme = true;
        document.body.style.background = "#202020";
        button.style.background = "#e1e1e1";
        button.style.color = "#202020";
    }
    else {
        dark_theme = false;
        document.body.style.background = "#e1e1e1";
        button.style.background = "#202020"
        button.style.color = "#e1e1e1";
    }
}