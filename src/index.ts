import Validator from "./classes/Validator";

const validator = new Validator;

const testString = "12+4*5/2";

const testResult = validator.Validate(testString);

console.log(`Result for "${testString}": ${testResult}`);