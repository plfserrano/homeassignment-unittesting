function calculateBMI(height,weight){ //height in cm, weight in kg
    // bmi = weight / (height^2)
    let bmi = weight / ((height/100) ** 2);
    return bmi;
}

// If height = 160, weight = 51.2, bmi = 20
// If height = "not a number", weight = 78, bmi = NaN
// If height = 175, weight = "not a number", bmi = NaN

console.log(calculateBMI(160, 51.2)); // Correct (Approx)
console.log(calculateBMI("not a number", 78)); // Correct
console.log(calculateBMI(175, "not a number")); // Correct
