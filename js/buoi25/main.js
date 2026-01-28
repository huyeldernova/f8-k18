const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 }
        ]
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 }
        ]
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 }
        ]
    }
]

function findHighestRevenueProduct(products, orders) {
    // Create an object to store revenue for each product
    const revenueByProduct = {};

    //  Initialize revenue as 0 for all products
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        revenueByProduct[product.id] = 0;
    }

    //  Loop through all orders to calculate revenue
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];

        // Loop through each item in the order
        for (let j = 0; j < order.items.length; j++) {
            const item = order.items[j];

            // Find the product price by productId
            let productPrice = 0;
            for (let k = 0; k < products.length; k++) {
                if (products[k].id === item.productId) {
                    productPrice = products[k].price;
                    break;
                }
            }

            // Calculate revenue: price × quantity
            const itemRevenue = productPrice * item.quantity;

            // Add to total revenue of this product
            revenueByProduct[item.productId] += itemRevenue;
        }
    }

    //  Find the product with highest revenue
    let maxRevenue = 0;
    let topProductId = null;

    // Loop through all products' revenue
    for (const productId in revenueByProduct) {
        const revenue = revenueByProduct[productId];

        // If this product's revenue is higher, save it
        if (revenue > maxRevenue) {
            maxRevenue = revenue;
            topProductId = productId;
        }
    }

    //  Get the product information
    let topProduct = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(topProductId)) {
            topProduct = products[i];
            break;
        }
    }

    //  Return the result
    return {
        product: topProduct,
        totalRevenue: maxRevenue,
        allRevenues: revenueByProduct
    };
}


const result = findHighestRevenueProduct(products, orders);


console.log('Product with highest revenue:', result.product.name);
console.log('Total revenue:', result.totalRevenue);
console.log('Revenue details:');
console.log('- iPhone:', result.allRevenues[1]);
console.log('- Samsung:', result.allRevenues[2]);
console.log('- Xiaomi:', result.allRevenues[3]);
console.log('- Oppo:', result.allRevenues[4]);