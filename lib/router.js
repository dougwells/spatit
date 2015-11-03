Router.configure({
   layoutTemplate: 'layout'
});

var OnBeforeActions = {
        loginRequired: function (){
            if(!Meteor.user()){
                Router.go('/');
            }else{
                this.next();
            }
        }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['add_product', 'new_review']
});

Router.map(function(){
    //home
   this.route('home',{
       path: '/',
       template: 'home',
       data: function(){
           templateData = {
               featured: Products.find({is_featured: "1"})
           };
           return templateData;
       }
   });
       //products
    this.route('products', {
        path: '/products',
        template: 'products',
        data: function(){
            templateData = {
                products: Products.find()
            };
            return templateData;
        }
    });

    //add_product
    this.route('add_product', {
        path: '/add_product',
        template: 'add_product',
        data: function(){
            templateData = {
                categories: Categories.find()
            };
            return templateData;
        }
    });

    //categories
    this.route('category_products', {
        path: '/categories/:slug',
        template: 'category_products',
        data: function(){
            templateData = {
                category_products: Products.find({
                    category:this.params.slug
                })
            };
            return templateData;
        }
    });

    //New Reviews
    this.route('new_review', {
        path: '/new-review/:_id',
        template: 'new_review',
        data: function(){
            return Products.findOne(this.params._id);
            }
    });

    //Product Page
    this.route('product', {
        path: '/products/:_id',
        template: 'product',
        data: function(){
            return Products.findOne(this.params._id);
        }
    });

});

