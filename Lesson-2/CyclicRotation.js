let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rotation = 99;
function solution(A, K) {
    let updatedArray = [];
    if (A.length === 1)
        return A;
    else if (A.length === K)
        return A;
    else if (K % A.length === 0 && A.length < K)
        return A;
    else if (K % A.length !== 0 && A.length < K) {
        let l = K / A.length;
        let k = K - Math.floor(l) * A.length;
        A.forEach((item, index) => {
            if (index + k < A.length)
                updatedArray[index + k] = item;
            else
                updatedArray[index + k - A.length] = item;
        })
        return updatedArray;
    }
    else {
        A.forEach((item, index) => {
            if (index + K < A.length)
                updatedArray[index + K] = item;
            else
                updatedArray[index + K - A.length] = item;
        })
        return updatedArray;
    }

}
console.log(solution(arr, rotation));