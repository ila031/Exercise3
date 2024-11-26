$(document).ready(function () {
    const cat = $("#cat");
    const message = $("#message");

    // Function to change the cat's state and message
    function changeState(state, text) {
        cat.attr("class", state); // Add the new state class
        message.text(text);       // Update the message
    }

    // Event handlers for different interactions
    cat.hover(
        function () {
            changeState("happy", "Purr... You make me happy!");
        },
        function () {
            changeState("sad", "Meow... Don't leave me!");
        }
    );

    // Left-click event to make the cat angry and start shaking if button is held
    cat.on("mousedown", function (event) {
        if (event.button === 0) { // Left mouse button (button 0)
            changeState("angry", "Hiss! That was rude!"); // Set cat to angry state
            cat.addClass("shake"); // Start shaking animation
        }
    });

    // Remove shake when left mouse button is released
    cat.on("mouseup", function (event) {
        if (event.button === 0) { // Left mouse button (button 0)
            cat.removeClass("shake"); // Remove the shake class
        }
    });

    // Right-click event to make the cat sleepy
    cat.on("contextmenu", function (event) {
        event.preventDefault(); // Prevent the default context menu
        changeState("sleepy", "Zzz... I'm going to sleep."); // Set cat to sleepy state
    });

    // Double-click event to make the cat surprised and double in size
    cat.dblclick(function () {
        changeState("surprised", "Mew?! What was that?");
        cat.css("transform", "scale(1.2)"); // Double the size
        // Reset to original size after 2 seconds
        setTimeout(function() {
            cat.css("transform", "scale(1)"); // Reset to original size
        }, 1000); // Time for which the cat stays doubled
    });

    // Reset to neutral after inactivity
    let inactivityTimer;
    cat.on("mouseleave", function () {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            changeState("neutral", "Hello, I'm Cat!");
            cat.css("transform", "scale(1)"); // Reset to original size
        }, 5000);
    });
});
