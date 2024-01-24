

function bubbleSort(array) {

    //the first thing Im thinking about is swapping elements, as
    //we progress down the array

    //first declare a loop
    for (let i = 0; i < array.length; i++) {

        console.log("i:", i)
        console.log("Array@i:", array[i]);

        for (let j = 0; j < array.length - 1; j++) {

            console.log("Array@j:", array[j]);
            console.log("Array@j+1:", array[j + 1]);
            console.log("----------------------")

            if (array[j] > array[j + 1]) {
                const lower = array[j + 1]
                array[j + 1] = array[j];
                array[j] = lower;
            }
            console.log("My Array is:", array)
        }
    }
    return array;
}

console.log(bubbleSort([1, 4, 2, 5, -2, 3]))




module.exports = { bubbleSort };
