


const quickSort = (array, start = 0, end = array.length - 1) => {

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

        const temp = array[start]
        array[start] = array[j];
        array[j] = temp;
        return j;
    }
    if (!Array.isArray(array) || array === null) {
        return undefined;
    }
    
    if (start >= end) {
        return;
    };
    const pivotIndex = partition(array, start, end)
    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
    return array;
}




module.exports = { quickSort };