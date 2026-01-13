// Bài 1: Kiểm tra số nguyên tố
//
// Viết hàm isPrime(n) để kiểm tra một số nguyên dương n có phải là số nguyên tố hay không.
//     Định nghĩa:
//
//     Số nguyên tố là số lớn hơn 1 và chỉ chia hết cho 1 và chính nó.
//     Bài 2: Kiểm tra số hoàn hảo
//
// Viết hàm isPerfectNumber(n) để kiểm tra số nguyên dương n có phải là số hoàn hảo hay không.
//     Định nghĩa:
//
//     Số hoàn hảo là số bằng tổng các ước số dương của nó (không tính chính nó).

function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}


console.log(isPrime(2));   // true
console.log(isPrime(7));   // true
console.log(isPrime(9));   // false
console.log(isPrime(1));   // false


function isPerfectNumber(n) {
    if (n <= 1) {
        return false;
    }

    let sum = 0;

    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    return sum === n;
}

// Test examples
console.log(isPerfectNumber(6));   // true
console.log(isPerfectNumber(28));  // true
console.log(isPerfectNumber(12));  // false

