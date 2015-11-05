Categories = new Mongo.Collection('categories');

Products = new Mongo.Collection('products');

ProductsImages = new FS.Collection('ProductsImages', {
    stores: [new FS.Store.GridFS("ProductsImages")]
});

ProductsImages.allow({
    insert: function(fileId, doc){
        return true;
    },
    download: function(fileId, doc){
        return true;
    }
});

Products.allow({    //careful! Allows you to add & delete FROM CONSOLE
    insert: function(userId, doc){
        return true;
    },
    remove: function(userId,doc){
        return true;
    }
});