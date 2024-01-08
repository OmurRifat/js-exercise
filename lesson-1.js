function solution (decimal){
// to convert positive decimal to binary
let binary = decimal.toString(2);
let maxLength = 0;
let updatedBinary = binary.split("1");
if (updatedBinary[updatedBinary.length - 1] !== "") {
    updatedBinary.pop()
}
updatedBinary.forEach(item => {
    if (item.length > maxLength) {
        maxLength = item.length
    }
})
if (maxLength === 0)
    return 0;
else
    return maxLength;
}