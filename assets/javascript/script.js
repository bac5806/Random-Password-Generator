// lower case alphbet array
var lowerCaseAlphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

// upper case alphbet array
var upperCaseAlphabet = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// numbers array
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// special characters array
var special_chars = ['!', '@', '#', '$', '%', '^', '&','*', '(', ')', '/', '_', '=', '+','~', '}', '{', '|', '`', ']', '[', '\\', '<', '>', ';', ':', '.'];

// this function contains all the logic 
// for generating the password so that it 
// can be used to display the result
// on the browser screen
function generate_password()
{
    // these variables determine which characters
    // will be used in the password and are set
    // based on the users input 
    var useLowerCase = confirm("Use Lower Case Letters?");
    var useUpperCase = confirm("Use Upper Case Letters?");
    var useNumeric = confirm("Use Numerics?");
    var specialChar = confirm("Use Special Characters?")

    // this function compares the inputs
    // to a number to determine if it
    // is an integer or not 
    function isNumber(n)
    {
        return Number(n) === n;
    }

    // create boolean and set it to false.
    // this will be used to determine if the user's
    // input is valid. (is a number and is within the 
    // given range)
    var isValidChar = false;

    // break from loop when boolean becomes true
    while (!isValidChar)
    {
        // get number of characters from user
        var numChars = prompt("Number of Chartacters for random password?");

        // convert string input to integer
        numChars = parseInt(numChars);
        
        // if the user input is a number and is within the given
        // range, set isValidChar to true and break from loop
        if ((isNumber(numChars)) && (numChars >= 8 && numChars <= 128))
        {
            isValidChar = true;
            break;
        }
        else
        {
            // alert the user if the given input is invalid 
            alert("Please enter a valid number between 8 and 128.");
        }
    }

    // create an empty string
    var rand_pass = "";
    // run loop until the string length
    // is equal to the number of characters
    // given by the user
    while (rand_pass.length != numChars)
    {
        // random number 
        var rand_num = Math.floor(Math.random() * 4);
        // console.log("random number: " + rand_num);

        // switch case using random number variable
        switch (rand_num)
        {
            // string varaible will be used to create the
            // password, the program will enter the different
            // cases based on the users input from the confirms
            case 0:
                if (useLowerCase)
                {
                    // create a varaible that will randomly select
                    // a character from the lowerCaseAlphabet array
                    var randLowerCase = Math.floor(Math.random() * lowerCaseAlphabet.length);
                    rand_pass += lowerCaseAlphabet[randLowerCase];
                }
                else {break;}
            case 1:
                if (useUpperCase)
                {
                    // create a varaible that will randomly select
                    // a character from the upperCaseAlphabet array
                    var randUpperCase = Math.floor(Math.random() * upperCaseAlphabet.length);
                    rand_pass += upperCaseAlphabet[randUpperCase];
                }
                else {break;}
            case 2:
                if (useNumeric)
                {
                    // create a varaible that will randomly select
                    // a character from the number array
                    var randNumeric = Math.floor(Math.random() * numeric.length);
                    rand_pass += numeric[randNumeric];
                }
                else {break;}
            case 3:
                if (specialChar)
                {
                    // create a varaible that will randomly select
                    // a character from the special chatacter array
                    var randSpecialChar = Math.floor(Math.random() * special_chars.length);
                    rand_pass += special_chars[randSpecialChar];
                }
                else {break;}
        }
    }
    // set an getElementById so that it can be 
    // used in the HTML file to put the
    // password on the website

    // document.getElementById("output").innerHTML = rand_pass;

    // send an alert with password
    alert(rand_pass);
}

