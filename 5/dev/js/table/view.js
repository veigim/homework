var view = (function () {

    var sel = {
        products : document.querySelector('.products'),
        cart : document.querySelector('.cart'),
        total : document.querySelector('.total'),
    }

    var tmpl = {
        productsItem : '<div class="name">{{name}}</div><div class="price">{{price}}</div><div class="add-btn" data-item-id="{{id}}"></div>',
        cartItem : '<div class="name">{{name}}</div><div class="price">{{price}}</div>',
        total : '<div>Total:</div><div class="price">{{total}}</div>',
    }

    var renderers = {
        products: function (data){

            var html = '';

            for(i=0;i<data.length;i++){
                var s = tmpl.productsItem;
                s = s.replace('{{name}}', data[i].name);
                s = s.replace('{{price}}', data[i].price);
                s = s.replace('{{id}}', i);
                html += s;
            };
            
            sel.products.innerHTML = html;
        },
        
        cart: function (data) {
            
            var html = '';
    
            for(i=0;i<data.length;i++){
                var s = tmpl.cartItem;
                s = s.replace('{{name}}', data[i].name);
                s = s.replace('{{price}}', data[i].price);
                html += s;
            };
            
            sel.cart.innerHTML = html;

        },

        total: function (data) {
            var s = tmpl.total;
            s = s.replace('{{total}}', data)
            sel.total.innerHTML = s;
        },
    };

    var listeners = {
        addBtn: function (handler) {
            sel.products.addEventListener('click', function (event) {
                newItemId = event.target.getAttribute('data-item-id');
                if (newItemId) {
                    handler(newItemId);
                };
            })
        }
    };

    return {
        render: function(renderer, data) {
            renderers[renderer](data);
        },

        listen: function (listener, handler) {
            listeners[listener](handler);
        }
    }
} ());
