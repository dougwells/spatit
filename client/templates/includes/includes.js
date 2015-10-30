Template.sidebar.helpers({
   categories: function(){
       return Categories.find({},{
           sort: {
               name: 1
           }
       });
   }
});

Template.home.helpers({
    featured: function(){
        return Products.find({is_featured: 1});
    }
});