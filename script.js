/* Exercise 2: Color picker */
var colors = [ "22ac5e", "d68236", "71b5c2", "af2655", "b34de7", "e6bd01", "104393", "ca4d94", "4a772d", "c180a7", "958112", "8d2f8d" ];

function setPreviewColor(color) {
    $(".preview").css('background-color', color);
}

$(document).on('keyup', '#color', function () {
    setPreviewColor($(this).val());
})

function addBox(color) {
    $("#colors").prepend('<div class="item" style="background-color: ' + color + ';"></div>');
}

function clearInput() {
    $("#color").val("");
}

$(document).on('click', '#add-to-favorite', function () {
    console.log("hello")
    var color = $("#color").val();
    addBox(color);
    clearInput();
    $("#color").focus();

})

$(document).on('keypress', '#color', function (event) {

    if (event.which == 13) {
        $("#add-to-favorite").trigger("click");
    }
});

$(document).ready(() => {
    colors.forEach((color) => {
        addBox(color);
    });

    setPreviewColor(colors[Math.floor(Math.random()*colors.length)]);
});

// $(document).on()