//// reverse a string

let string = "god is there";
let n = string.length;
let output = ''
//console.log(n)

function reversestring(string){

     n = n-1 ; 
    if(n<0)
    {
        return;
    }
    output += string[n] ;
    if(n==0){
        console.log(output);
        }
    reversestring(string);
     return;
}


reversestring(string);