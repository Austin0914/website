function printallnumber(n){
    for(let i=1;i<=n;i++)console.log(i);
}

function printEvery3(n){
    for(let i=1;i<=n;i+=3)console.log(i);
}

function stars(n){
    let arr="";
    for(let i=0;i<n;i++)arr+="*";
    console.log(arr);
}

function isUpperCase(){
    if(!str)return false;
    let s=str[0].toUpperCase();
    if(s!=str[0])return false;
    return true;
}

function isAllUpperCase(str){
    if(!str)return false;
    let str1=str.toUpperCase();
    for(let i=0;i<str.length;i++){
        if(str1[i]!=str[i])return false;
    }
    return true;
}

function position(str){
    if(!str)console.log(-1);
    let jud=false;
    for(let i=0,a;i<str.length;i++){
        a=str[i].toUpperCase();
        if(a==str[i]){
            console.log(a);
            console.log(i);
            jud=true;
            break;
        }
    }
    if(!jud)console.log(-1);
}

function findSmallCount(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<target)count++;
    }
    console.log(count);
}

function findSmallerTotal(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<target)count+=arr[i];
    }
    console.log(count);
}

function findAllSmall(arr,target){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<target)ans.push(arr[i]);
    }
    console.log(ans);
}

function sum(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        count+=arr[i];
    }
    console.log(count);
}

function stars_1(n){
    for(let i=0;i<n;i++){
        let str="";
        for(let j=0;j<=i;j++){
            str+="*";
        }
        console.log(str);
    }
}

function stars_1(n){
    for(let i=0;i<n;i++){
        let str="";
        for(let j=0;j<=i;j++){
            str+="*";
        }
        console.log(str);
    }
}

function makeStars(n){
    let str="";
    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            str+="*";
        }
        str+="\n";
    }
    console.log(str);
}

function stars2(n){
    let k=n;
    for(let i=0;i<n*2-1;i++){
        let str="";
        if(i>=n/2){k--;l=k}
        else l=i;
        for(let j=0;j<=l;j++){
            str+="*"; 
        }
        console.log(str);
    }
    console.log("\n");
}

function table(n){
    for(let i=1;i<=10;i++){
        let str="";
        str+=(n).toString()+" x ";
        str+=(i).toString()+" = "+(n*i).toString();
        console.log(str);
    }
    
}

function table9to9(){
    for(let i=1;i<=9;i++){
        for(let j=1;j<=9;j++){
            let str="";
            str+=(i).toString()+" x ";
            str+=(j).toString()+" = "+(j*i).toString();
            console.log(str);
        }
    }
}

function fib(n){
    let arr=[0,1,1],sum=0;
    for(let i=2;i<=n;i++){
        arr.push(arr[i]+arr[i-1]);
    }
    console.log(arr[n]);
}

function reverse(str){
    let ans="";
    for(let i=str.length-1;i>=0;i--){
        ans+=str[i];
    }
    console.log(ans);
}

function swap(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        if(str[i]==str[i].toUpperCase()){
            ans+=str[i].toLowerCase();
        }else{
            ans+=str[i].toUpperCase();
        }
    }
    console.log(ans);
}

function findMin(arr){
    if(arr.length==0)return undefined;
    let min=1000000;
    for(let i=0;i<arr.length;i++){
        if(min>arr[i])min=arr[i];
    }
    console.log(min);
}
