


const quickSort = (array, start = 0, end = array.length - 1) => {

    const partition = (array, start, end) => {

        const pivot = array[start];
        let i = start + 1;
        let j = end;

        while (i < j) {
            while (array[i] <= pivot) {
                i++;
            }
            while (array[j] >= pivot) {
                j--
            }
            if (i < j) {
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        const temp = array[start]
        array[start] = array[j];
        array[j] = temp;
        return j;
    }

    if (start >= end) {
        return;
    };
    const pivotIndex = partition(array, start, end)
    quickSort(array, start, pivotIndex-1);
    quickSort(array, pivotIndex + 1, end);
}


// const quickSort = (array, start, end) => {
//     if (start >= end) {
//         return;
//     }

//     const pivotIndex = partition(array, start, end);
//     quickSort(array, start, pivotIndex - 1); // Sort elements before pivot
//     quickSort(array, pivotIndex + 1, end);   // Sort elements after pivot
// };

const partition = (array, start, end) => {
    const pivot = array[start];
    let i = start + 1;
    let j = end;

    while (i <= j) {
        while (i <= j && array[i] <= pivot) {
            i++;
        }
        while (i <= j && array[j] >= pivot) {
            j--;
        }
        if (i <= j) {
            // Swap elements at i and j
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Swap pivot with the element at index j
    [array[start], array[j]] = [array[j], array[start]];

    return j; // Return the index where the pivot is now located
};

// Example usage
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]













module.exports = { quickSort };