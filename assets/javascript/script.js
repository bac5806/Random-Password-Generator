alert("Hello!");

var lowerCaseAlphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

var upperCaseAlphabet = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var special_chars = ['!', '@', '#', '$', '%', '^', '&','*', '(', ')', '/', '_', '=', '+','~', '}', '{', '|', '`', ']', '[', '\\', '<', '>', ';', ':', '.'];

var useLowerCase = confirm("Use Lower Case Letters?");
var useUpperCase = confirm("Use Upper Case Letters?");
var useNumeric = confirm("Use Numerics?");
var specialChar = confirm("Use Special Characters?")
var numChars = prompt("Number of Chartacters for random password?");

var rand_pass = "";

while (rand_pass.length != numChars)
{
    var rand_num = Math.floor(Math.random() * 3);

    switch (rand_num)
    {
        case 0:
            if (useLowerCase)
            {
                var randLowerCase = Math.floor(Math.random() * lowerCaseAlphabet.length);
                rand_pass += lowerCaseAlphabet[randLowerCase];
            }
            else {break;}
        case 1:
            if (useUpperCase)
            {
                var randUpperCase = Math.floor(Math.random() * upperCaseAlphabet.length);
                rand_pass += upperCaseAlphabet[randUpperCase];
            }
            else {break;}
        case 2:
            if (useNumeric)
            {
                var randNumeric = Math.floor(Math.random() * numeric.length);
                rand_pass += numeric[randNumeric];
            }
            else {break;}
        case 4:
            if (specialChar)
            {
                var randSpecialChar = Math.floor(Math.random() * special_chars.length);
                rand_pass += special_chars[randSpecialChar];
            }
            else {break;}
    }
}

alert(rand_pass);


