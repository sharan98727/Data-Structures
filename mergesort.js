// sorting logic

function Merge(left,right,array){
        
      nl = left.length;
      nr = right.length;
      let i = 0 ;
      let j= 0 ; 
      let k= 0 ;
      while(i<nl&&j<nr){
          
          if(left[i]>right[j]){
            array[k] = right[j];
            j++;
          }

          else
          {
            array[k] = left[i];
            i++;            
          }
          k++;
      }

      while(i<nl)
      {
        array[k] = left[i];
        i++;
        k++;
      }
      while(j<nr)
      {
        array[k] = right[j];
        j++;
        k++;
      }
        
  }
/// logic for dividing into smaller parts

function MergeSort(array){

    let n = array.length ;
    if(n<2)
    {
        return;
    }
    let mid = n/2 ;
    let left = [];
    let right = [];
    let x = Math.ceil(mid);

    for(let i=0;i<x;i++)
    {
        left[i] = array[i];

    }

  
    for(let i=x;i<n;i++)
    {
       // console.log(i);
          right[i-x] = array[i]; ///observe right[i-mid]
    }
  //console.log(right);
 // console.log(right);

     MergeSort(left);
     MergeSort(right);
     //console.log(array);
     Merge(left,right,array);
    

}

let array = [3,2,1,5,4,6];
MergeSort(array);

console.log(array);




