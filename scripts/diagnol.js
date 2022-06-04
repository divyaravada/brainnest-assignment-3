const DiagonalResult = document.getElementById('DiagResult')
let lengthOfEachSide = document.getElementById('givenNumber') 

function findDiagonal(findLength)
{
    return Math.sqrt(2) * findLength;
}
 

initialValue = 9;
 

DiagonalResult.innerHTML = findDiagonal(initialValue).toFixed(6);
lengthOfEachSide.innerHTML = initialValue
console.log(findDiagonal(initialValue).toFixed(6))
