var controller = (function () {
    return {
            init : function () {
                
                model.get('products', function (products) {
                    view.render('products', products);
                });

                model.get('cart', function (cart) {
                    view.render('cart', cart);
                });
                
                model.get('total', function (total) {
                    view.render('total', total);
                });
                
                view.listen('addBtn', function (itemId){
                    model.addToCart(itemId, function (cart, total) {
                        view.render('cart', cart);
                        view.render('total', total);

                    });
                });
        }
    }
} ());