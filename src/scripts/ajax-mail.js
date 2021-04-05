$(document).ready(function() {

	$("#serviceCallback").submit(function() {
		let th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			location.reload();
		});
		return false;
	});

	$("#serviceCallbackPopup").submit(function() {
		let th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			location.reload();
		});
		return false;
	});

	$("#offerPopup").submit(function() {
		let th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			console.log("DONE")
		});
		return false;
	});

});