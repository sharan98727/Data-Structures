  
  let array = [3,1,2,5,6,4];
  let x = array.length - 1;
  function quicksort (array,start,end){

       if(start<end)
       {
  // partitionIndex is point where left side elements are lesser and rightside are greater than pivot
         let partitionIndex = partition(array,start,end);
         quicksort(array,start,partitionIndex-1);
         quicksort(array,partitionIndex+1,end)

         function partition(array,start,end)
         {
             let pivot = array[end];
             let partitionIndex = start;

             for(i=start;i<end;i++)
             {

   ////agenda is to move partitionindex to position where left side numbers to PaIndex are lesser than pivot
               if(array[i]<=pivot)
               {
                    swap=array[i];
                    array[i]=array[partitionIndex]; 
                    array[partitionIndex]=swap;

                    partitionIndex++; // partitonindex is increased until where the elements to left are lesser than pivot
               }
              
             }
             //swapping the pivot element with element at partitioniindex
             swap2 = array[partitionIndex];
             array[partitionIndex]=array[end];
             array[end]=swap2;
             console.log(array);
             return partitionIndex; //vvip

         }
       }
  }

  quicksort(array,0,x);
  console.log(array);