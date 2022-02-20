// To find sum of odd and even number in an array

const array = [5,2,10,15]

function oddeven(array){
    let sum = 0
    let count = 0
   for(let i=0;i<array.length;i++){
        var num = (array[i]);
        if (num%2===0){
            
             sum = sum + num
            console.log(sum,"I am even sum")
        }
        else if(num%2!=0){
        
           
            count = count+ num
            console.log("I am odd sum",count)
        }
        }
        return sum
    }

oddeven(array)


//create a function which takes two string check if other string is a substring of first or not 

let string1= "Hey I am Kritica"
let string2 = "from"
function substr (string1,string2){

    if(string1.includes(string2)){
        console.log("I am part of string 1")
    }
    else{
        console.log("i aint")
    }
}
substr(string1,string2)

//create a function which takes a string replace its vowels with x .

let string = "I love maggi";
let vowel ="aieou"
let result =""
function withoutvowel(string,vowel){
 for (i=0;i<string.length;i++){
     if(string[i]==='a'|| string[i]==='e'|| string[i]==='i'||string[i]==='o'||string[i]==='u'){
         result = result + "x"
     }
     else{
         result = result+ string[i]
     }
 }
}
withoutvowel(string)
console.log("result",result)

//create a function which takes a sentence and returns an array with all its words 
