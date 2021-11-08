function merge(arr1,arr2){
    let results=[];
    let i=0;
    let j=0;
    while(i<arr1.length || j<arr2.length){
        let val1= arr1[i];
        let val2= arr2[j];
        if(!val1 && val1!==0){
            let copy = [...arr2]
            results.push(...copy.slice(j))
            break
        }
        if(!val2 && val2!==0){
            let copy = [...arr1]
            results.push(...copy.slice(i))
            break
        }
        if(val1> val2){
            j++;
            results.push(val2)
        }
        else{
            i++;
            results.push(val1)
        }
    }
    return results;
}

function mergeSort(arr) {
    if(arr.length<=1){
        return arr
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))


}

module.exports = { merge, mergeSort};