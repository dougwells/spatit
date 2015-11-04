Meteor.methods({

    addProduct: function(file, name, category, description, is_featured) {
        console.log("Inside Meteor Call, at start");
        if (file) {
            fsFile = new FS.File(file);
            ProductsImages.insert(fsFile, function (err, result) {
                if (!err) {
                    FlashMessages.sendSuccess("Product Added");
                    console.log("Inside Meteor Call, no err");
                    var productImage = '/cfs/files/ProductsImages/' + result._id;
                    Products.insert({
                        name: name,
                        category: category,
                        description: description,
                        is_featured: is_featured,
                        image: productImage,
                        createdAt: new Date()
                    });
                }
            });

        } else {
            FlashMessages.sendError("Product NOT Added");
            console.log("Inside Meteor Call, w/err");
            var productImage = '/img/no_image.png';
            Products.insert({
                name: name,
                category: category,
                description: description,
                is_featured: is_featured,
                image: productImage,
                createdAt: new Date()
            });
        }
    },



    addReview: function(id, rating, body){
        Products.update({_id: id}, {
            $push: {
                reviews: {
                    rating: rating,
                    body: body,
                    review_date: new Date()
                }
            }
        });
    }

})


//addProduct: function(file, name, category, description, is_featured) {
//    if (file) {
//        fsFile = new FS.File(file);
//        ProductsImages.insert(fsFile, function (err, result) {
//            if (!err) {
//                var productImage = '/cfs/files/ProductsImages/' + result._id;
//                Products.insert({
//                    name: name,
//                    category: category,
//                    description: description,
//                    is_featured: is_featured,
//                    image: productImage,
//                    createdAt: new Date()
//                });
//                return false;
//
//            } else {
//
//                var productImage = '/img/no_image.png';
//                Products.insert({
//                    name: name,
//                    category: category,
//                    description: description,
//                    is_featured: is_featured,
//                    image: productImage,
//                    createdAt: new Date()
//
//                });
//                return false;
//            }
//
//        });
//    }
//},