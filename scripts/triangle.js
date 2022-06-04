const TraingleResult = document.getElementById('TriangleResult')
let SideOne = document.getElementById('sideOne')
let SideTwo = document.getElementById('sideTwo')
let SideThree = document.getElementById('sideThree')

let side1 = 5; 
let side2 = 6; 
let side3 = 7; 
let perimeter = (side1 + side2 + side3)/2;


SideOne.innerHTML = side1
SideTwo.innerHTML = side2
SideThree.innerHTML = side3
let areaOfTheTriangle =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
TraingleResult.innerHTML = areaOfTheTriangle
console.log(areaOfTheTriangle);