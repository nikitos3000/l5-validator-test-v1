class ValidateArr{
    constructor(rules){
        this.rules = rules
    }

    length(newLen) {
        this.len = newLen;
        return this;
      }
    
    isValid(arr){
        if(!Array.isArray(arr)){
            return false
        }
        if(this.len){
            console.log(this.len);
            return this.len === arr.length;
        }return true
      
    }

}
export default ValidateArr