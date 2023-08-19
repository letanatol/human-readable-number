module.exports = function toReadable(number) {

    const numbersOneNineteen = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    }

    const numbersTens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    }

    let result = '';

    if (number === 0) {
        return 'zero'
    }

    if (number < 20) {
        result = numbersOneNineteen[number];

    } else if (number < 100 && number.toString().split('')[1] === '0') {
        result = numbersTens[number.toString().split('')[0]];

    } else if (number < 100) {
        result = numbersTens[number.toString().split('')[0]] + ' ' + numbersOneNineteen[number.toString().split('')[1]];
    }

    if (number >= 100) {

        if (number % 100 === 0) {
            result = numbersOneNineteen[Math.floor(number / 100)] + " hundred";
        } else {
            resultHundred = numbersOneNineteen[Math.floor(number / 100)] + " hundred ";
            number = number % 100;
            if (number < 20) {
                result = resultHundred + numbersOneNineteen[number];

            } else if (number < 100 && number.toString().split('')[1] === '0') {
                result = resultHundred + numbersTens[number.toString().split('')[0]];

            } else if (number < 100) {
                result = resultHundred + numbersTens[number.toString().split('')[0]] + ' ' + numbersOneNineteen[number.toString().split('')[1]];
            }
        }
    }

    return result;
}
