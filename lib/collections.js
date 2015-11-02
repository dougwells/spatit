Categories = new Mongo.Collection('categories');

Products = new Mongo.Collection('products');

Reviews = new Mongo.Collection('reviews');

ProductsImages = new FS.Collection('ProductsImages', {
    stores: [new FS.Store.GridFS("ProductsImages")]
});