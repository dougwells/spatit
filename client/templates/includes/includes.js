Template.sidebar.helpers({
   categories: function(){
       return Categories.find({},{
           sort: {
               name: 1
           }
       });
   }
});

//Template.home.helpers({
//    featured: function(){
//        console.log(this);
//        return Products.find({is_featured: 1});
//    },
//
//    log: function(){
//        return console.log(this);
//    }
//});