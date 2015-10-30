Router.configure({
   layoutTemplate: 'layout'
});

Router.map(function(){
    //home
   this.route('home',{
       path: '/',
       template: 'home'
       //data: function(){
       //    templateData = {
       //        featured: Products.find({is_featured: 1})
       //    };
       //    return templateData;
       //}
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
});