// this is website_share.js
Websites = new Mongo.Collection("websites");

// set up security on Images collection
Websites.allow({

		// we need to be able to update websites for ratings.
		update: function(userId, doc){
				console.log("testing security on website update");
				if (Meteor.user()){// they are logged in
						return true;
				} else {// user not logged in - do not let them update  (rate) the website. 
						return false;
				}
		},

		insert: function(userId, doc){
				console.log("testing security on website insert");
				if (Meteor.user()){// they are logged in
						if (userId != doc.createdBy){// the user is messing about
								return false;
						}
						else {// the user is logged in, the website has the correct user id
								return true;
						}
				}
				else {// user not logged in
						return false;
				}
		}, 
		remove: function(userId, doc){
				return true;
		}
});

Meteor.methods({

	upvote: function(website_id) {
		check(this.userId, String);
		check(website_id, String);
		
		var affected = Websites.update({
				_id: website_id,
				upvoters: {"$ne": this.userId}
		}, {
				"$addToSet": {upvoters: this.userId},
				"$inc": {upVotes: 1}
		});
		if (!affected)
				throw new Meteor.Error('invalid', "You weren't able to upvote that website");
	},

	downvote: function(website_id) {
		check(this.userId, String);
		check(website_id, String);
		var website = Websites.findOne(website_id);
		if (!website)
				throw new Meteor.Error('invalid', 'Website not found');
		if (_.include(website.upvoters, this.userId))
				throw new Meteor.Error('invalid', 'Already downvoted this website');
		Websites.update(website._id, {
				"$addToSet": {downvoters: this.userId},
				"$inc": {downVotes: 1}
		});
	},

	remoteGet: function(url, options){
		check(url, String);
		return HTTP.get(url, options);
	},

	insertWebsite: function(url) {
		check(url, String);
		
		HTTP.get(url, {}, function (err, response){
			if (err) throw new Meteor.Error('invalid', 'Website not found');
			console.log(JSON.stringify(response, null, 4));
			var site = response.data[0];
			Website.insert({
				title: site.title, 
	    		url: url, 
	    		description: site.body, 
	            comments: [],
	            upVotes: 0,
	            downVotes: 0,
	            upvoters: [],
	            downvoters: [],
				createdOn: new Date(),
	  			createdBy: this.userId				
			})
		});
	}

});