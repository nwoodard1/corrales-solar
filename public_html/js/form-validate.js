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
			maxlength: 2000
		}
	},


	// error messages to display to the end user when rules above don't pass
	messages: {
		contactName: {
			required: "Please enter a name"
		},
		contactEmail: {
			email: "real email required",
			required: "please add e-mail"
		},
		contactMessage: {
			required: "Please add a message",
			maxlength: "Max length 2000 characters",
			minlength: "Min length 10 characters",
		},
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