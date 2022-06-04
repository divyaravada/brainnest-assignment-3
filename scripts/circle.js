const circumferenceOfCircle = document.getElementById('circumference')
let surfaceOfCircle = document.getElementById('surface')
let RadiusCircle = document.getElementById('radius')

let Radius = 4
RadiusCircle.innerHTML = Radius

let surfaceArea = Math.PI * Radius * Radius
let circumfrerenceCircle = 2 * Math.PI * Radius


 surfaceOfCircle.innerHTML = surfaceArea
 circumferenceOfCircle.innerHTML = circumfrerenceCircle