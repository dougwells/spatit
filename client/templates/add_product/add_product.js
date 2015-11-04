Template.add_product.events({
    "submit .add_this_product": function(event){
        var name = event.target.name.value;
        var category = event.target.category.value;
        var description = event.target.description.value;
        var is_featured = event.target.is_featured.value;

        var file = $('#productImage').get(0).files[0];

        Meteor.call('addProduct', file, name, category, description, is_featured);
        //if (file){
        //    fsFile=new FS.File(file);
        //    ProductsImages.insert(fsFile, function(err, result) {
        //        if (!err) {
        //            FlashMessages.sendSuccess("Product Added");
        //            console.log("Inside Meteor Call, no err");
        //            var productImage = '/cfs/files/ProductsImages/' + result._id;
        //            Products.insert({
        //                name: name,
        //                category: category,
        //                description: description,
        //                is_featured: is_featured,
        //                image: productImage,
        //                createdAt: new Date()
        //            });
        //        }
        //    });
        //
        //}else{
        //    FlashMessages.sendError("Product NOT Added");
        //    console.log("Inside Meteor Call, w/err");
        //    var productImage='/img/no_image.png';
        //    Products.insert({
        //        name: name,
        //        category: category,
        //        description: description,
        //        is_featured: is_featured,
        //        image: productImage,
        //        createdAt: new Date()
        //    });
        //}
        event.target.name.value = "";
        event.target.category.value = "";
        event.target.description.value="";
        event.target.is_featured.value="";

        Router.go('/');
        return false;
    }
});

FlashMessages.configure({
    autoHide: true,
    hideDelay: 2000,
    autoScroll: true
});


//Template.add_product.events({
//
//    "submit .add_this_product": function (event) {
//        var name = event.target.name.value;
//        var category = event.target.category.value;
//        var description = event.target.description.value;
//        var is_featured = event.target.is_featured.value;
//
//        var file = $('#productImage').get(0).files[0];
//
//        Meteor.call('addProduct', file, name, category, description, is_featured);
//
//        event.target.name.value = "";
//        event.target.category.value = "";
//        event.target.description.value="";
//        event.target.is_featured.value="";
//
//        FlashMessages.sendSuccess("Product Added");
//        Router.go('/');
//
//    }
//});
//
////        if (file) {
////            fsFile = new FS.File(file);
////            ProductsImages.insert(fsFile, function (err, result) {
////                if (!err) {
////                    var productImage = '/cfs/files/ProductsImages/' + result._id;
////                    Products.insert({
////                        name: name,
////                        category: category,
////                        description: description,
////                        is_featured: is_featured,
////                        image: productImage,
////                        createdAt: new Date()
////                    });
////                }
////            });
////
////        } else {
////            var productImage = '/img/no_image.png';
////            Products.insert({
////                name: name,
////                category: category,
////                description: description,
////                is_featured: is_featured,
////                image: productImage,
////                createdAt: new Date()
////            });
////        }
////    },
////
////
////            event.target.name.value = "";
////            event.target.category.value = "";
////            event.target.description.value="";
////            event.target.is_featured.value="";
////
////            FlashMessages.sendSuccess("Product Added");
////            Router.go('/');
////        return false;
////    }
////});
////
////FlashMessages.configure({
////    autoHide: true,
////    hideDelay: 2000,
////    autoScroll: true
////});
//
