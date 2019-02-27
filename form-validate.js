$(document).ready(function(){

	/**
	 * jQuery Validate Function
	 *
	 * This function provides front-end validation for your form.
	 * If all tests set up here pass, the form data is AJAX submitted
	 * to the mailer.php file.
	 *
	 * Update this file as needed for your form.
	 * All ids and name values must match up to your form here.
	 *
	 * @author Natalie Woodard <nwoodard1@cnm.edu>
	 **/

	/*
	begin validate function here
	 */

$("#contactMe").validate({


	//setup handling of form errors
	debug: true,
	errorClass: "alert alert-danger",
	errorLabelContainer: "#output-area",
	errorElement: "div",

	// rules here define what is good or bad input
	// each rule starts with the form input element's NAME attribute

	rules: {
		contactName: {
			required: true,
		},
		contactEmail: {
			email: true,
			required: true
		},
		contactMessage: {
			required: true,
			maxLength: 2000
		}
	},


	// error messages to display to the end user when rules above don't pass
	messages: {
		contactName: {
			required: "What's your name, fool?"
		},
		contactEmail: {
			email: "Why not use a real email?",
			required: "Why not add an email?"
		},
		contactMessage: {
			required: "Why not add a message?",
			maxLength: "Why not write more?",
			minLength: "Why not write less?",
		},
		//contactSubject: {
			//maxLength: "Why not write more?"
		//}
	},

submitHandler: function(form) {
		$("#contactMe").ajaxSubmit({
			type: "POST",
			url: $("#contactMe").attr("action"),

			success: function(ajaxOutput) {
				$("#output-area").css("display", "");

				// write the server's reply to the output area
				$("#output-area").html(ajaxOutput);


				// reset the form if it was successful
				if($(".alert-success").length >= 1) {
					$("#contactMe")[0].reset();
				}
			}
		})
}

});/* end validate function here */

});/*end document.ready()*/