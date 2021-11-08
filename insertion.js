function insertionSort(arr) {
    if(arr.length===0)return arr;
    let sorted=[arr[0]]
    for(let i=1;i<arr.length;i++){
        let max = sorted[sorted.length-1]
        if(arr[i]>=max){
            sorted.push(arr[i])
        }
        else{
            insert(sorted, arr[i])
        }

    }
    return sorted;
}

function insert(arr, element){
    let left=0;
    let right = arr.length-1;
    let index;
    while(right-left >=0){
        let middle= Math.floor((left+right)/2)
        let current = arr[middle]
        let next = arr[middle+1]
        // console.log(middle,arr[middle])
        if(current===element || (current < element && next > element)){
            index=middle+1;
            break
        }
        else if(current>element){
            right = middle-1
            
        }
        else if(current<element){
            left = middle + 1
        }
    }
    return arr.splice(index,0,element)
}
console.log(insert([1,2,3,5,6,7],4));
module.exports = insertionSort;