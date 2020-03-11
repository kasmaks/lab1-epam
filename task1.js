
void function setValueForProgressBar() {
    let progress = document.getElementsByTagName("progress")[0];
    let num = Math.floor(Math.random() * 100);
    progress.value = num;
    let progressOutput = document.getElementById("progressOutput");
    progressOutput.value = num;
}();


void function drawRect() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    var my_gradient = context.createLinearGradient(0, 0, 300, 0);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(1, "white");
    context.fillStyle = my_gradient;
    context.fillRect(0, 0, 300, 225);
}();

let addImageButton = document.getElementById("addImageButton");

addImageButton.addEventListener("click", () => {
    var temp = document.getElementById("imageTemplate");
    var clon = temp.content.cloneNode(true);
    document.getElementsByClassName("images")[0].appendChild(clon);
});

let openDialog = document.getElementById("openDialog");
let closeDialog = document.getElementById("closeDialog");

openDialog.addEventListener("click", () => {
    let dialog = document.getElementById("dialog"); 
    dialog.show(); 
});

closeDialog.addEventListener("click", () => {
    let dialog = document.getElementById("dialog"); 
    dialog.close(); 
});