Template.new_review.events({
    "submit .new-review": function (event) {
        var rating = event.target.rating.value;
        var body = event.target.body.value;

        Meteor.call('addReview', this._id, rating, body);

        //Products.update({_id:this._id}, {
        //    $push: {
        //        reviews: {
        //            rating: rating,
        //            body: body
        //        }
        //    }
        //});

        event.target.rating.value = "";
        event.target.body.value = "";
        FlashMessages.sendSuccess("Review Added");
        Router.go('/');

        return false;

    }

});

