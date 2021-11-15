//test 1

/*function bubbleSort(arr, n){

    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++)
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                // swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (swapped == false)
            break;
    }

}*/

//test 2

/*let arr = [1,58,9,6,53,8]

function bubbleSort(arr){
    let current = arr[0];
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr.length; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
            }
        }
    }
    return arr;
}*/

//bubbleSort(arr);

//test 3

// Optimized implementation of bubble sort Algorithm

function bubbleSort(arr){
    
    var i, j;
    var len = arr.length;
    var isSwapped = false;

    for(i =0; i < len; i++){
        
        isSwapped = false;
        
        for(j = 0; j < len; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j]
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
    // IF no two elements were swapped by inner loop, then break 
        if(!isSwapped){
            break;
        }
    }
    // Print the array
    console.log(arr)
}
    
    
var arr = [243, 45, 23, 356, 6, 5346, 35, 5];
    
    // calling the bubbleSort Function
bubbleSort(arr)

