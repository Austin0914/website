# Day17
## javascript basic
## this keyword
## for loop while loop break contiue
## math object
>.PI
>.pow
>.floor
>.random
>.sqt
>.abs
## javascript guess number
```javascript
const ANSWER=Math.floor(Math.random()*99+1);
console.log(ANSWER);

let input=null,min=1,max=100;

input = Number(prompt("Guess A Number "+min+"~"+max));

while(input!=ANSWER){
    
    while(input<min||input>max){
        input = Number(prompt("Guess A Number "+min+"~"+max));
    }
    if(input==ANSWER){
        break;
    }else{
        if(input<ANSWER){
            min=input+1;
            input = Number(prompt("Guess A Number "+min+"~"+max));
        }else{
            max=input-1;
            input = Number(prompt("Guess A Number "+min+"~"+max));
        }
    }
} 
alert("Win");
```
## javascript
https://yuhsien.notion.site/JS-Practice-a692c4dc450c476a8a7d9f8fe997deda
(CODE)[CODES/Day17_js_practice.js]
