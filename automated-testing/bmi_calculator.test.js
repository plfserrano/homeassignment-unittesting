const bmiCalculator = require("./bmi_calculator");

test("Checks if height is 160 and weight is 51.2, bmi is close to 20", () => {
    expect(bmiCalculator(160,51.2)).toBeCloseTo(20);
});

test("Check if height is not a number",() => {
    expect(bmiCalculator("not a number",51.2)).toBeNaN();
});

test("Check if weight is not a number",() => {
    expect(bmiCalculator(160,"not a number")).toBeNaN();
});