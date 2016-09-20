Images = new Mongo.Collection("images");
console.log(Images.find().count());


if (Meteor.isClient) {


    Template.images.helpers({ images: Images.find() });


    Template.images.events({
        'click .js-del-image': function(event) {
            var image_id = this._id;
            console.log(image_id);
            $(event.target).css("width", "50px");
            $("#" + image_id).hide("slow", function() {
                Images.remove({ "_id": image_id })
            })
        },
        'click .js-rate-image': function(event) {
            // body...
            console.log("you clicked on rating");
        }
    });

}

if (Meteor.isServer) {
    console.log("I am the server");
}


console.log("where am I running");
