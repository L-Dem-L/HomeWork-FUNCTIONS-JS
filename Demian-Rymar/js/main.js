function pow(x, y) {
    if (y === 0) {
        return 1;
    } else {
        return x * pow(x, y - 1);
    }
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function findMaxDig(num) {
    if (num < 10) {
        return num;
    } else {
        const maxDig = findMaxDig(Math.floor(num / 10));
        const currentDig = num % 10;
        return currentDig > maxDig ? currentDig : maxDig;
    }
}

function isPrime(num, divisor = 2) {
    if (num === 2) {
        return true;
    } else if (num < 2 || num % divisor === 0) {
        return false;
    } else if (divisor * divisor > num) {
        return true;
    } else {
        return isPrime(num, divisor + 1);
    }
}

function getFactors(num, factor = 2) {
    if (num === 1) {
        return "";
    } else {
        if (num % factor === 0) {
            return `${factor} * ${getFactors(num / factor, factor)}`;
        } else {
            return getFactors(num, factor + 1);
        }
    }
}

function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
