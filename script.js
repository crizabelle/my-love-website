// =====================================
// CHANGE YOUR START DATE HERE ❤️
// =====================================

const startDate = new Date("2025-07-06T00:00:00");


// =====================================
// UPDATE THE COUNTER
// =====================================

function updateCounter() {

    const now = new Date();

    let difference = now - startDate;

    // Prevent negative numbers
    if (difference < 0) {
        difference = 0;
    }


    // Convert milliseconds to seconds
    const totalSeconds =
        Math.floor(difference / 1000);


    // Calculate days
    const days =
        Math.floor(totalSeconds / 86400);


    // Calculate hours
    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    // Calculate minutes
    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    // Calculate seconds
    const seconds =
        totalSeconds % 60;


    // Show the numbers
    displayNumber("days", days, 3);

    displayNumber("hours", hours, 2);

    displayNumber("minutes", minutes, 2);

    displayNumber("seconds", seconds, 2);
}


// =====================================
// PUT EACH DIGIT INTO ITS OWN BOX
// =====================================

function displayNumber(name, number, digits) {

    let value =
        String(number).padStart(digits, "0");


    for (let i = 0; i < digits; i++) {

        const element =
            document.getElementById(
                name + (i + 1)
            );

        if (element) {
            element.textContent =
                value[i];
        }
    }
}


// =====================================
// UPDATE EVERY SECOND
// =====================================

setInterval(updateCounter, 1000);


// Run immediately
updateCounter();