// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Reverse the string
    var reversedStr = cleanStr.split("").reverse().join("");
    
    // Check if the reversed string is equal to the original string
    return cleanStr === reversedStr;
    
};

