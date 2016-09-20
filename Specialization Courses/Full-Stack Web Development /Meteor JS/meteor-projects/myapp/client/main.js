
/// routing 

Router.configure({
	layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
	this.render('welcome', {
		to:"main"
	});
});

Router.route('/websites', function () {
	this.render('navbar', {
		to:"navbar"
	});
	this.render('website_list', {
		to:"main"
	});
});

Router.route('/website/:_id', function () {
	this.render('navbar', {
		to: "navbar"
	});
	this.render('website', {
		to: "main", 
		data: function(){
			return Websites.findOne({_id: this.params._id});
		}
	});
});




/// infiniscroll

Session.set("websiteLimit", 8);
lastScrollTop = 0; 
$(window).scroll(function(event){
// test if we are near the bottom of the window
if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
	// where are we in the page? 
	var scrollTop = $(this).scrollTop();
	// test if we are going down
	if (scrollTop > lastScrollTop){
		// yes we are heading down...
	 Session.set("websiteLimit", Session.get("websiteLimit") + 4);
	}

	lastScrollTop = scrollTop;
}
		
})


/// accounts config

Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});

/// 


/////
// template helpers 
/////

// helper function that returns all available websites
Template.website_list.helpers({
	
	websites: function(){
		if (Session.get("userFilter")){// they set a filter!
			return Websites.find({createdBy: Session.get("userFilter")}, {sort: { upVotes: -1 }});         
		}
		else {
			return Websites.find({}, { sort:{ upVotes: -1}, limit: Session.get("websiteLimit")});         
		}
	},
	filtering_websites: function(){
		if (Session.get("userFilter")){// they set a filter!
			return true;
		} 
		else {
			return false;
		}
	},
	getFilterUser: function(){
		if (Session.get("userFilter")){// they set a filter!
			var user = Meteor.users.findOne(
				{_id: Session.get("userFilter")});
			return user.username;
		} 
		else {
			return false;
		}
	},
	getUser: function(user_id){
		var user = Meteor.users.findOne({_id:user_id});
		if (user){
			return user.username;
		}
		else {
			return "anon";
		}
	}
});


Template.website_list.events({

	'click .js-toggle-website-form': function(event){
  		$("#website_form").modal('show');
	}, 
	'click .js-set-website-filter':function(event){
    	Session.set("userFilter", this.createdBy);
	}, 
	'click .js-unset-website-filter':function(event){
    	Session.set("userFilter", undefined);
	}

});



Template.website_form.events({

	'submit .js-save-website-form': function(event){
  		var title, url, description;

		title = event.target.title.value;
    	url = event.target.url.value;
    	description = event.target.description.value;
    	
    	if (Meteor.user()){
    		Meteor.call("insertWebsite", url);
    		Websites.insert({
        		title: title, 
    			url: url, 
    			description: description,  
        		createdOn: new Date(),
        		createdBy: Meteor.user()._id
      		});      		
  		}
    	
    	$("#website_form").modal('hide');
 		return false;
	}
});

Template.website.helpers({
	username: function(){
		if (Meteor.user()){
			return Meteor.user().username;		
		}
		else {
			return "anonymous internet user";
		}
	},
	hasComments: function(){
		return this.comments.length>0;
	}
});


Template.website.events({
	"click .js-comment-box": function(event){
		event.preventDefault();
		$(".js-comment-btn").show();
	},
	"focus .js-comment-box": function(event){
		event.preventDefault();
		$(".js-comment-btn").show();
	},
	'submit .js-website-comment': function(event){
  		var comment = {
  			text: event.target.comment.value,
  			createdBy: event.target.createdBy.value,
  			createdAt: new Date()
  		};
    	
    	if (Meteor.user()){
      		Websites.update(
      			{_id: this._id}, 
    			{ "$push": {comments: comment}}
      		);
  		}
    	
    	$(".js-comment-btn").hide();
 		return false;
	}
});

/////
// template events 
/////
Template.website_item.helpers({
	  
	upvotedClass: function() {
    	var userId = Meteor.userId();
    	if (userId && !_.include(this.upvoters, userId)) {
      		return 'js-upvote';
    	} else {
      		return 'disabled';
    	}
  	},
  	downvotedClass: function() {
    	var userId = Meteor.userId();
    	if (userId && !_.include(this.downvoters, userId)) {
      		return 'js-downvote';
    	} else {
      		return 'disabled';
    	}
  	}

});

Template.website_item.events({

	"click .js-upvote": function(event){
		event.preventDefault();// prevent the button from reloading the page
		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		console.log("Up voting website with id "+website_id);
		// put the code in here to add a vote to a website!
		Meteor.call('upvote', website_id);				
	}, 

	"click .js-downvote": function(event){
		event.preventDefault();// prevent the button from reloading the page
		// example of how you can access the id for the website in the database
		// (this is the data context for the template)
		var website_id = this._id;
		console.log("Down voting website with id "+website_id);
		
		// put the code in here to remove a vote from a website!
		Meteor.call('downvote', website_id);
	}
})

Template.website_form.events({
	"click .js-toggle-website-form":function(event){
		$("#website_form").toggle('slow');
	}, 
	"submit .js-save-website-form":function(event){

		// here is an example of how to get the url out of the form:
		var url = event.target.url.value;
		console.log("The url they entered is: "+url);
		
		//  put your website saving code in here!	

		return false;// stop the form submit from reloading the page

	}
});

Template.body.helpers({
	username: function(){
		if (Meteor.user()){
			return Meteor.user().username;
		//return Meteor.user().emails[0].address;
		}
		else {
			return "anonymous internet user";
		}
	}
});


Template.registerHelper('formatDate', function(date) {
	return moment(date).format('MM-DD-YYYY');
});

Template.registerHelper('timeAgo', function(date) {
	return moment(date).from(moment());
});