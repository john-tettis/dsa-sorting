/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(unsorted, start=0, end=unsorted.length){
    let arr= [...unsorted]
    let pivot = arr[start];
    let sorted = unsorted;
    sorted.length=0;
    sorted.push(pivot);
    let index= 0;

    for(let i=start+1;i<end;i++){
        let current = arr[i];
        if(current < pivot) {
            sorted.unshift(current);
            index++;
        }else{
            sorted.push(current)
        }
        
    }
    return index;
}   
var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
console.log(pivot(arr1))

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
    if(arr.length <=1) return arr
    let id = pivot(arr)
    id= id===0 ? 1:id;
    let left = arr.slice(0,id)
    let right = arr.slice(id)
    return [...quickSort(left), ...quickSort(right)]

}

module.exports = {pivot,quickSort};