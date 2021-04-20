
let arr = [5,6,23,12,9,8,7,11,1,2,3,4]

function filterRangeInPlace(arr,a,b){

  arr = arr.filter(e => e>=a && e<=b)
  alert(arr)
}
filterRangeInPlace(arr, 5, 12 )
 


