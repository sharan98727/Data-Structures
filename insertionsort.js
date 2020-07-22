let array = [30,25,20,15,10,5];

function insertionsort(array,n){

    for(i=1;i<n;i++)
    {
///initially hole = 1 assuming a[0] already started
        let hole = i;
        value = array[i];
// elements prior to hole are compared with value at hole without decrementing it
        while(hole>0 && array[hole-1]>value)
        {
            array[hole] = array[hole-1];
            hole=hole-1;  // hole is decremented to replace that index with value
        }
        array[hole] = value;
         
    }
}

insertionsort(array,6);
console.log(array);