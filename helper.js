function hello (name){

    console.log('hello'(name));
}

// module.export = {hello};
/**
 * prime numbers print range of prime numbers between 2 and border 
 * @param {number} border 
 * @returns {void}
 */



function primeNumbers (border){
for (let i =2; i<= border ; i += i+1){     // i = i+1   I++ is not recomended in JS
 if (isPrime (i) ){
    console.log (i);
 }

}

}

/**
 * is prime takes number as argumnet and returns true, if number is prime 
 * @param {number} number
 * @returns {boolean}
 */

function isPrime (number){
    for ( let i = 2; i < number; i+=1){
        if (number%i===0){
            return false;
        }
    }
}
returnvtrue;

export default {hello, primeNumbers};
