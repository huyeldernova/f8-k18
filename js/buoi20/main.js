// 🟢 Phần 1: Khai báo biến & console.log (cơ bản)
let name ="Gia Huy"
let age = 23
let isStudent = true

console.log("name: " + name + "\n",
            "age: " + age + "\n" ,
            "isStudent: " + isStudent)

// 2. Khởi tạo và thay đổi giá trị

let a = 5
let b = 10
console.log(a, b)

a = 6
b = 11

console.log(a, b)

// 🟢 Phần 2: const / let / var
//     Trả lời bằng comment trong code:
//     const khác let ở điểm nào?
//     Khi nào nên dùng const?
//
// Đoạn code sau đúng hay sai? Giải thích:
// "const x = 10;
// x = 20;"

/**
 * Const/let/vả đều được dùng để khai báo biến
 * const dùng để khai báo 1 hằng số, ko thể thay đổi được giá trị của biến, ko thể gán lại được
 * let/ var có thể gán lại hoặc cập nhật giá trị của biến


 *                            const             let             var
 *   Gan lai gia tri           no               yes             yes
 *
 *
 * Đoạn code:
 * const x = 10;
 * x = 20
 *
 * Sai, vì ko thể gán lại giá trị cho biến x, vì const dùng để khai báo x là hằng số
 *
 */


// 🟡 Phần 3: Data type
// Xác định kiểu dữ liệu của các giá trị sau (ghi comment):
// 100
// 100
// TRUE
//     [1, 2, 3]
// { name: "An", age: 20 }
// null
// undefined
//
// Tạo một object student gồm:
//     name
// age
// scores (array gồm 3 số)
//
// In object này ra console.

let c = 100
let d = true
let e = [1,2,3]
let f = {name: "An", age: 20}
let g = null
let h


console.log(typeof c) // "number"
console.log(typeof d) // "boolean"
console.log(typeof e) // "object/ array"
console.log(typeof f) // "object"
console.log(typeof g) // "object/ null"
console.log(typeof h) // "undefined"

let student = {
    name: "John",
    age: 20,
    scores: [10,9,8]
}

console.log(student)


// 🟡 Phần 4: Ép kiểu (Type casting)
// Chuyển đổi:
//     "1000" → number
// 1000 → string
// true → string
// In kết quả và kiểu dữ liệu ra console.

let a1 = "1000"

let num = Number(a1)
console.log(typeof num)

let numString = String(num)
console.log(typeof numString)

let bool = true

let boolString = String(bool)
console.log(typeof boolString)

console.log(num, typeof num)
console.log(numString, typeof numString)
console.log(boolString, typeof boolString)



// 🔵 Phần 5: Truthy / Falsy (tư duy logic)
// Dự đoán kết quả (true / false):
// Boolean(0)  False
// Boolean(1) True
// Boolean("") False
// Boolean("hello") True
// Boolean(null) false
// Boolean([]) true


console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(""))
console.log(Boolean("hello"))
console.log(Boolean(null))
console.log(Boolean([]))



// 	🔵 Phần 6: Array & bộ nhớ (liên hệ sơ đồ RAM)
// Cho mảng:
//     const numbers = [4, 3, 1, 5, 1];
//
// In phần tử đầu tiên
// In phần tử cuối cùng
//
// Giải thích bằng lời (không cần code):
// Vì sao khi gán:
//     const a = numbers;
//
// thì a và numbers lại liên quan đến cùng một vùng nhớ?

// Khi gán `a = numbers`, `a` chỉ trỏ tới cùng vùng nhớ với `numbers`.
//     Thay đổi nội dung của `a` sẽ ảnh hưởng trực tiếp tới `numbers`.
//

const numbers = [4, 3, 1, 5, 1];

console.log(numbers[0])
console.log(numbers[4])

