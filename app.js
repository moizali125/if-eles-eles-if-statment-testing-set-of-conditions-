document.write("<br>");
document.write("<h3>Question no 01</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick=" var input = prompt(`Enter a character:`);var characterType = checkCharacterType(input);alert(characterType);">Click Me</button>');
document.write("<br>");
document.write("<br>");
function checkCharacterType(character) {
    // Convert the character to its ASCII code
    var charCode = character.charCodeAt(0);

    if (charCode >= 48 && charCode <= 57) {
        return "Number";
    } else if (charCode >= 65 && charCode <= 90) {
        return "Uppercase Letter";
    } else if (charCode >= 97 && charCode <= 122) {
        return "Lowercase Letter";
    } else {
        return "Unknown";
    }
}

document.write("<h3>Question no 02</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="displayLarger();">Click Me</button>');
function displayLarger() {
    // Get the values of the two integers from the user
    var num1 = parseInt(prompt("Enter the first integer:"));
    var num2 = parseInt(prompt("Enter the second integer:"));

    // Check if the two integers are equal
    if (num1 === num2) {
        alert("The two integers are equal.");
    } else {
        // Determine the larger integer
        var larger = (num1 > num2) ? num1 : num2;
        alert("The larger integer is: " + larger);
    }
}
document.write("<br>");
document.write("<br>");

document.write("<h3>Question no 03</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="moiza()">Click Me</button>');
// Prompt the user to enter a number
function moiza() {
    var number = prompt("Enter a number:");

    // Check if the number is positive, negative, or zero
    if (number > 0) {
        alert("The number is positive.");
    } else if (number < 0) {
        alert("The number is negative.");
    } else {
        alert("The number is zero.");
    }
}
document.write("<br>");
document.write("<br>");

//question no 4

document.write("<h3>Question no 04</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques4()">Click Me</button>');
function ques4() {
    var text = prompt('please put a vowel word only one...');
    if (text === 'a' || text === 'e' || text === 'i' || text === 'o' || text === 'u') {
        alert('This is vowel word! \r Good👋')
    } else {
        alert('This is not vowel word!\rVery Bad')
    }
};
document.write("<br>");
document.write("<br>");

//question no 5

document.write("<h3>Question no 05</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques5()">Click Me</button>');
function ques5() {
    var correctPassword = "password123";
    var userInput = prompt("Enter your password:");
    if (!userInput) {
        alert("Please enter your password.");
    } else if (userInput === correctPassword) {
        alert("Correct! The password you entered matches the original password.");
    } else {
        alert("Incorrect password.");
        alert('The original password is\rpassword123')
    }
}
document.write("<br>");
document.write("<br>");


//question no 6

document.write("<h3>Question no 06</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write('var greeting;</br >    var hour = 13;</br >if (hour < 18) {</br > greeting = "Good day";</br >} else {</br > greeting = "Good evening";</br >} ')

document.write("<br>");
document.write("<br>");


//question no 7

document.write("<h3>Question no 07</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques7()">Click Me</button>');
function ques7() {
    var userInput = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

    var time = parseInt(userInput);

    if (time >= 0 && time < 1200) {
        console.log("Good morning!");
        alert("Good morning!");
    } else if (time >= 1200 && time < 1700) {
        console.log("Good afternoon!");
        alert("Good afternoon!");
    } else if (time >= 1700 && time < 2100) {
        console.log("Good evening!");
        alert("Good evening!");
    } else if (time >= 2100 && time <= 2359) {
        console.log("Good night!");
        alert("Good night!");
    } else {
        console.log("Invalid input! Please enter a time in 24-hour clock format.");
        alert("Invalid input! Please enter a time in 24-hour clock format.");
    }

}
document.write("<br>");
document.write("<br>");
document.write('<div style="color: blue;background-color: black;"><br><h1>Best OF luck<span style="font-size:50px;">👋</span></h1><br></div>')//&#128075