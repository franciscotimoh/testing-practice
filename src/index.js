function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(word) {
    return word.split("").reverse().join("");
}

const calculator = () => {
    const add = (a, b) => {
        return a + b;
    };

    const subtract = (a, b) => {
        return a - b;
    };

    const multiply = (a, b) => {
        return a * b;
    };

    const divide = (a, b) => {
        return a / b;
    };

    return { add, subtract, multiply, divide };
};

const shiftAlphabet = (shift) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
    const result = {};

    for (let i = 0; i <= 25; i++) {
        result[alphabet.charAt(i)] = shiftedAlphabet.charAt(i);
    }

    return result;
};

const caesarCipher = (text, shift) => {
    const cipherMapping = shiftAlphabet(shift);
    const encodedArray = [];

    for (let char of text) {
        let letterToAdd;
        if (!/^[A-Za-z]+$/.test(char)) {
            letterToAdd = char;
        } else if (/[A-Z]/.test(char)) {
            letterToAdd = cipherMapping[char.toLowerCase()].toUpperCase();
        } else {
            letterToAdd = cipherMapping[char];
        }

        encodedArray.push(letterToAdd);
    }

    return encodedArray.join("");
};

const analyzeArray = (numbers) => {
    const average = (array) => array.reduce((a, b) => a + b) / array.length;
    return {
        average: average(numbers),
        min: Math.min(...numbers),
        max: Math.max(...numbers),
        length: numbers.length,
    };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
