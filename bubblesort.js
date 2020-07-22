let array = [2,7,4,1,5,3];
function bubblesort(array,n){
for(k=1;k<=n-2;k++){
    let flag = 0;
// k is used to prevent iterations[for each increase in k the last element need not be compared]
    for(i=0;i<=n-k-1;i++)
    // n-k-1 indicates that sorted bubble is not compared again.
    {
        if(array[i]>array[i+1])
        {
// in each loop one sorted element pops up as last element like an bubble
            swap = array[i];
            array[i] = array[i+1];
            array[i+1] = swap ; 
            flag++;
        }
      
    }
      if(flag==0)
        {                    
            return;// condition checking if the array is already sorted in very for loop
        }
  }
}
bubblesort(array,6);
console.log(array);