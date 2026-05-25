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
export { capitalize, reverseString, calculator };
