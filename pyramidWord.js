// Click on X to delete item
$("ul").on("click", "span", function (event) {
    // This is the span
    $(this).parent().fadeOut(function () {
        // Remove entire li
        $(this).remove(); // Refers to li, not the span
    });
    event.stopPropagation(); // jQuery that will prevent event from bubbling up
});

// Add the word to the list of words when the user clicks enter
$("input[type='text']").keypress(function (event) {
    // Check for enter key
    if (event.which === 13) {
        var word = $(this).val();
        if (word === "") {
            alert("Please enter a word.");
        } else {
            $(this).val("");
            // Create a new li and add to ul
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + word + "</li>");
        }
    }
});