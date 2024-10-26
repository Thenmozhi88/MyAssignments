
//Palindrome Program
/*
function isPalindrome(str){
    let reversedStr = ""
    let charLength = str.length
    for(i=charLength-1;i>=0;i--){
        reversedStr = reversedStr + str[i].toLowercase
      
    }
    console.log("Given string " + str)
    console.log("reversed string " + reversedStr)
    if(str.toLowercase === reversedStr){
        console.log("Palindrome")
        return true
    }
    else
    {
        console.log("Not a palindrome")
        return false
    }
}


console.log(isPalindrome("racecar"))
console.log(isPalindrome("Thenmozhi"))

*/
//Program for grade
/*
function gradeCalculation(score){
    let gscore
switch(true){
    case (score <= 100 && score >= 90):
        gscore = 'A'
         break
    
    case (score <= 89 && score >= 80):
        gscore = 'B'
         break
    
    case (score <= 79 && score >= 70):
        gscore = 'C'
         break
    
    case (score <= 69 && score >= 60):
        gscore = 'D'
         break
    
    default:
        return "INVALID SCORE"
    }
    return gscore

}


let output = console.log("Grade is " + gradeCalculation(78))
output = console.log("Grade is " + gradeCalculation(90))
*/

//print the odd numbers 1 to 25
/*
function printOddnum(num){
    let startNum=0
    let oddNumbers
    for(i=startNum; i<=num; i++){
        if(i % 2 !== 0){
            oddNumbers = i
            console.log("Odd number" + " " + oddNumbers)
        }

    }
    
    return oddNumbers
}

printOddnum(25)

*/

//String Handling
//Example 1

function lengthOfLastword(str){
    
   if(str.length=0){
    return false
   } else {
    const words = str.trim().split(' ');
    const lengthOfLastword = words[words.length-1].length
    return lengthOfLastword
   }
// 
}

console.log("Length of the lastword" + " " +lengthOfLastword("Hello world"))
console.log("Length of the lastword" + " " + lengthOfLastword(" fly me to the moon"))

//Check Anagram
//Example 2

function checkAnagram(str1,str2){
    firstStr=str1.trim()
    secondStr=str2.trim()
    if(firstStr.length != secondStr.length){
        console.log("String size " + firstStr + " "+ secondStr + " "+ "is not equal and it is not an anagram")
        return false
    }else{
        console.log("String size " + firstStr + " "+ secondStr + " "+ "is equal and it is an anagram")
        return (console.log(firstStr===secondStr))
    }
}

let checkAnagStr = checkAnagram("java", "avja")
checkAnagStr = checkAnagram("java", "playwright")


