// For the purposes of this Kata, you may assume that all inputs are valid (i.e. arrays containing only positive integers with a length of at least 2).
// For example:
// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

function inOrder(arr){
    for(let i=0;i<arr.length;i++){
      if (arr[i]>arr[i+1]){
        return false;
      } 
    }
    return true
   }
