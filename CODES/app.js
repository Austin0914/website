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
    