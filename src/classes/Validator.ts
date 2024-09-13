export default class Validator {

    Validate(input: string): boolean {

        let lastToken = [];

        const numberRegEx = new RegExp("^[0-9]$");

        for (let index = 0; index < input.length; index++) {
            const char = input.charAt(index);
            
            if(numberRegEx.test(char)) lastToken.push(char);

            return false;
        }
    }

}