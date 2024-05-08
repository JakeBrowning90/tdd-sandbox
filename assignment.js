function capitalize(string) {
    const capString = string.charAt(0).toUpperCase() + string.slice(1);
    return capString;
}

function reverseString(string) {
    const revString = string.split("").reverse().join("");
    return revString;
}

const calculator = {
    add: function(a , b) {
        return a + b;
    },
    subtract: function(a , b) {
        return a - b;
    },
    multiply: function(a , b) {
        return a * b;
    },
    divide: function(a , b) {
        return a / b;
    },
};

function caesarCipher(string, key) {
    let newString = [];
   
    for (let i = 0; i < string.length; i++) {
        let targetChar = string.charAt(i)
        if (targetChar.match(/[a-z]/)) {
            let encodedLetter = String.fromCharCode(((targetChar.charCodeAt(0) - 97) + key) % 26 + 97);
            newString.push(encodedLetter);
        } else if (targetChar.match(/[A-Z]/)){
            let encodedLetter = String.fromCharCode(((targetChar.charCodeAt(0) - 65) + key) % 26 + 65);
            newString.push(encodedLetter);
        } else {
            newString.push(targetChar);
        }
    }
    const encodedString = newString.join("");
    return encodedString;
};

function getAverage(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    let average = sum / array.length;
    return average;
}

function getMin(array) {
    let min = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function getMax(array) {
    let max = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function analyzeArray(array) {
    let length = array.length
    let average = getAverage(array);
    let min = getMin(array);
    let max = getMax(array);
    
    let object = { 
        average: average,
        min: min,
        max: max,
        length: length
    }
    return object
};

module.exports = { 
    capitalize, 
    reverseString, 
    calculator, 
    caesarCipher,
    analyzeArray
};