$(document).ready(function() {

	const elementsArray = [
		$("#serviceCallback"),
		$("#serviceCallbackPopup"),
		$("#offerPopup")
	]

	elementsArray.forEach((e) => e.submit(() => {
		let th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			console.log("DONE")
			//location.reload();
		});
		return false;
	}))

});