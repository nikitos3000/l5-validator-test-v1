class ValidateNum{
    constructor(rules){
        this.rules = rules
    }

    bolshe(){
        this.rules = 'bolshe'
        return this
    }

    odd() {
      this.rules = 'odd';
      return this;
    }
  
    even() {
      this.rules = 'even';
      return this;
    }
    
    isValid(num){
        if(typeof num !== "number"){
            return false
        }

        if(this.rules === 'even'){
            return num % 2 === 0
        }
        if (this.rules === 'odd') {
            return num % 2 === 1;
        }
        if (this.rules === 'bolshe' ){
            return num > 10
        }
        return true
      
    }

}
export default ValidateNum