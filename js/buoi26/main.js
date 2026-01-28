// Sample products data
const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

// Store all orders here
const orders = [];

// Auto-increment counter for order ID
let nextOrderId = 1;


function createOrder(productId, orderQuantity) {
    //  Validate input
    if (productId == null || orderQuantity == null) {
        throw new Error("ProductId and orderQuantity must not be null");
    }

    //  Find the product by productId
    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }

    //  If product not found, throw error
    if (product === null) {
        throw new Error("Product not found");
    }

    //  Check if there is enough stock
    if (product.remaining < orderQuantity) {
        throw new Error("Out of stock");
    }

    //  Create the order object
    const newOrder = {
        id: nextOrderId,
        productId: productId,
        quantity: orderQuantity
    };

    //  Decrease product remaining
    product.remaining -= orderQuantity;

    //  Add order to orders array
    orders.push(newOrder);

    // Increment order ID for next order
    nextOrderId++;

    //  Return the created order
    console.log("Order created successfully:", newOrder);
    return newOrder;
}

/**
 * Update an existing order's quantity
 * @param {number} orderId - ID of the order to update
 * @param {number} newQuantity - New quantity for the order
 * @returns {object} - The updated order
 */
function updateOrder(orderId, newQuantity) {
    // Find the order by orderId
    let order = null;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id === orderId) {
            order = orders[i];
            break;
        }
    }

    //  If order not found, throw error
    if (order === null) {
        throw new Error("Order not found");
    }

    //  Find the product related to this order
    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === order.productId) {
            product = products[i];
            break;
        }
    }

    //  Calculate the difference between new and old quantity
    const oldQuantity = order.quantity;
    const difference = newQuantity - oldQuantity;

    //  Check if we need more stock
    if (difference > 0) {
        if (product.remaining < difference) {
            console.log("Out of stock");
            return order;
        }
    }

    // Update product remaining
    // If difference > 0: decrease remaining (taking more)
    // If difference < 0: increase remaining (returning some)
    product.remaining -= difference;

    //  Update order quantity
    order.quantity = newQuantity;

    console.log("Order updated successfully:", order);
    return order;
}

/**
 * Delete an order and restore stock
 * @param {number} orderId - ID of the order to delete
 * @returns {boolean} - True if deleted successfully
 */
function deleteOrder(orderId) {
    // Step 1: Find the order index
    let orderIndex = -1;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id === orderId) {
            orderIndex = i;
            break;
        }
    }

    //  If order not found, throw error
    if (orderIndex === -1) {
        throw new Error("Order not found");
    }

    //  Get the order before deleting
    const order = orders[orderIndex];

    //  Find the product to restore stock
    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === order.productId) {
            product = products[i];
            break;
        }
    }

    //  Restore the quantity back to product remaining
    product.remaining += order.quantity;

    //  Remove order from orders array
    orders.splice(orderIndex, 1);

    console.log("Order deleted successfully. Stock restored.");
    return true;
}

/**
 * Helper function: Display all orders
 */
function displayOrders() {
    console.log("\n=== All Orders ===");
    for (let i = 0; i < orders.length; i++) {
        console.log(orders[i]);
    }
}

/**
 * Helper function: Display all products with remaining stock
 */
function displayProducts() {
    console.log("\n=== Products Stock ===");
    for (let i = 0; i < products.length; i++) {
        console.log(`${products[i].name}: ${products[i].remaining} remaining`);
    }
}



console.log("===== TESTING ORDER SYSTEM =====\n");

// Test 1: Create orders
console.log("--- Test 1: Create Orders ---");
createOrder(1, 5);
createOrder(2, 3);
createOrder(5, 2);
displayOrders();
displayProducts();

// Test 2: Update order (increase quantity)
console.log("\n--- Test 2: Update Order (Increase) ---");
updateOrder(1, 8);  // Change order 1 from 5 to 8 units
displayOrders();
displayProducts();

// Test 3: Update order (decrease quantity)
console.log("\n--- Test 3: Update Order (Decrease) ---");
updateOrder(2, 1);  // Change order 2 from 3 to 1 unit
displayOrders();
displayProducts();

// Test 4: Delete order
console.log("\n--- Test 4: Delete Order ---");
deleteOrder(2);
displayOrders();
displayProducts();

// Test 5: Error handling - Product not found
console.log("\n--- Test 5: Error - Product Not Found ---");
try {
    createOrder(999, 5);
} catch (error) {
    console.log("Error caught:", error.message);
}

// Test 6: Error handling - Out of stock
console.log("\n--- Test 6: Error - Out of Stock ---");
try {
    createOrder(1, 100);
} catch (error) {
    console.log("Error caught:", error.message);
}

// Test 7: Error handling - Order not found
console.log("\n--- Test 7: Error - Order Not Found ---");
try {
    deleteOrder(999);
} catch (error) {
    console.log("Error caught:", error.message);
}

// Test 8: Update with insufficient stock
console.log("\n--- Test 8: Update - Insufficient Stock ---");
updateOrder(1, 50);
displayProducts();
