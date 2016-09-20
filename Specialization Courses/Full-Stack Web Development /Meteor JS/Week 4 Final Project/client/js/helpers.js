/* global Websites Comments Router*/

Template.website_list.helpers({
	websites:function(){
		var searchValue = Session.get("searchValue");		
		var upvotes, downvotes;
		if(searchValue == "" || searchValue == undefined || searchValue == null){		
			return Websites.find({}, {sort:{rate:-1}});
		} else {
			return Websites.find({$or: [{"title": {$regex : ".*"+searchValue+".*"}},
                             {"url": {$regex : ".*"+searchValue+".*"}},
                             {"description": {$regex : ".*"+searchValue+".*"}}]}, {sort:{rate:-1}});
		}
		
	},
	searchOn:function(){
		var searchValue = Session.get("searchValue");
		if(searchValue == "" || searchValue == undefined || searchValue == null){
			return false;
		} else {
			return true;
		}
	}
});

Template.website_item.helpers({
	totalUpvotes:function(){
		hideNotVoted(this);
		if (this.upvotes) {
			return this.upvotes.length;
		} else {
			return 0;
		}
		
	},
	totalDownvotes:function(){
		if (this.downvotes) {
			return this.downvotes.length;
		} else {
			return 0;
		}
	},
	getDate:function(){
		if (this.createdOn) {
			return this.createdOn.toString("d-MMM-yyyy");
		} else {
			return false;
		}
		
	},
	getAuthor:function(createdBy){
		
		if (createdBy) {
			if (Meteor.users.findOne({_id: createdBy})){
				return Meteor.users.findOne({_id: createdBy}).username;
			}
		} else {
			return "Startup";
		}
		
	},
	getLogo:function(url){
		var link = url.split("//")[1].split("/")[0];
		return "http://"+link+"/favicon.ico";
	}	
});


Template.website_details.helpers({
	totalUpvotes:function(){
		hideNotVoted(this);
		if (this.upvotes) {
			return this.upvotes.length;
		} else {
			return 0;
		}
		
	},
	totalDownvotes:function(){
		if (this.downvotes) {
			return this.downvotes.length;
		} else {
			return 0;
		}
	},
	getDate:function(){
		if (this.createdOn) {
			return this.createdOn.toString("d-MMM-yyyy")
		} else {
			return false
		}
		
	},
	getAuthor:function(createdBy){
		if (createdBy) {
			return Meteor.users.findOne({_id: createdBy}).username
		} else {
			return "Startup"
		}
	},
	comments:function(){
		return Comments.find({websiteId: this._id});
	},
	getLogo:function(url){
		var link = url.split("//")[1].split("/")[0];
		return "http://"+link+"/favicon.ico";
	}
});

Template.comments_list.helpers({
	getUser:function(createdBy){
		return Meteor.users.findOne({_id: createdBy}).username
	}
});

Template.navbar.helpers({
	inDetails:function(){
		if (Router.current().route.getName() == 'websites') {
			return true;
		}
	}	
});

function hideNotVoted(object){
	if (Meteor.user()){
		var userId = Meteor.user()._id;
		if ($.inArray(userId, object.upvotes) != -1 && $.inArray(userId, object.downvotes) == -1){
			$('#downvote-'+object._id).addClass('transparant');
			$('#upvote-'+object._id).removeClass('transparant');
		} else if ($.inArray(userId, object.upvotes) == -1 && $.inArray(userId, object.downvotes) != -1) {
			$('#upvote-'+object._id).addClass('transparant');
			$('#downvote-'+object._id).removeClass('transparant');
		} else {
			$('#upvote-'+object._id).removeClass('transparant');
			$('#downvote-'+object._id).removeClass('transparant');
		}
	}
}