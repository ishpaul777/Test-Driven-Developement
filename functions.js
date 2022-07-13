

//?Task 1
  function stringLength(string) {
      const arr = string.split('')
      if (arr.length < 1 || arr.length > 10) {
          throw 'String is beyond range';
        }
      return arr.length
    }
    
    //?Task 2
    function reverseSring(string) {
        const arr = string.split('')
        const reverseSring = []
        for(let i = string.length; i >=0; i--){
            reverseSring.push(arr[i])
        }
        return reverseSring.join('')
    }
    
    //?Task 3
    class calculator {
        constructor (num1,num2) {
            this.num1 = num1;
            this.num2 = num2;
        }
        
        add(){
            return this.num1 + this.num2
        }
        subtract(){
            return this.num1 - this.num2
        }
        multiply(){
            return this.num1 * this.num2
        }
        divide(){
            return this.num1 / this.num2
        }
    }
//?Task 4
    const capitalize = (string)=> {
        let arr = string.split('')
        arr[0] = arr[0].toUpperCase()
        return arr.join('')
    }
    module.exports = {sum,stringLength,reverseSring, calculator,capitalize};