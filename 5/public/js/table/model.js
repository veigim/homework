var model = (function () {

    var PRODUCTS = [{
        name: 'iPhone XS Max',
        price: 37174
    }, {
        name: 'Samsung Galaxy Note 9',
        price: 21103
    }, {
        name: 'Xiaomi Redmi Note 5',
        price: 4193
    }, {
        name: 'Samsung Galaxy S8',
        price: 12718
    }, {
        name: 'OnePlus 6',
        price: 15093
    }, {
        name: 'Xiaomi Mi 8',
        price: 10761
    }];

    var CART = [];

    var methods = {
            products: function (callback) {
                callback(PRODUCTS);
            },

            cart: function (callback) {
                callback(CART);
            },

            total: function (callback) {
                callback(getTotal());
            },
            
        };
        
    function getTotal() {
            
            var sum = 0;
            for(i=0;i<CART.length;i++) {
                sum += CART[i].price;
            };

            return sum;
    };
    
    return {
         get: function (method, callback) {
            methods[method](callback);
         },

         addToCart: function (itemId, callback) {
            var newItem = {
                name: PRODUCTS[itemId].name,
                price: PRODUCTS[itemId].price
            };
            CART.push(newItem);
            callback (CART, getTotal())
         }
    }
} ());
