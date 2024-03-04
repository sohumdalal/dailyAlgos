


//Fun one, bubble sort works by shoving larger elements of the array to the back
//and then going through the array everytime for all array.length.
//ineffcient for 2 reasons:
//BigO: n^2 
//You iterate the entire n times, if n = array.length, even if you have a sorted array already


function bubbleSort(array) {

    if (!array.length || !Array.isArray(array) || array == null) {
        return undefined;
    }

    //we first declare an outer loop which will handle where we are
    for (let i = 0; i < array.length; i++) {

        // console.log("i:", i)
        // console.log("Array@i:", array[i]);

        //we then declare an inner loop which will handle our swapping mechanism
        //when this inner loop runs out, the biggest element of that iteration will be moved towards the rear of the array
        for (let j = 0; j < array.length - 1; j++) {

            // console.log("Array@j:", array[j]);
            // console.log("Array@j+1:", array[j + 1]);
            // console.log("----------------------")

            //here is our swapping logic via a temp variable
            if (array[j] > array[j + 1]) {
                const lower = array[j + 1]
                array[j + 1] = array[j];
                array[j] = lower;
            }
            // console.log("My Array is:", array)
        }
    }
    //when we finish with our outer loop we then returnn the array
    return array;
}

console.log(bubbleSort([100,3,1,3,4]));



module.exports = { bubbleSort };
