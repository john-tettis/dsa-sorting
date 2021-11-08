function bubbleSort(arr) {
    let count=0;
    for(let i=0;i<arr.length;i++){
        let swapped = false;
        for(let j=0;j<arr.length-i;j++){
            count++
            if(arr[j]>arr[j+1]){
                swapped=true;
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]] 
            }

        }
        if(!swapped){
            console.log({count})
            return arr
        }
    }
    return arr
}

module.exports = bubbleSort;