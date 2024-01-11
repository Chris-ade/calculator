/*
  * Simple Calculator App
  * Coded by Chris Adebiyi
  * https://chrisade.pythonanywhere.com
*/

const screen = document.getElementById('first_screen');
const screen2 = document.getElementById('second_screen');
const buttons = document.querySelectorAll(".button[data-type=simple]");
const clearBtn = document.getElementById("clear");

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Checks if a certain button is clicked
        if (this.id === "clear") {
            // Clear the input screens
            clearScreen();
        } else if (this.id === "percent") {
            // Append percentage sign;
            calculate("percent");
        } else if (this.id === "equals") {
            // Calculates expression
            calculate();
        } else if (this.id === "delete") {
            // Backspace characters on the screen
            backspace();
        } else {
            // Append the text content to the screen
            appendToScreen(this.textContent);
        }


        // Checks if no the input screens have no values
        if (screen.value == "") {
            // Changes the text to AC
            clearBtn.textContent = "AC";
        } else {
            // Changes the text to C
            clearBtn.textContent = "C";
        }
    });
});

const appendToScreen = (value) => {
    screen.value += value;
}

const backspace = () => {
    screen.value = screen.value.slice(0, -1);
}

const clearScreen = () => {
    screen.value = '';
    screen2.value = '';
}

const calculate = (type) => {
    const screenValue = screen.value;
    try {
        if (type === "percent") {
            const result = screenValue / 100;
            if (isNaN(result)) {
                screen.value = 'Syntax Error';
                screen2.value = 'Syntax Error';
            } else {
                screen.value = result;
                screen2.value = result;
            }
        } else {
            const sanitized = sanitize(screenValue);
            const result = evaluate(sanitized);
            if (isNaN(result)) {
                screen.value = 'Syntax Error';
                screen2.value = 'Syntax Error';
            } else {
                screen2.value = result;
            }
        }
    } catch (error) {
        screen2.value = 'Error';
    }
}

const sanitize = (expression) => {
    // Remove anything that is not a digit, operator, or a dot.
    const sanitized = expression.replace(/[^0-9+\-*/.]/g, '');
    return sanitized;
}

const evaluate = (expression) => {
    // Use a safer way to evaluate the expression (e.g., Function constructor)
    const safeEval = new Function('return ' + expression);
    return safeEval();
}
