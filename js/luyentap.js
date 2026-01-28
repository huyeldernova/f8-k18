function tinhTong(a, b, sum){
    let tong  = a + b
    sum (tong)
}

function print(result){
    console.log('ket qua:', result)
}

function multi(result){
    console.log('ket qua', result * 2)
}

tinhTong(5, 3, multi)