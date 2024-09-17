import Validator from "./classes/Validator";

const validator = new Validator;

let testString = "12+4*5/2";

let testResult = validator.Validate(testString);

console.log(`Result for "${testString}": ${testResult}`);

testString = "12++4*5/2";

testResult = validator.Validate(testString);

console.log(`Result for "${testString}": ${testResult}`);

testString = "12+(4*5/2)";

testResult = validator.Validate(testString);

console.log(`Result for "${testString}": ${testResult}`);

testString = "12+(4*5/2+)";

testResult = validator.Validate(testString);

console.log(`Result for "${testString}": ${testResult}`);

testString = "12+(4*5/2)+";

testResult = validator.Validate(testString);

console.log(`Result for "${testString}": ${testResult}`);

testString = "12+4*5/2+";

testResult = validator.Validate(testString);

console.log(`Result for "${testString}": ${testResult}`);

testString = "12+(4*(5/2))";

testResult = validator.Validate(testString);

console.log(`Result for "${testString}": ${testResult}`);