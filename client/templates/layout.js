Template.registerHelper('truncateText', function(text, length){
    var newText = text.substring(0, length);
    newText = newText.substr(0, Math.min(newText.length, newText.lastIndexOf(" ")));
    return new Spacebars.SafeString(newText);
});

//get rating average
Template.registerHelper('getAvg', function(reviews){

    if(reviews) {
        var sum = 0;
        for (var i = 0; i < reviews.length; i++) {
            sum = sum + Number(reviews[i].rating);

        }
        var avg = sum / (reviews.length);
        return Math.round(avg).toString();

    }else{
        return "notReviewed";
    }
});

Template.registerHelper('getReviewsTotal', function(reviews){
    if (reviews>0){
        return reviews;
    }else{
        return 0;
    }
});