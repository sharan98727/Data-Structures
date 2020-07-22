let array = [2,7,4,1,5,3];
let n = array.length;
let k=0;
let a = 0;

function selectionsort(array,n){

  for(i=0;i<n-1;i++)
  {
    console.log(a++);
     imin=i;
    for(j=i+1;j<n;j++)
   
    {
      console.log(k++);
        if(array[j]<array[imin])
        {
          imin = j;
        }
        
         
    }
    swap = array[i];
    array[i] = array[imin];
    array[imin] =swap;
   // console.log(array);
  }
  

}

selectionsort(array,n);
console.log(array);