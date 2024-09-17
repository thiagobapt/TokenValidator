export default class Validator {

    Validate(input: string): boolean {

        let tokens: string[] = [];

        const numberRegEx = new RegExp("^[0-9]$");
        const operatorRegEx = new RegExp("^[*+=/]$");
        const bracketRegEx = new RegExp("^[()]$");

        for (let index = 0; index < input.length; index++) {
            const char = input.charAt(index);
            
            if(numberRegEx.test(char)) {
                const lastIndex = tokens.length - 1;
                if(numberRegEx.test(tokens[lastIndex])) {
                    tokens[lastIndex] = tokens[lastIndex].concat(char);
                } else {
                    tokens.push(char);
                }
            }
            else if(operatorRegEx.test(char)) {
                tokens.push(char);
            }
            else if(bracketRegEx.test(char)) {
                tokens.push(char);
            } else {
                return false;
            }
        }

        let openedBrackets = 0;
        let closedBrackets = 0;

        for (let index = 0; index < tokens.length; index++) {
            const token = tokens[index];
            if((index === 0 || index === tokens.length - 1) && operatorRegEx.test(token)) return false;
            if(operatorRegEx.test(token) && operatorRegEx.test(tokens[index - 1])) return false;
            
            if(operatorRegEx.test(token) && bracketRegEx.test(tokens[index - 1])) return false;
            if(operatorRegEx.test(tokens[index - 1]) && token === ')') return false;

            if(token === '(') openedBrackets += 1;
            if(token === ')') closedBrackets += 1;
        }

        if(openedBrackets != closedBrackets) return false;

        return true;
    }

}