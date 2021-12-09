var readlinesync=require("readline-sync");
var user=readlinesync.question("Please enter your name")
let question_list=["Who is known as the Iron Man of India? ","Who was the first President of India? ","What is the full form WWW?","Who was the first Prime Minister of India?","Who invented Computer?"]
console.log("-: THIS IS YOUR QUESTION :-")
answer_list=["Sardar Vallabhbhai Patel","Rajendra Prasad","World Wide Web","Jawaharlal Nehru","Charles Babbage"]
option_list=[["swami vivekanand","Sardar Vallabhbhai Patel","aurobindo ghosh","Dr. Rajendara parsad"],["Rajendra Prasad","v.v giri","zakir husain","a.p.j abdul kalam"],["World Wide Web","world wibe web","work wibe web","world wall web"],["gulzarilal nanda","rabindra nath tagore","Jawaharlal Nehru","sardar patel"],["Charles Babbage","grenville","farenheil","Einstein"]]
let score=0
let index=0
let final_score=5
while (index<question_list.length){
console.log(index+1,question_list[index])

let j=0
while (j<option_list[index].length){
    console.log(j+1,option_list[index][j]) 
    j=j+1
}
var input=require("readline-sync")
let answer=input.question("Enter the correct answer:-")
    if (answer===answer_list[index]){
        console.log("congrats!🥳 your answer is correct")
        score+=1
        console.log("Your Score",score)
        console.log("Highest Score",final_score)
        console.log("******")
    }
    else{
        console.log("oops! your answer is wrongv😞")
        console.log("Your Score",score)
        console.log("Highest Score",final_score)
        console.log("******")
    }
index++
}
if (final_score===score){
    console.log("*WOW YOU ARE THE WINNER OF THIS GAME 🥳")
}
else{
    console.log("*SORRY YOU ARE THE LOOSER OF THIS GAME😞*")
}
console.log("*THANKS FOR PLAYING THIS GAME😘")
