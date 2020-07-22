let x = 'tattarrattat';
let y=0;
let n = x.length-1;

function ispallindrome (x,y,n){

        if(x[y]===x[n])
        {
           //console.log('it is pallindrome');
        }
        else{
            console.log('not a palindrome');
            return;
        }
        if(y==n||(n-y==1)&& x[y]===x[n])
        {
            console.log('pallindrome');
            return;
        }
        ispallindrome(x,y+1,n-1);
}

ispallindrome(x,y,n);