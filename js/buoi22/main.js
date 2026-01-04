function classifyAcademicPerformance(score) {
  // Kiểm tra điểm hợp lệ
  if (score < 0 || score > 10) {
    console.log("Điểm không hợp lệ! Vui lòng nhập điểm từ 0-10");
    return;
  }

  // Phân loại
  if (score >= 9 && score <= 10) {
    console.log("Xuất sắc (Excellent)");
  } else if (score >= 8 && score < 9) {
    console.log("Giỏi (Very Good)");
  } else if (score >= 6.5 && score < 8) {
    console.log("Khá (Good)");
  } else if (score >= 5 && score < 6.5) {
    console.log("Trung bình (Average)");
  } else {
    console.log("Yếu (Weak)");
  }
}

// Test cases
console.log("=== TEST PHÂN LOẠI HỌC LỰC ===");
classifyAcademicPerformance(9.5);
classifyAcademicPerformance(8.3);
classifyAcademicPerformance(7);
classifyAcademicPerformance(6);
classifyAcademicPerformance(3.5);
classifyAcademicPerformance(-1);
classifyAcademicPerformance(11);


function getDaysInMonth(month) {
  // Kiểm tra tháng hợp lệ
  if (month < 1 || month > 12) {
    console.log("Tháng không hợp lệ! Vui lòng nhập từ 1-12");
    return;
  }

  let days;

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;

    case 2:
      days = 28; // Tạm tính 28 ngày
      break;

    default:
      console.log("Tháng không hợp lệ!");
      return;
  }

  console.log(`Tháng ${month} có ${days} ngày`);
}

// Test cases
console.log("\n=== TEST SỐ NGÀY TRONG THÁNG ===");
getDaysInMonth(1);
getDaysInMonth(2);
getDaysInMonth(4);
getDaysInMonth(7);
getDaysInMonth(13);



// Viết function
const checkEvenOdd = (n) => n % 2 === 0 ? "Even" : "Odd";

console.log(checkEvenOdd(15));  // "Odd"
console.log(checkEvenOdd(20));  // "Even"



function calculateTicketPrice(age) {
  const basePrice = 100;

  // Sử dụng ternary operator
  const ticketPrice = age < 13 ? basePrice * 0.5 : basePrice;

  console.log(`Tuổi: ${age} → Giá vé: ${ticketPrice}k`);
  return ticketPrice;
}

// Test cases
console.log("\n=== TEST GIÁ VÉ XEM PHIM ===");
calculateTicketPrice(10);  // 50k (giảm 50%)
calculateTicketPrice(13);  // 100k (giá gốc)
calculateTicketPrice(25);  // 100k (giá gốc)


function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;

  console.log(`${celsius}°C = ${fahrenheit}°F`);
  return fahrenheit;
}

// Test cases
console.log("\n=== TEST CHUYỂN ĐỔI NHIỆT ĐỘ ===");
celsiusToFahrenheit(0);
celsiusToFahrenheit(100);
celsiusToFahrenheit(37);
celsiusToFahrenheit(-40);


celsiusToFahrenheit(36.5);  // 97.7°F



function calculateElectricityBill(kWh) {
  if (kWh < 0) return 0;

  let cost = 0;
  let remaining = kWh;

  // Bậc 1: 0-50 kWh
  const tier1 = Math.min(remaining, 50);
  cost += tier1 * 1678;
  remaining -= tier1;

  // Bậc 2: 51-100 kWh
  if (remaining > 0) {
    const tier2 = Math.min(remaining, 50);
    cost += tier2 * 1734;
    remaining -= tier2;
  }

  // Bậc 3: 101-200 kWh
  if (remaining > 0) {
    const tier3 = Math.min(remaining, 100);
    cost += tier3 * 2014;
    remaining -= tier3;
  }

  // Bậc 4: > 200 kWh
  if (remaining > 0) {
    cost += remaining * 2536;
  }

  return cost;
}

// Sử dụng
const bill = calculateElectricityBill(180);
console.log(`Tiền điện: ${bill.toLocaleString('vi-VN')} VND`);

