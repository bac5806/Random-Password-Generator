// lower case alphbet array
var lowerCaseAlphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

// upper case alphbet array
var upperCaseAlphabet = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// numbers array
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// special characters array
var specialChars = ['!', '@', '#', '$', '%', '^', '&','*', '(', ')', '/', '_', '=', '+','~', '}', '{', '|', '`', ']', '[', '\\', '<', '>', ';', ':', '.', '?'];

// generate and return random number 
function randomNumberGen(length) {
    return Math.floor(Math.random() * length);
}

// validate the users input is within the given range
function checkRange(input) {
    return ((input >= 8) && (input <= 128));
}

// main function
function getPswd() {

    var isValidRange = false;
    while (isValidRange == false) {
        // prompt user for number of characters in password
        var numChars = prompt("Choose your password length.\nNeeds to be atleast 8 characters long, but no more than 128.");
        if (checkRange(numChars)) {
            isValidRange = true;
        }
    }

    // confirm password citeria
    var useLowerCase = confirm("Use Lower Case Letters?");
    var useUpperCase = confirm("Use Upper Case Letters?");
    var useNumeric = confirm("Use Numerics?");
    var useSpecialChar = confirm("Use Special Characters?")

    // empty string for password
    randomPswd = "";

    while (1)
    {
        // run loop until string is same length as user input
        if (randomPswd.length === Number(numChars)) {break;}

        // get random number for switch case
        var randomNum = randomNumberGen(4);

        // add charcters to the string based on the users input
        switch (randomNum)
        {
            case 0:
                if (useLowerCase)
                {   // get a random char from the lower case alphabet array
                    var randomChar = randomNumberGen(lowerCaseAlphabet.length);
                    randomPswd += lowerCaseAlphabet[randomChar];
                }
                break;
            case 1:
                if (useUpperCase)
                {
                    // get a random char from the upper case alphabet array
                    var randomChar = randomNumberGen(upperCaseAlphabet.length);
                    randomPswd += upperCaseAlphabet[randomChar];
                }
                break;
            case 2:
                if (useNumeric)
                {
                    // get a random char from the number array
                    var randomChar = randomNumberGen(numeric.length);
                    randomPswd += numeric[randomChar];
                }
                break;
            case 3:
                if (useSpecialChar)
                {
                    // get a random char from the special character array
                    var randomChar = randomNumberGen(specialChars.length);
                    randomPswd += specialChars[randomChar];
                }
                break;
        }
    }
    // create element variable
    var myElement = document.getElementById("password");
    // shrink the font size if the password is longer than 65
    if (randomPswd.length >= 65) {
        myElement.setAttribute("style", "font-size: 24px;")   
    }
    // set text content of html element to the random password
    myElement.textContent = randomPswd;
}

