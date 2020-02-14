// Click on X to delete item
$("ul").on("click", "span", function (event) {
    // This is the span
    $(this).parent().fadeOut(function () {
        // Remove entire li
        $(this).remove(); // Refers to li, not the span
    });
    event.stopPropagation(); // jQuery that will prevent event from bubbling up
});

// Check if the word the user entered is a pyramid word
$("input[type='text']").keypress(function (event) {
    var size = 0;
    var letterCounter = {};
    // Check for enter key
    if (event.which === 13) {
        var word = $(this).val().toLowerCase();
        if (word === "") {
            alert("Please enter a word with no spaces.");
        } else {
            $(this).val("");
            for (var i = 0; i < word.length; i++) {
                // Check if the word has any spaces or is not a letter
                if (word[i] === " " || (word[i] === word[i].toUpperCase())) {
                    alert("Please enter a word with no spaces and only letters.");
                    return;
                } else {
                    // Track the number of times each character appears
                    if (isNaN(letterCounter[word[i]])) {
                        letterCounter[word[i]] = 1;
                        size++;
                    } else {
                        letterCounter[word[i]] += 1;
                    }
                }
            }
            // Convert the letterCounter to an array to be sorted
            counts = []
            for (var [key, value] of Object.entries(letterCounter)) {
                counts.push(value);
            }
            counts = counts.sort();
            // Add the word to the ul and indicate whether it is a pyramid word or not
            if (counts.length === 1) {
                $("ul").append("<li><span><i class='fa fa-trash'></i></span> <i class='fa fa-check check-li mr-3'></i> " + word + "</li>");
            } else {
                for (var i = 1; i < size; i++) {
                    if (counts[i] !== counts[i - 1] + 1) {
                        $("ul").append("<li><span><i class='fa fa-trash'></i></span> <i class='fa fa-times error-li mr-3'></i> " + word + "</li>");
                        console.log(counts);
                        return;
                    }
                }
                $("ul").append("<li><span><i class='fa fa-trash'></i></span> <i class='fa fa-check check-li mr-3'></i> " + word + "</li>");
            }
        }
    }
});