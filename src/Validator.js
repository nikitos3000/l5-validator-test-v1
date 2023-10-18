import ValidateArr from "./ArraySchema.js";
import ValidateNum from "./NumberSchema.js"
class Validator{

    number(){
        return new ValidateNum()
    }
    array(){
    return new ValidateArr
    }
}
const v = new Validator();

const schema2 = v.array().length(2);
console.log(schema2.isValid([1, 2])) // false
console.log(schema2.isValid([1, 2, 2, 1])) // true
export default  Validator