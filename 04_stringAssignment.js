/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

function lengthOfLastWord(s) {
    const trimmedString = s.trim();
    const words = trimmedString.split(' ');
    console.log(words[words.length - 1]);
    if (words.length === 0) {
        return 0;
    }
    return words[words.length - 1].length;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));

function isAnagram(str1, str2) {

    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram('listen', 'silent'));  
console.log(isAnagram('hello', 'world')); 

function ispalindrome(pal) {
       pal = pal.replace(/\s/g, '').toLowerCase();

       return pal === pal.split('').reverse().join('');

}
console.log(ispalindrome('Malayalam'));