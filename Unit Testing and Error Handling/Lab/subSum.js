function subSum(arr, startIndex, endIndex) {

    let result = 0;

    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0
    }

    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1
    }

    for (let i = startIndex; i <= endIndex; i++) {
        if (typeof (arr[i]) === "number") {
            result += arr[i]
        } else {
            return NaN
        }


    }

    return result;

}
console.log(subSum('text', 0, 2))