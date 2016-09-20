if (Meteor.isServer) {
    Meteor.startup(function() {
        // body...
        if (Images.find().count() == 0) {
            for (var i = 1; i < 23; i++) {
                Images.insert({
                    img_src: "img_"+i+".jpg",
                    img_alt: "Image Number "+i
                });
            }
            console.log("startup js said Img:" +i)


        }
    });
}
