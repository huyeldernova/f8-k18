// Bài 1:
//
// Cho 3 biến a, b, c là độ dài 3 cạnh của một hình tam giác.
//
//     Viết hàm kiểm tra xem 3 cạnh có tạo thành tam giác không?
//
//     Điều kiện: a + b > c và a + c > b và b + c > a.
//     Nếu là tam giác, hãy phân loại:
//
//     Tam giác đều: a = b = c.
//
//     Tam giác cân: Có 2 cạnh bằng nhau.Tam giác vuông:
//
//     Thỏa mãn định lý pytago (a^2 = b^2 + c^2 hoặc tương tự).
//
// Tam giác thường: Các trường hợp còn lại.
//
//     Bài 2:
//
// Cho số a bất kì, viết hàm kiểm tra số đó có phải số chính phương hay không
//
// số chính phương là bình phương của 1 số tự nhiên vd: 4, 9, 16 ....

function checkTriangle(a, b, c) {
    // Check valid sides
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Not a triangle";
    }

    // Check triangle condition
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Not a triangle";
    }

    // Equilateral triangle
    if (a === b && b === c) {
        return "Equilateral triangle";
    }

    // Right triangle
    if (
        a * a === b * b + c * c ||
        b * b === a * a + c * c ||
        c * c === a * a + b * b
    ) {
        // Right isosceles triangle
        if (a === b || a === c || b === c) {
            return "Right isosceles triangle";
        }
        return "Right triangle";
    }

    // Isosceles triangle
    if (a === b || a === c || b === c) {
        return "Isosceles triangle";
    }

    // Normal triangle
    return "Scalene triangle";
}

// Test examples
console.log(checkTriangle(3, 4, 5));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(2, 2, 3));


function isPerfectSquare(a) {
    if (a < 0) {
        return false;
    }

    let squareRoot = Math.sqrt(a);
    return Number.isInteger(squareRoot);
}

// Test examples
console.log(isPerfectSquare(4));   // true
console.log(isPerfectSquare(9));   // true
console.log(isPerfectSquare(10));  // false


